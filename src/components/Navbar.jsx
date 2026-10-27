// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X, Phone } from "lucide-react";
// import { navLinks } from "@/lib/data";
// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState<string>("#top");
//   const menuRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     document.documentElement.style.overflow = open ? "hidden" : "";
//     return () => {
//       document.documentElement.style.overflow = "";
//     };
//   }, [open]);
//   // Close the mobile slide-in menu automatically if the viewport grows past
//   // the "nav" breakpoint (e.g. rotating a tablet from portrait to
//   // landscape, or resizing a browser window), so it never gets stuck open
//   // once the full horizontal nav has room to show instead.
//   useEffect(() => {
//     const NAV_BREAKPOINT = 1120;
//     const onResize = () => {
//       if (window.innerWidth >= NAV_BREAKPOINT) setOpen(false);
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);
//   // Close the mobile menu on Escape for keyboard users.
//   useEffect(() => {
//     if (!open) return;
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [open]);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   // Scroll-spy — highlights the nav link for whichever section is currently
//   // in view, so the active item always carries the orange underline.
//   useEffect(() => {
//     const sections = navLinks
//       .map((link) => document.getElementById(link.href.replace("#", "")))
//       .filter((el): el is HTMLElement => Boolean(el));
//     if (sections.length === 0) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(`#${entry.target.id}`);
//           }
//         });
//       },
//       { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
//     );
//     sections.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);
//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 h-20 bg-white transition-shadow duration-300 ${
//         scrolled ? "shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)]" : "shadow-none"
//       }`}
//     >
//       <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 pl-6 pr-4 sm:pl-8 sm:pr-6 nav-lg:pl-10 nav-lg:pr-8">
//         {/* LEFT: official logo — displayed exactly as provided, as a single
//             complete lockup (icon + "wik" + "DIGITAL SOLUTIONS"), enlarged so
//             the "DIGITAL SOLUTIONS" wordmark stays legible at header size.
//             Scaling is uniform, so proportions, colors and branding are
//             unchanged. The anchor doubles as the animated Q clone's home
//             position (QOrbit.tsx uses #brand-q-icon). */}
//         <a href="#top" id="brand-q-icon" className="flex shrink-0 items-center">
//           <img
//             src="/images/qwik-logo-full.png"
//             alt="Qwik Digital Solutions"
//             className="h-12 w-auto select-none nav:h-14 nav-lg:h-16"
//             draggable={false}
//           />
//         </a>
//         {/* CENTER: nav menu — single, non-wrapping horizontal row, no
//             dropdowns, no arrows. Evenly spaced items; the surrounding
//             justify-between on the header row balances the gap on either
//             side of the menu automatically. */}
// <nav className="no-scrollbar hidden min-w-0 items-center justify-center gap-8 overflow-x-auto font-poppins nav:flex nav-lg:gap-10">
//           {navLinks.map((link) => {
//             const isActive = activeSection === link.href;
//             return (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className={`nav-link relative shrink-0 whitespace-nowrap py-2 text-[14.5px] font-medium transition-colors duration-300 nav-lg:text-base ${
//                   isActive ? "nav-link-active" : "text-ink"
//                 }`}
//               >
//                 {link.label}
//               </a>
//             );
//           })}
//         </nav>
//         {/* RIGHT: CTA — visible on tablet and desktop */}
//         <div className="hidden shrink-0 items-center nav:flex">
//           <a
//             href="#contact"
//             className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-orange px-5 py-3 font-poppins text-[13.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 nav-lg:px-7 nav-lg:py-3.5 nav-lg:text-[15px]"
//           >
//             Get Free Consultation
//           </a>
//         </div>
//         {/* Mobile toggle — visible below the tablet breakpoint only */}
//         <button
//           onClick={() => setOpen(true)}
//           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-royal/10 text-royal nav:hidden"
//           aria-label="Open menu"
//         >
//           <Menu className="h-5 w-5" />
//         </button>
//       </div>
//       {/* Full-screen animated mobile slide-in menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             ref={menuRef}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
//             className="fixed inset-0 z-[60] flex flex-col bg-white/98 backdrop-blur-2xl nav:hidden"
//           >
//             <div className="flex h-20 shrink-0 items-center justify-between border-b border-ink/[0.06] px-6">
//               <a
//                 href="#top"
//                 onClick={() => setOpen(false)}
//                 className="flex items-center"
//               >
//                 <img
//                   src="/images/qwik-logo-full.png"
//                   alt="Qwik Digital Solutions"
//                   className="h-12 w-auto select-none"
//                   draggable={false}
//                 />
//               </a>
//               <button
//                 onClick={() => setOpen(false)}
//                 className="flex h-10 w-10 items-center justify-center rounded-lg border border-royal/10 text-royal"
//                 aria-label="Close menu"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
//             <nav className="flex flex-1 flex-col items-center justify-center gap-1 overflow-y-auto py-8 font-poppins">
//               {navLinks.map((link, i) => (
//                 <motion.a
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   initial={{ opacity: 0, y: 14 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: 0.05 + i * 0.04 }}
//                   className={`rounded-lg px-4 py-3 text-xl font-medium transition-colors duration-300 hover:text-orange ${
//                     activeSection === link.href ? "text-orange" : "text-ink"
//                   }`}
//                 >
//                   {link.label}
//                 </motion.a>
//               ))}
//               <motion.a
//                 href="tel:+917331120829"
//                 onClick={() => setOpen(false)}
//                 initial={{ opacity: 0, y: 14 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.3,
//                   delay: 0.05 + navLinks.length * 0.04,
//                 }}
//                 className="mt-6 flex items-center gap-2 text-[15px] font-semibold text-royal"
//               >
//                 <Phone className="h-4 w-4" />
//                 +91 73311 20829
//               </motion.a>
//               <motion.a
//                 href="#contact"
//                 onClick={() => setOpen(false)}
//                 initial={{ opacity: 0, y: 14 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.3,
//                   delay: 0.09 + navLinks.length * 0.04,
//                 }}
//                 className="mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-orange px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-orange-600"
//               >
//                 Get Free Consultation
//               </motion.a>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/lib/data";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("#top");
    const menuRef = useRef(null);
    useEffect(() => {
        document.documentElement.style.overflow = open ? "hidden" : "";
        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [open]);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    // Scroll-spy — highlights the nav link for whichever section is currently
    // in view, so the active item always carries the orange underline.
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.href.replace("#", "")))
            .filter((el) => Boolean(el));
        if (sections.length === 0)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
        sections.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    return (<header className={`fixed inset-x-0 top-0 z-50 h-20 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)]" : "shadow-none"}`}>
      <div className="mx-auto flex h-full max-w-[1480px] items-center justify-between gap-3 pl-6 pr-4 sm:pl-8 sm:pr-6 nav:gap-3 nav-lg:pr-10">
        {/* LEFT: official logo — displayed exactly as provided, as a single
            complete lockup (icon + "wik" + "DIGITAL SOLUTIONS"), enlarged so
            the "DIGITAL SOLUTIONS" wordmark stays legible at header size.
            Scaling is uniform, so proportions, colors and branding are
            unchanged. The anchor doubles as the animated Q clone's home
            position. #qwik-q-badge is an invisible marker positioned
            exactly on the orange Q glyph inside the lockup (measured from
            the source PNG) so the flying clone launches from — and lands
            back on — the real Q instead of the visual center of the whole
            "Qwik DIGITAL SOLUTIONS" lockup (QOrbit.tsx reads this id
            first, falling back to #brand-q-icon only if it's missing). */}
        <a href="#top" id="brand-q-icon" className="relative flex shrink-0 items-center">
          <span id="qwik-q-badge" aria-hidden="true" className="pointer-events-none absolute h-px w-px -translate-x-1/2 -translate-y-1/2 opacity-0" style={{ left: "18.7%", top: "42%" }}/>
          <img src="/images/qwik-logo-full.png" alt="Qwik Digital Solutions" className="h-12 w-auto select-none nav:h-14" draggable={false}/>
        </a>

        {/* CENTER: nav menu — single, non-wrapping horizontal row, no
            dropdowns, no arrows. Evenly spaced items; the surrounding
            justify-between on the header row balances the gap on either
            side of the menu automatically. */}
    <nav className="no-scrollbar hidden min-w-0 flex-1 items-center justify-center gap-5 overflow-x-auto font-poppins nav:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (<a key={link.href} href={link.href} className={`nav-link relative shrink-0 whitespace-nowrap py-2 text-[13px] font-medium transition-colors duration-300 ${isActive ? "nav-link-active" : "text-ink"}`}>
                {link.label}
              </a>);
        })}
        </nav>

        {/* RIGHT: CTA — visible on tablet and desktop. Phone number is
            intentionally omitted here; it only appears in the mobile
            slide-in menu below. */}
        <div className="hidden shrink-0 items-center justify-end gap-3 nav:flex">
          <a href="#contact" className="ml-auto inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-orange px-4 py-2.5 font-poppins text-[11px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600">
            Get Free Consultation
          </a>
        </div>

        {/* Mobile toggle — visible below the tablet breakpoint only */}
        <button onClick={() => setOpen(true)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-royal/10 text-royal nav:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5"/>
        </button>
      </div>

      {/* Full-screen animated mobile slide-in menu */}
      <AnimatePresence>
        {open && (<motion.div ref={menuRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }} className="fixed inset-0 z-[60] flex flex-col bg-white nav:hidden">
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-ink/[0.06] px-6">
              <a href="#top" onClick={() => setOpen(false)} className="flex items-center">
                <img src="/images/qwik-logo-full.png" alt="Qwik Digital Solutions" className="h-12 w-auto select-none" draggable={false}/>
              </a>
              <button onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-royal/10 text-royal" aria-label="Close menu">
                <X className="h-5 w-5"/>
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-1 overflow-y-auto py-8 font-poppins">
              {navLinks.map((link, i) => (<motion.a key={link.href} href={link.href} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05 + i * 0.04 }} className={`rounded-lg px-4 py-3 text-xl font-medium transition-colors duration-300 hover:text-orange ${activeSection === link.href ? "text-orange" : "text-ink"}`}>
                  {link.label}
                </motion.a>))}
              <motion.a href="tel:+917331120829" onClick={() => setOpen(false)} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{
                duration: 0.3,
                delay: 0.05 + navLinks.length * 0.04,
            }} className="mt-6 flex items-center gap-2 text-[15px] font-semibold text-royal">
                <Phone className="h-4 w-4"/>
                +91 73311 20829
              </motion.a>
              <motion.a href="#contact" onClick={() => setOpen(false)} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{
                duration: 0.3,
                delay: 0.09 + navLinks.length * 0.04,
            }} className="mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-orange px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-orange-600">
                Get Free Consultation
              </motion.a>
            </nav>
          </motion.div>)}
      </AnimatePresence>
    </header>);
}
