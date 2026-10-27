import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, Send } from "lucide-react";
const SHOWN_KEY = "qwik_center_popup_shown";
const INITIAL_DELAY_MS = 3000;
const WHATSAPP_NUMBER = "917331120829";
const serviceOptions = [
    "Website Development",
    "Mobile App Development",
    "Full Stack Development",
    "Digital Marketing",
    "SEO",
    "Branding",
    "Cloud Solutions",
    "Custom Software Development",
    "Other",
];
const checklist = [
    "Website Development",
    "Mobile App Development",
    "Digital Marketing & SEO",
    "Branding & Design",
    "Cloud Solutions",
    "Custom Software Development",
];
const initialForm = {
    name: "",
    mobile: "",
    email: "",
    company: "",
    service: "",
};
export default function LeadPopup() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const initialTimerRef = useRef(null);
    const cardRef = useRef(null);
    const handleClose = useCallback(() => setOpen(false), []);
    // Opens once, 3s after the page has finished loading — never again this
    // browser session, whether the visitor submits or dismisses it.
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        if (window.sessionStorage.getItem(SHOWN_KEY))
            return;
        function startTimer() {
            initialTimerRef.current = setTimeout(() => {
                setOpen(true);
                window.sessionStorage.setItem(SHOWN_KEY, "1");
            }, INITIAL_DELAY_MS);
        }
        if (document.readyState === "complete") {
            startTimer();
        }
        else {
            window.addEventListener("load", startTimer, { once: true });
        }
        return () => {
            window.removeEventListener("load", startTimer);
            if (initialTimerRef.current)
                clearTimeout(initialTimerRef.current);
        };
    }, []);
    // Close on Escape.
    useEffect(() => {
        if (!open)
            return;
        function onKeyDown(e) {
            if (e.key === "Escape")
                handleClose();
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, handleClose]);
    // Lets other UI (e.g. the Qwik Assistant mascot's "Get Free Consultation"
    // button) open this same popup instead of duplicating the form elsewhere.
    useEffect(() => {
        function onExternalOpen() {
            setOpen(true);
        }
        window.addEventListener("qwik:open-consultation", onExternalOpen);
        return () => window.removeEventListener("qwik:open-consultation", onExternalOpen);
    }, []);
    // Lock background scroll while open.
    useEffect(() => {
        if (typeof document === "undefined")
            return;
        if (open) {
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = previousOverflow;
            };
        }
    }, [open]);
    function handleChange(field, value) {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    }
    function validate() {
        const next = {};
        if (!form.name.trim())
            next.name = "Full name is required.";
        if (!form.mobile.trim()) {
            next.mobile = "Mobile number is required.";
        }
        else if (!/^[+0-9\s\-()]{7,}$/.test(form.mobile.trim())) {
            next.mobile = "Enter a valid mobile number.";
        }
        if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            next.email = "Enter a valid email address.";
        }
        if (!form.service)
            next.service = "Please select a service.";
        setErrors(next);
        return Object.keys(next).length === 0;
    }
    // Builds the enquiry as a pre-filled WhatsApp message and opens it
    // directly — nothing is saved to a database or sent by email.
    function handleSubmit(e) {
        e.preventDefault();
        if (!validate())
            return;
        const lines = [
            "Hello Qwik Digital Solutions, I would like to enquire about your services.",
            `Name: ${form.name.trim()}`,
            `Mobile: ${form.mobile.trim()}`,
            `Email: ${form.email.trim() || "-"}`,
            `Company: ${form.company.trim() || "-"}`,
            `Service Required: ${form.service}`,
            "Please contact me. Thank you.",
        ];
        const message = encodeURIComponent(lines.join("\n"));
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
        window.open(url, "_blank", "noopener,noreferrer");
        setOpen(false);
        setForm(initialForm);
    }
    // Let the floating card know when this modal is open so the two never
    // overlap — the floating card hides itself while this is up and resumes
    // afterward.
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        window.dispatchEvent(new CustomEvent("qwik:center-popup", { detail: { open } }));
    }, [open]);
    return (<AnimatePresence>
      {open && (<div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Dark blur overlay — click outside to close */}
          <motion.div key="lead-popup-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute inset-0 bg-[#081227]/70 backdrop-blur-md" onMouseDown={handleClose} aria-hidden="true"/>

          <motion.div key="lead-popup-card" ref={cardRef} role="dialog" aria-modal="true" aria-label="Get your free consultation" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }} onMouseDown={(e) => e.stopPropagation()} className="relative z-10 grid max-h-[92vh] w-full max-w-[960px] grid-cols-1 overflow-y-auto rounded-[20px] bg-white shadow-[0_30px_80px_-20px_rgba(8,18,39,0.45)] md:grid-cols-[0.85fr_1.15fr]">
            <button type="button" onClick={handleClose} aria-label="Close popup" className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink/50 shadow-soft backdrop-blur transition-colors hover:text-orange">
              <X className="h-[18px] w-[18px]"/>
            </button>

            {/* Left panel */}
            <div className="relative flex flex-col overflow-hidden bg-gradient-to-br from-royal via-royal-600 to-[#191566] px-7 py-8 text-white sm:px-9 sm:py-10 md:min-h-full">
              <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{
                backgroundImage: "radial-gradient(circle at 20% 20%, #FF7A00 0%, transparent 45%), radial-gradient(circle at 85% 75%, #FF9633 0%, transparent 40%)",
            }}/>
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange/20 blur-3xl" aria-hidden="true"/>
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true"/>

              <div className="relative flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5">
                  <img src="/images/qwik-icon.png" alt="Qwik Digital Solutions" width={32} height={32} className="h-full w-full object-contain"/>
                </div>
                <span className="text-sm font-bold tracking-wide">
                  Qwik Digital Solutions
                </span>
              </div>

              <h3 className="relative mt-6 text-2xl font-extrabold leading-tight sm:text-[26px]">
                Welcome to{" "}
                <span className="text-orange-100">Qwik Digital Solutions</span>
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/70">
                We help businesses grow through Digital Marketing, Web
                Development, Full Stack Applications, Branding, SEO,
                Performance Marketing, Cloud Solutions, and Custom Software
                Development.
              </p>

              <ul className="relative mt-6 space-y-2.5 text-sm text-white/85">
                {checklist.map((item) => (<li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-orange"/>
                    {item}
                  </li>))}
              </ul>

              <div className="relative mt-8 hidden flex-1 items-end justify-center sm:flex">
                <TeamIllustration />
              </div>
            </div>

            {/* Right panel — form */}
            <div className="px-7 py-8 sm:px-9 sm:py-10">
              <h3 className="text-xl font-extrabold leading-snug text-ink sm:text-[22px]">
                Get Your <span className="text-orange">Free Consultation</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Fill in your details and our experts will connect with you
                shortly.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <PopupField label="Full Name" htmlFor="lp-name" error={errors.name}>
                  <input id="lp-name" type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Ananya Sharma" className="input-field"/>
                </PopupField>

                <PopupField label="Mobile Number" htmlFor="lp-mobile" error={errors.mobile}>
                  <input id="lp-mobile" type="tel" value={form.mobile} onChange={(e) => handleChange("mobile", e.target.value)} placeholder="+91 98765 43210" className="input-field"/>
                </PopupField>

                <PopupField label="Email Address" htmlFor="lp-email" error={errors.email}>
                  <input id="lp-email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="you@company.com" className="input-field"/>
                </PopupField>

                <PopupField label="Company Name (Optional)" htmlFor="lp-company">
                  <input id="lp-company" type="text" value={form.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Your company" className="input-field"/>
                </PopupField>

                <PopupField label="Service Required" htmlFor="lp-service" error={errors.service}>
                  <select id="lp-service" value={form.service} onChange={(e) => handleChange("service", e.target.value)} className="input-field">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (<option key={s} value={s}>
                        {s}
                      </option>))}
                  </select>
                </PopupField>

                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-shadow hover:shadow-softLg">
                  Get My Free Consultation
                  <Send className="h-4 w-4"/>
                </motion.button>

                <p className="pt-1 text-center text-[11px] text-ink/40">
                  🔒 100% Secure • No Spam
                </p>
              </form>
            </div>
          </motion.div>

          <style jsx global>{`
            .input-field {
              width: 100%;
              border-radius: 12px;
              border: 1px solid rgba(45, 35, 168, 0.12);
              background: #f5f8ff;
              padding: 0.7rem 1rem;
              font-size: 0.9rem;
              color: #1e293b;
              transition: border-color 0.2s, box-shadow 0.2s;
            }
            .input-field:focus {
              outline: none;
              border-color: #ff7a00;
              box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.12);
            }
            .input-field::placeholder {
              color: rgba(30, 41, 59, 0.35);
            }
          `}</style>
        </div>)}
    </AnimatePresence>);
}
function PopupField({ label, htmlFor, error, children, }) {
    return (<div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold text-ink/60">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-red-500">{error}</p>}
    </div>);
}
function TeamIllustration() {
    return (<svg viewBox="0 0 320 190" className="h-auto w-full max-w-[300px]" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a business team working with laptops">
      <ellipse cx="160" cy="178" rx="140" ry="10" fill="#000" opacity="0.15"/>

      {/* Center person + big screen */}
      <rect x="118" y="20" width="84" height="58" rx="8" fill="#FFFFFF" opacity="0.1"/>
      <rect x="126" y="28" width="68" height="42" rx="5" fill="#FF7A00" opacity="0.9"/>
      <rect x="133" y="35" width="30" height="4" rx="2" fill="#FFFFFF" opacity="0.9"/>
      <rect x="133" y="44" width="46" height="4" rx="2" fill="#FFFFFF" opacity="0.55"/>
      <rect x="133" y="52" width="38" height="4" rx="2" fill="#FFFFFF" opacity="0.55"/>
      <rect x="152" y="78" width="16" height="10" fill="#FFFFFF" opacity="0.2"/>
      <circle cx="160" cy="105" r="15" fill="#FFD9A8"/>
      <path d="M138 150c2-24 12-36 22-36s20 12 22 36z" fill="#FFFFFF" opacity="0.92"/>

      {/* Left person with laptop */}
      <circle cx="65" cy="112" r="13" fill="#FFD9A8"/>
      <path d="M42 152c2-20 12-30 23-30s21 10 23 30z" fill="#FF9633"/>
      <rect x="40" y="150" width="50" height="6" rx="3" fill="#EEEDFB"/>
      <rect x="48" y="140" width="34" height="14" rx="3" fill="#2E2AA8" opacity="0.85"/>

      {/* Right person with laptop */}
      <circle cx="255" cy="108" r="13" fill="#FFD9A8"/>
      <path d="M232 150c2-21 12-32 23-32s21 11 23 32z" fill="#2E2AA8" opacity="0.8"/>
      <rect x="230" y="148" width="50" height="6" rx="3" fill="#EEEDFB"/>
      <rect x="238" y="138" width="34" height="14" rx="3" fill="#FF7A00" opacity="0.9"/>

      {/* Sparkle accents */}
      <g fill="#FF9633">
        <circle cx="30" cy="55" r="3"/>
        <circle cx="290" cy="140" r="3"/>
        <circle cx="290" cy="55" r="2.5"/>
      </g>
    </svg>);
}
