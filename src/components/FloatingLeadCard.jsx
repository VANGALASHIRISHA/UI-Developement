import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, ArrowRight, Star } from "lucide-react";
const INITIAL_DELAY_MS = 5000;
const REOPEN_INTERVAL_MS = 120000; // 2 minutes
const ENGAGED_KEY = "qwik_float_card_engaged";
const WHATSAPP_NUMBER = "917331120829";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Qwik Digital Solutions, I'd like to talk to an expert about your services.")}`;
const services = [
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
    "SEO Services",
    "Branding & Design",
    "Cloud Solutions",
    "Custom Software Development",
];
export default function FloatingLeadCard() {
    const [wantsOpen, setWantsOpen] = useState(false);
    // True while the center consultation popup is on screen — the floating
    // card stays hidden during that window so the two never overlap.
    const [centerPopupOpen, setCenterPopupOpen] = useState(false);
    const engagedRef = useRef(false);
    const initialTimerRef = useRef(null);
    const reopenTimerRef = useRef(null);
    const clearAllTimers = useCallback(() => {
        if (initialTimerRef.current)
            clearTimeout(initialTimerRef.current);
        if (reopenTimerRef.current)
            clearTimeout(reopenTimerRef.current);
    }, []);
    const scheduleReopen = useCallback(() => {
        if (engagedRef.current)
            return;
        if (reopenTimerRef.current)
            clearTimeout(reopenTimerRef.current);
        reopenTimerRef.current = setTimeout(() => {
            if (!engagedRef.current)
                setWantsOpen(true);
        }, REOPEN_INTERVAL_MS);
    }, []);
    // Listen for the center popup's open/close state (dispatched from
    // LeadPopup) so this card never renders on top of — or ghosted behind —
    // that modal's dark overlay.
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        function onCenterPopup(e) {
            const detail = e.detail;
            setCenterPopupOpen(Boolean(detail?.open));
        }
        window.addEventListener("qwik:center-popup", onCenterPopup);
        return () => window.removeEventListener("qwik:center-popup", onCenterPopup);
    }, []);
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        if (window.sessionStorage.getItem(ENGAGED_KEY)) {
            engagedRef.current = true;
            return;
        }
        function startInitialTimer() {
            initialTimerRef.current = setTimeout(() => {
                if (!engagedRef.current)
                    setWantsOpen(true);
            }, INITIAL_DELAY_MS);
        }
        if (document.readyState === "complete") {
            startInitialTimer();
        }
        else {
            window.addEventListener("load", startInitialTimer, { once: true });
        }
        return () => {
            window.removeEventListener("load", startInitialTimer);
            clearAllTimers();
        };
    }, [clearAllTimers]);
    const visible = wantsOpen && !centerPopupOpen;
    function handleClose() {
        setWantsOpen(false);
        scheduleReopen();
    }
    function handleTalkToExpert() {
        engagedRef.current = true;
        window.sessionStorage.setItem(ENGAGED_KEY, "1");
        clearAllTimers();
        setWantsOpen(false);
    }
    function handleViewServices() {
        setWantsOpen(false);
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }
    return (<AnimatePresence>
      {visible && (<motion.div key="floating-lead-card" role="complementary" aria-label="Qwik Digital Solutions — quick enquiry" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }} className="fixed bottom-24 right-4 z-[150] w-[calc(100vw-2rem)] max-w-[264px] overflow-hidden rounded-2xl border border-white/40 bg-white/90 shadow-[0_18px_40px_-14px_rgba(8,18,39,0.35)] backdrop-blur-xl sm:bottom-28 sm:right-6">
          <button type="button" onClick={handleClose} aria-label="Close" className="absolute right-2.5 top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-ink/5 text-ink/50 transition-colors hover:bg-ink/10 hover:text-orange">
            <X className="h-[14px] w-[14px]"/>
          </button>

          {/* Accent header strip */}
          <div className="relative bg-gradient-to-r from-royal to-royal-600 px-4 pb-4 pt-4">
            <div className="pointer-events-none absolute -right-6 -top-8 h-20 w-20 rounded-full bg-orange/30 blur-2xl" aria-hidden="true"/>
            <div className="relative flex items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white p-1">
                <img src="/images/qwik-icon.png" alt="Qwik Digital Solutions" width={22} height={22} className="h-full w-full object-contain"/>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-orange/15 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-wide text-orange-100">
                <Star className="h-2.5 w-2.5 fill-current"/>
                Trusted Partner
              </span>
            </div>

            <h4 className="relative mt-2.5 text-[15px] font-extrabold leading-tight text-white">
              We Build. <span className="text-orange-100">You Grow.</span>
            </h4>
            <p className="relative mt-1 text-[11.5px] leading-snug text-white/70">
              Innovative digital solutions to help your business succeed.
            </p>
          </div>

          {/* Services list */}
          <div className="px-4 py-3.5">
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10.5px] text-ink/70">
              {services.map((s) => (<li key={s} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-orange"/>
                  <span className="leading-snug">{s}</span>
                </li>))}
            </ul>

            <div className="mt-3 flex flex-col gap-1.5">
              <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={handleTalkToExpert} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-orange px-3 py-2 text-[12px] font-semibold text-white shadow-soft transition-shadow hover:shadow-softLg">
                <MessageCircle className="h-3.5 w-3.5"/>
                Talk to Our Expert
              </motion.a>
              <button type="button" onClick={handleViewServices} className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-royal/25 px-3 py-2 text-[12px] font-semibold text-royal transition-colors hover:bg-royal/5">
                View Services
                <ArrowRight className="h-3 w-3"/>
              </button>
            </div>
          </div>
        </motion.div>)}
    </AnimatePresence>);
}
