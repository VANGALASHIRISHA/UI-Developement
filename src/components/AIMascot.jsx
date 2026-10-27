import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, Sparkles, X } from "lucide-react";
import { mascotGreeting, mascotHoverBubble, mascotQuestions } from "@/lib/mascot-knowledge";
/** The id of the relatively-positioned container the mascot is confined to. */
const MAIN_ID = "main-content-area";
/**
 * One safe "parking spot" per section, alternating sides so the mascot
 * travels naturally left/right as the visitor scrolls. Only sections that
 * actually exist on the page are watched — everything else (Navbar,
 * Footer, and sections without a dedicated spot) is simply never a target.
 */
const SECTION_CONFIG = [
    { id: "top", side: "right", vFrac: 0.34 },
    { id: "services", side: "right", vFrac: 0.16 },
    { id: "about", side: "left", vFrac: 0.42 },
    { id: "projects", side: "left", vFrac: 0.15 },
    { id: "clients", side: "right", vFrac: 0.3 },
    { id: "team", side: "left", vFrac: 0.18 },
    { id: "testimonials", side: "right", vFrac: 0.48 },
    { id: "contact", side: "left", vFrac: 0.14 },
];
const SECTION_IDS = SECTION_CONFIG.map((s) => s.id);
function isMobileViewport() {
    return typeof window !== "undefined" && window.innerWidth < 640;
}
/** Computes a document-relative (x, y) for the mascot inside #main-content-area. */
function computeTarget(sectionId) {
    if (typeof document === "undefined")
        return null;
    const main = document.getElementById(MAIN_ID);
    const section = document.getElementById(sectionId);
    const cfg = SECTION_CONFIG.find((s) => s.id === sectionId);
    if (!main || !section || !cfg)
        return null;
    const mainRect = main.getBoundingClientRect();
    const secRect = section.getBoundingClientRect();
    const mobile = isMobileViewport();
    const size = mobile ? 60 : 84;
    const sideMargin = mobile ? 12 : 28;
    const topMargin = mobile ? 64 : 96;
    const bottomMargin = mobile ? 56 : 88;
    const relLeft = secRect.left - mainRect.left;
    const relTop = secRect.top - mainRect.top;
    const x = cfg.side === "right"
        ? relLeft + secRect.width - size - sideMargin
        : relLeft + sideMargin;
    let y = relTop + cfg.vFrac * secRect.height;
    const minY = relTop + topMargin;
    const maxY = relTop + secRect.height - size - bottomMargin;
    if (maxY > minY) {
        y = Math.min(Math.max(y, minY), maxY);
    }
    else {
        y = relTop + Math.max(0, (secRect.height - size) / 2);
    }
    return { x: Math.max(8, x), y: Math.max(8, y) };
}
export default function AIMascot() {
    const [activeSection, setActiveSection] = useState("top");
    const [position, setPosition] = useState(null);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [panelView, setPanelView] = useState("list");
    const [selectedId, setSelectedId] = useState(null);
    const [bubble, setBubble] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isWaving, setIsWaving] = useState(false);
    const [panelSide, setPanelSide] = useState("right");
    const btnRef = useRef(null);
    const ratiosRef = useRef(new Map());
    const applyTarget = useCallback((sectionId) => {
        const target = computeTarget(sectionId);
        if (target)
            setPosition(target);
    }, []);
    // Detect which tracked section is currently most visible.
    useEffect(() => {
        const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter((el) => Boolean(el));
        if (sections.length === 0)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                ratiosRef.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
            });
            let bestId = null;
            let bestRatio = 0.12;
            ratiosRef.current.forEach((ratio, id) => {
                if (ratio > bestRatio) {
                    bestRatio = ratio;
                    bestId = id;
                }
            });
            if (bestId) {
                setActiveSection((current) => (current === bestId ? current : bestId));
            }
        }, { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1] });
        sections.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    // Move the mascot whenever the active section changes.
    useEffect(() => {
        const raf = requestAnimationFrame(() => applyTarget(activeSection));
        return () => cancelAnimationFrame(raf);
    }, [activeSection, applyTarget]);
    // Re-settle on layout shifts (images/fonts loading, resizing) so the
    // mascot never drifts onto text, buttons, or off the safe zone.
    useEffect(() => {
        const main = document.getElementById(MAIN_ID);
        if (!main)
            return;
        let frame = 0;
        const ro = new ResizeObserver(() => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => applyTarget(activeSection));
        });
        ro.observe(main);
        window.addEventListener("resize", () => applyTarget(activeSection));
        return () => {
            ro.disconnect();
            cancelAnimationFrame(frame);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSection]);
    // Small idle personality loop — an occasional hand wave. Blinking and
    // the subtle head-turn "look around" run continuously via CSS.
    useEffect(() => {
        const waveTimer = setInterval(() => {
            setIsWaving(true);
            setTimeout(() => setIsWaving(false), 1600);
        }, 13000);
        return () => clearInterval(waveTimer);
    }, []);
    const closePanel = useCallback(() => {
        setIsPanelOpen(false);
        setPanelView("list");
        setSelectedId(null);
    }, []);
    const openPanel = useCallback(() => {
        setHasInteracted(true);
        setBubble(false);
        const cfg = SECTION_CONFIG.find((s) => s.id === activeSection);
        setPanelSide(cfg?.side === "left" ? "left" : "right");
        setIsPanelOpen((open) => !open);
        if (isPanelOpen)
            closePanel();
    }, [activeSection, isPanelOpen, closePanel]);
    const askConsultation = useCallback(() => {
        window.dispatchEvent(new CustomEvent("qwik:open-consultation"));
        closePanel();
    }, [closePanel]);
    useEffect(() => {
        if (!isPanelOpen)
            return;
        const onKey = (e) => {
            if (e.key === "Escape")
                closePanel();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isPanelOpen, closePanel]);
    const selectedQA = mascotQuestions.find((q) => q.id === selectedId) || null;
    return (<div className="ai-mascot-layer pointer-events-none absolute left-0 top-0 h-0 w-0" style={{ zIndex: 40 }}>
      <div className="ai-mascot-wrapper pointer-events-none absolute left-0 top-0" style={{
            transform: `translate3d(${position?.x ?? 0}px, ${position?.y ?? 0}px, 0)`,
            opacity: position ? 1 : 0,
        }}>
        {/* Hover hint bubble */}
        {!isPanelOpen && bubble && (<div className="ai-hint pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-royal-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-royal shadow-softLg">
            {mascotHoverBubble}
            <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-royal-100 bg-white"/>
          </div>)}

        <button ref={btnRef} type="button" onClick={openPanel} onMouseEnter={() => !hasInteracted && setBubble(true)} onMouseLeave={() => setBubble(false)} onFocus={() => !hasInteracted && setBubble(true)} onBlur={() => setBubble(false)} aria-label={isPanelOpen ? "Close Qwik Assistant" : "Open Qwik Assistant"} className="ai-mascot-btn pointer-events-auto relative flex items-center justify-center">
          <MascotAvatar waving={isWaving} active={isPanelOpen}/>
        </button>
      </div>

      {isPanelOpen && (<QAPanel side={panelSide} view={panelView} question={selectedQA} onSelect={(id) => {
                setSelectedId(id);
                setPanelView("answer");
            }} onBack={() => {
                setPanelView("list");
                setSelectedId(null);
            }} onClose={closePanel} onConsult={askConsultation}/>)}

      <style jsx global>{`
        .ai-mascot-wrapper {
          transition: transform 2s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.4s ease;
          will-change: transform;
        }
        .ai-mascot-btn {
          width: 70px;
          height: 70px;
        }
        @media (min-width: 640px) {
          .ai-mascot-btn {
            width: 82px;
            height: 82px;
          }
        }
        .ai-hint {
          animation: ai-hint-in 0.22s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes ai-hint-in {
          from {
            opacity: 0;
            transform: translate(-50%, 6px) scale(0.94);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }

        .ai-float {
          animation: ai-float 4.4s ease-in-out infinite;
          transform-box: view-box;
          transform-origin: 50% 50%;
        }
        @keyframes ai-float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-6px) rotate(-1.4deg) scale(1.012);
          }
        }
        .ai-active {
          filter: brightness(1.04) saturate(1.06);
        }
        .ai-mascot-img {
          image-rendering: -webkit-optimize-contrast;
        }
        .ai-mascot-wave {
          animation: ai-mascot-wave 0.55s ease-in-out 3;
        }
        @keyframes ai-mascot-wave {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(-6deg) scale(1.05);
          }
        }

        .ai-panel-in {
          animation: ai-panel-in 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes ai-panel-in {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .ai-answer-in {
          animation: ai-answer-in 0.25s ease;
        }
        @keyframes ai-answer-in {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-mascot-wrapper {
            transition: opacity 0.4s ease;
          }
          .ai-float,
          .ai-mascot-wave,
          .ai-mascot-shadow {
            animation: none;
          }
        }
      `}</style>
    </div>);
}
function MascotAvatar({ waving, active }) {
    return (<div className="relative flex h-full w-full items-center justify-center">
      <img src="/images/robot-mascot-icon.png" alt="Qwik Assistant" className={`ai-float ai-mascot-img relative h-full w-full object-contain drop-shadow-[0_10px_18px_rgba(30,41,59,0.28)] ${active ? "ai-active" : ""} ${waving ? "ai-mascot-wave" : ""}`}/>
    </div>);
}
function QAPanel({ side, view, question, onSelect, onBack, onClose, onConsult, }) {
    return (<div role="dialog" aria-modal="true" aria-label="Qwik Assistant" className={`ai-panel-in pointer-events-auto fixed bottom-4 z-[90] flex max-h-[420px] w-[320px] max-w-[90vw] flex-col overflow-hidden rounded-[18px] border-2 border-royal-100 bg-white shadow-[0_24px_60px_-16px_rgba(46,42,168,0.35)] sm:bottom-6 ${side === "right" ? "right-4 sm:right-6" : "left-4 sm:left-6"}`}>
      {/* Header */}
      <div className="relative flex items-center gap-3 bg-gradient-to-r from-royal via-royal-500 to-royal-400 px-4 py-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-xl ring-1 ring-white/30">
          🤖
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-white">Qwik Assistant</p>
          <p className="truncate text-xs text-white/70">{mascotGreeting}</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Close Qwik Assistant panel" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white">
          <X className="h-4 w-4"/>
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto bg-surface px-4 py-4">
        {view === "list" ? (<div className="flex flex-wrap gap-2">
            {mascotQuestions.map((q) => (<button key={q.id} type="button" onClick={() => onSelect(q.id)} className="rounded-full border border-royal-100 bg-white px-3.5 py-2 text-left text-xs font-semibold text-royal transition-colors hover:border-orange hover:bg-orange-50 hover:text-orange-600">
                {q.question}
              </button>))}
          </div>) : (question && (<div className="ai-answer-in space-y-3">
              <button type="button" onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-semibold text-royal transition-colors hover:text-orange-600">
                <ArrowLeft className="h-3.5 w-3.5"/>
                Back to Questions
              </button>
              <div className="rounded-2xl border border-royal-100 bg-white px-3.5 py-3 shadow-sm">
                <p className="text-xs font-bold text-royal">{question.question}</p>
                <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-ink">
                  {question.answer}
                </p>
              </div>
              {question.showConsultCta && (<button type="button" onClick={onConsult} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-4 py-2.5 text-xs font-semibold text-white shadow-soft transition-shadow hover:shadow-softLg">
                  <Sparkles className="h-3.5 w-3.5"/>
                  Get Free Consultation
                </button>)}
            </div>))}
      </div>

      {/* Persistent footer CTA */}
      <div className="border-t border-royal-100 bg-white px-4 py-3">
        <button type="button" onClick={onConsult} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-orange bg-orange-50 px-4 py-2.5 text-xs font-semibold text-orange-600 transition-colors hover:bg-orange hover:text-white">
          <Sparkles className="h-3.5 w-3.5"/>
          Get Free Consultation
        </button>
      </div>
    </div>);
}
