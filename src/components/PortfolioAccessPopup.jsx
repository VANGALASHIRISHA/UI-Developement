import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, LayoutGrid, Loader2, Send, X } from "lucide-react";
// Same WhatsApp number already used across the site (Contact, FloatingLeadCard,
// WhatsAppButton, LeadPopup) — never duplicated or replaced.
const WHATSAPP_NUMBER = "917331120829";
const initialForm = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
};
export default function PortfolioAccessPopup({ isOpen, onClose, }) {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("form");
    const submittingRef = useRef(false);
    const resetAndClose = useCallback(() => {
        onClose();
        // Reset after the exit animation has time to play.
        window.setTimeout(() => {
            setForm(initialForm);
            setErrors({});
            setStatus("form");
            submittingRef.current = false;
        }, 250);
    }, [onClose]);
    // Close on Escape — never opens the portfolio.
    useEffect(() => {
        if (!isOpen)
            return;
        function onKeyDown(e) {
            if (e.key === "Escape")
                resetAndClose();
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, resetAndClose]);
    // Lock background scroll while open.
    useEffect(() => {
        if (typeof document === "undefined")
            return;
        if (isOpen) {
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = previousOverflow;
            };
        }
    }, [isOpen]);
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
        if (!form.email.trim()) {
            next.email = "Email address is required.";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            next.email = "Enter a valid email address.";
        }
        if (!form.phone.trim()) {
            next.phone = "Phone number is required.";
        }
        else if (!/^[+0-9\s\-()]{7,}$/.test(form.phone.trim())) {
            next.phone = "Enter a valid phone number.";
        }
        if (!form.message.trim())
            next.message = "Please tell us about your requirement.";
        setErrors(next);
        return Object.keys(next).length === 0;
    }
    function handleSubmit(e) {
        e.preventDefault();
        // Guard against double-clicks / duplicate WhatsApp launches.
        if (submittingRef.current)
            return;
        if (!validate())
            return;
        submittingRef.current = true;
        setStatus("submitting");
        const lines = [
            "New Portfolio Access Request",
            "",
            `Full Name: ${form.name.trim()}`,
            "",
            `Email: ${form.email.trim()}`,
            "",
            `Phone: ${form.phone.trim()}`,
            "",
            `Company: ${form.company.trim() || "-"}`,
            "",
            "Project Requirement:",
            form.message.trim(),
            "",
            "The user has requested access to the full Qwik Digital Solutions portfolio.",
        ];
        const encoded = encodeURIComponent(lines.join("\n"));
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
        // Small delay so the "Submitting..." state is visible and to keep the
        // WhatsApp tab open action tied to a single, deliberate click.
        window.setTimeout(() => {
            window.open(url, "_blank", "noopener,noreferrer");
            setStatus("success");
        }, 500);
    }
    function handleViewPortfolio() {
        onClose();
        window.open("https://portfolio.qwikdigitalsolutions.com/", "_blank", "noopener,noreferrer");
    }
    return (<AnimatePresence>
      {isOpen && (<div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Overlay — click outside to close, never opens the portfolio */}
          <motion.div key="portfolio-access-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute inset-0 bg-[#081227]/70 backdrop-blur-md" onMouseDown={resetAndClose} aria-hidden="true"/>

          <motion.div key="portfolio-access-card" role="dialog" aria-modal="true" aria-label="Get access to our full portfolio" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }} onMouseDown={(e) => e.stopPropagation()} className="relative z-10 max-h-[92vh] w-full max-w-[560px] overflow-y-auto rounded-[20px] bg-white shadow-[0_30px_80px_-20px_rgba(8,18,39,0.45)]">
            <button type="button" onClick={resetAndClose} aria-label="Close popup" className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink/50 shadow-soft backdrop-blur transition-colors hover:text-orange">
              <X className="h-[18px] w-[18px]"/>
            </button>

            {/* Header band */}
            <div className="relative overflow-hidden rounded-t-[20px] bg-gradient-to-br from-royal via-royal-600 to-[#191566] px-7 py-7 text-white sm:px-9 sm:py-8">
              <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{
                backgroundImage: "radial-gradient(circle at 15% 20%, #FF7A00 0%, transparent 45%), radial-gradient(circle at 90% 80%, #FF9633 0%, transparent 40%)",
            }}/>
              <div className="relative flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-orange-100">
                  <LayoutGrid className="h-[18px] w-[18px]"/>
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-white/70">
                  Qwik Digital Solutions
                </span>
              </div>
              <h3 className="relative mt-4 pr-8 text-xl font-extrabold leading-tight sm:text-2xl">
                Get Access to Our{" "}
                <span className="text-orange-100">Full Portfolio</span>
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/70">
                Please share your details with us to continue.
              </p>
            </div>

            <div className="px-7 py-7 sm:px-9 sm:py-8">
              <AnimatePresence mode="wait">
                {status !== "success" ? (<motion.form key="portfolio-access-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <PopupField label="Full Name" htmlFor="pa-name" error={errors.name}>
                        <input id="pa-name" type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Enter your full name" className="input-field" disabled={status === "submitting"}/>
                      </PopupField>

                      <PopupField label="Email Address" htmlFor="pa-email" error={errors.email}>
                        <input id="pa-email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Enter your email address" className="input-field" disabled={status === "submitting"}/>
                      </PopupField>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <PopupField label="Phone Number" htmlFor="pa-phone" error={errors.phone}>
                        <input id="pa-phone" type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="Enter your phone number" className="input-field" disabled={status === "submitting"}/>
                      </PopupField>

                      <PopupField label="Company Name (Optional)" htmlFor="pa-company">
                        <input id="pa-company" type="text" value={form.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Enter your company name" className="input-field" disabled={status === "submitting"}/>
                      </PopupField>
                    </div>

                    <PopupField label="Project Requirement / Message" htmlFor="pa-message" error={errors.message}>
                      <textarea id="pa-message" rows={3} value={form.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Tell us about your project or requirement" className="input-field resize-none" disabled={status === "submitting"}/>
                    </PopupField>

                    <motion.button type="submit" disabled={status === "submitting"} whileHover={status === "submitting" ? undefined : { scale: 1.02 }} whileTap={status === "submitting" ? undefined : { scale: 0.98 }} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-shadow hover:shadow-softLg disabled:cursor-not-allowed disabled:opacity-70">
                      {status === "submitting" ? (<>
                          Submitting...
                          <Loader2 className="h-4 w-4 animate-spin"/>
                        </>) : (<>
                          Submit &amp; View Portfolio
                          <Send className="h-4 w-4"/>
                        </>)}
                    </motion.button>

                    <p className="pt-1 text-center text-[11px] text-ink/40">
                      🔒 100% Secure • No Spam
                    </p>
                  </motion.form>) : (<motion.div key="portfolio-access-success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="flex flex-col items-center py-4 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-orange">
                      <CheckCircle2 className="h-8 w-8"/>
                    </div>
                    <h4 className="mt-4 text-xl font-extrabold text-ink">Thank You!</h4>
                    <p className="mt-2 max-w-[380px] text-sm leading-relaxed text-ink/60">
                      Your details have been submitted successfully. You can now
                      view our full portfolio.
                    </p>
                    <motion.button type="button" onClick={handleViewPortfolio} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-shadow hover:shadow-softLg">
                      <LayoutGrid className="h-4 w-4"/>
                      View Full Portfolio
                    </motion.button>
                  </motion.div>)}
              </AnimatePresence>
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
            .input-field:disabled {
              opacity: 0.6;
              cursor: not-allowed;
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
