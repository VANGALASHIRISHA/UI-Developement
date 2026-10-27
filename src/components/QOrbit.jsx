import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
/**
 * QOrbit — the signature Qwik brand animation.
 *
 * Watches every element marked by <QWord/> (data-q-word). The first time
 * one scrolls into view, a small clone of the logo mark detaches from the
 * navbar logo, glides along a soft arced path to that word, glows briefly
 * as it "merges" into the first letter, then glides back home. The real
 * logo never moves — only a floating clone does the travelling.
 */
export default function QOrbit() {
    const queueRef = useRef([]);
    const processedRef = useRef(new WeakSet());
    const runningRef = useRef(false);
    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin);
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced)
            return;
        const runQueue = async () => {
            if (runningRef.current)
                return;
            runningRef.current = true;
            while (queueRef.current.length > 0) {
                const el = queueRef.current.shift();
                if (!el)
                    continue;
                // eslint-disable-next-line no-await-in-loop
                await flyToWord(el);
                // eslint-disable-next-line no-await-in-loop
                await new Promise((r) => setTimeout(r, 180));
            }
            runningRef.current = false;
        };
        const flyToWord = (wordEl) => {
            return new Promise((resolve) => {
                // Prefer the persistent Q badge (always on-screen, wherever the
                // visitor has scrolled to) as the flight's origin; fall back to
                // the navbar logo only if the badge hasn't mounted yet.
                const logo = document.getElementById("qwik-q-badge") || document.getElementById("brand-q-icon");
                const letter = wordEl.querySelector("[data-q-letter]");
                if (!logo || !letter) {
                    resolve();
                    return;
                }
                const logoRect = logo.getBoundingClientRect();
                const letterRect = letter.getBoundingClientRect();
                const from = {
                    x: logoRect.left + logoRect.width / 2,
                    y: logoRect.top + logoRect.height / 2,
                };
                const to = {
                    x: letterRect.left + letterRect.width / 2,
                    y: letterRect.top + letterRect.height / 2,
                };
                // Skip the flight if the word is basically already at the logo
                // (e.g. still within the navbar) or off-screen.
                if (to.y < -40 || to.y > window.innerHeight + 40) {
                    resolve();
                    return;
                }
                const mid = {
                    x: (from.x + to.x) / 2,
                    y: Math.min(from.y, to.y) - 90,
                };
                const flyer = document.createElement("img");
                flyer.src = "/images/qwik-icon.png";
                flyer.alt = "";
                flyer.className = "q-flyer";
                document.body.appendChild(flyer);
                gsap.set(flyer, { x: from.x, y: from.y, xPercent: -50, yPercent: -50, opacity: 0, scale: 0.85 });
                const tl = gsap.timeline({
                    onComplete: () => {
                        flyer.remove();
                        resolve();
                    },
                });
                tl.to(flyer, { opacity: 1, duration: 0.12, ease: "power1.out" })
                    .to(flyer, {
                    motionPath: {
                        path: [from, mid, to],
                        curviness: 1.25,
                        autoRotate: false,
                    },
                    scale: 0.55,
                    duration: 0.75,
                    ease: "power2.inOut",
                })
                    .to(flyer, { opacity: 0, duration: 0.16 }, "-=0.12")
                    .add(() => {
                    letter.classList.add("q-merge-glow");
                    // Keep the persistent badge in sync — it flashes instead of
                    // ever disappearing itself.
                    window.dispatchEvent(new CustomEvent("qwik:q-pulse"));
                })
                    .to({}, { duration: 0.6 })
                    .add(() => letter.classList.remove("q-merge-glow"))
                    .set(flyer, {
                    x: to.x,
                    y: to.y,
                    opacity: 1,
                    scale: 0.55,
                })
                    .to(flyer, {
                    motionPath: {
                        path: [to, mid, from],
                        curviness: 1.25,
                        autoRotate: false,
                    },
                    scale: 0.85,
                    duration: 0.75,
                    ease: "power2.inOut",
                })
                    .to(flyer, { opacity: 0, duration: 0.18 });
            });
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const el = entry.target;
                if (entry.isIntersecting &&
                    !processedRef.current.has(el) &&
                    !queueRef.current.includes(el)) {
                    processedRef.current.add(el);
                    queueRef.current.push(el);
                    runQueue();
                }
            });
        }, { threshold: 0.6, rootMargin: "-90px 0px -10% 0px" });
        // Give the intro logo animation a moment to finish before the Q
        // starts detaching for in-view words.
        const timer = setTimeout(() => {
            document
                .querySelectorAll("[data-q-word]")
                .forEach((el) => observer.observe(el));
        }, 1400);
        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);
    return null;
}
