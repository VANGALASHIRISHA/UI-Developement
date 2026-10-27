import { motion } from "framer-motion";
import { MapPin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
const services = [
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
    "SEO",
    "UI/UX Design",
    "Branding",
    "AI Automation",
    "Cloud Solutions",
];
const WHATSAPP_NUMBER = "917331120829";
export default function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const phone = String(data.get("phone") ?? "").trim();
        const service = String(data.get("service") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();
        if (!name || !email || !phone || !message) {
            form.reportValidity();
            return;
        }
        const lines = [
            "Hello Qwik Digital Solutions, I have submitted an enquiry through your website.",
            `Name: ${name}`,
            `Mobile Number: ${phone}`,
            `Email: ${email}`,
            `Company: -`,
            `Subject: ${service || "-"}`,
            `Message: ${message}`,
            "Please contact me.",
        ];
        const encoded = encodeURIComponent(lines.join("\n"));
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
        window.open(url, "_blank", "noopener,noreferrer");
        form.reset();
    }
    return (<section id="contact" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading eyebrow="Get in touch" title="Tell us what you're" highlight="trying to build" description="Share a few details and we'll come back with a scoped plan within one business day."/>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="left" className="space-y-5">
            <div className="overflow-hidden rounded-xl3 border border-royal/8 bg-white shadow-soft">
              <iframe title="Qwik Digital Solutions office location" src="https://www.google.com/maps?q=Qwik+Digital+Solutions,+Renuka+Nilayam,+Road+No.+2,+Mamatha+Nagar+Colony,+Nagole,+Hyderabad,+Telangana+500068&output=embed" className="h-64 w-full grayscale-[15%] transition-all duration-500 hover:grayscale-0 sm:h-72 lg:h-80" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>

              <div className="flex items-start gap-4 border-t border-royal/8 p-6 sm:p-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <MapPin className="h-5 w-5"/>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Our Office</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/55">
                    Qwik Digital Solutions, Renuka Nilayam,
                    <br className="hidden sm:block"/> Road No. 2, Mamatha Nagar Colony,
                    <br className="hidden sm:block"/> Nagole, Hyderabad, Telangana 500068
                  </p>
                  <a href="https://maps.app.goo.gl/iiCCjLiGBY14SWSq6?g_st=aw" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-royal transition-colors hover:text-orange">
                    Get directions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-xl3 border border-royal/8 bg-white p-7 shadow-soft sm:p-9">
              <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input id="name" name="name" type="text" required placeholder="Ananya Sharma" className="input-field"/>
                    </Field>
                    <Field label="Email address" htmlFor="email">
                      <input id="email" name="email" type="email" required placeholder="you@company.com" className="input-field"/>
                    </Field>
                  </div>

                  <Field label="Phone number" htmlFor="phone">
                    <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" pattern="^[+0-9\s\-()]{7,}$" className="input-field"/>
                  </Field>

                  <Field label="Service you need" htmlFor="service">
                    <select id="service" name="service" className="input-field" defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (<option key={s} value={s}>
                          {s}
                        </option>))}
                    </select>
                  </Field>

                  <Field label="Project details" htmlFor="message">
                    <textarea id="message" name="message" rows={4} required placeholder="Tell us about your goals, timeline and budget range." className="input-field resize-none"/>
                  </Field>

                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-shadow hover:shadow-softLg">
                    Send message
                    <Send className="h-4 w-4"/>
                  </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

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
    </section>);
}
function Field({ label, htmlFor, children, }) {
    return (<div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold text-ink/60">
        {label}
      </label>
      {children}
    </div>);
}
