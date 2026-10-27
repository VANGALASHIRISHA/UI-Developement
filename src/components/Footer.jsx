import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, ArrowUpRight, Send, CheckCircle2, Mail, Phone, } from "lucide-react";
import { navLinks } from "@/lib/data";
import { QText } from "./QText";
const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/qwikdigitalsolutions/" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/qwikdigitalsolution" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/qwik-digital-solutions/" },
];
const serviceLinks = [
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
    "SEO",
    "UI/UX Design",
    "Branding",
    "AI Automation",
    "Cloud Solutions",
];
export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    // Deterministic "random" particle layout so server & client markup match.
    const particles = useMemo(() => Array.from({ length: 18 }).map((_, i) => {
        const seed = (i * 53) % 100;
        return {
            left: `${(i * 5.7 + 3) % 100}%`,
            top: `${(seed * 1.9) % 100}%`,
            size: 2 + (i % 3),
            duration: 6 + (i % 5),
            delay: (i % 6) * 0.6,
            drift: i % 2 === 0 ? "16px" : "-14px",
        };
    }), []);
    function handleSubscribe(e) {
        e.preventDefault();
        if (!email)
            return;
        setSubscribed(true);
    }
    return (<footer className="relative overflow-hidden bg-navy pt-1">
      {/* Orange gradient top border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-orange via-orange-400 to-royal-400"/>

      <div className="relative overflow-hidden pt-16">
        {/* Subtle animated particles */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {particles.map((p, i) => (<span key={i} className="footer-particle" style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                // @ts-expect-error custom property for keyframes
                "--drift-x": p.drift,
            }}/>))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]"/>
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 -translate-y-1/3 translate-x-1/3 rounded-full bg-orange/10 blur-3xl"/>
        <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 translate-y-1/3 -translate-x-1/3 rounded-full bg-royal-400/15 blur-3xl"/>

        <div className="container-px relative">
          {/* Newsletter */}
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl3 border border-white/10 bg-white/[0.04] p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-lg font-bold text-white">
                <QText text="Get occasional Qwik build notes"/>
              </p>
              <p className="mt-1.5 max-w-sm text-sm text-white/50">
                Product, growth and engineering notes from the team — no
                spam, unsubscribe anytime.
              </p>
            </div>

            {subscribed ? (<div className="flex items-center gap-2 rounded-xl border border-orange/30 bg-orange/10 px-5 py-3.5 text-sm font-semibold text-orange">
                <CheckCircle2 className="h-4 w-4"/>
                You&apos;re subscribed
              </div>) : (<form onSubmit={handleSubscribe} className="flex w-full max-w-sm items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-1.5 sm:w-auto">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="w-full min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"/>
                <motion.button type="submit" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} aria-label="Subscribe" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange text-white transition-colors hover:bg-orange-600">
                  <Send className="h-4 w-4"/>
                </motion.button>
              </form>)}
          </div>

          <div className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.7fr_0.8fr_0.9fr]">
            {/* Logo + company */}
            <div>
              <a href="#top" className="flex items-center">
                <img src="/images/qwik-logo-dark.png" alt="Qwik Digital Solutions" className="h-9 w-auto select-none" draggable={false}/>
              </a>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
                <QText text="A full-stack digital studio building websites, apps, brands and growth systems for companies that move Qwik."/>
              </p>
              <div className="mt-6 flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (<a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange/40 hover:text-orange">
                    <Icon className="h-4 w-4"/>
                  </a>))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-sm font-semibold text-white">Quick Links</p>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (<li key={link.href}>
                    <a href={link.href} className="text-sm text-white/50 transition-colors hover:text-orange">
                      {link.label}
                    </a>
                  </li>))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-sm font-semibold text-white">Services</p>
              <ul className="mt-5 space-y-3">
                {serviceLinks.slice(0, 6).map((s) => (<li key={s}>
                    <a href="#services" className="text-sm text-white/50 transition-colors hover:text-orange">
                      {s}
                    </a>
                  </li>))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-semibold text-white">Contact</p>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange"/>
                  <a href="mailto:brandme@qwikdigitalsolutions.com" className="text-sm text-white/50 transition-colors hover:text-orange">
                    brandme@qwikdigitalsolutions.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange"/>
                  <a href="tel:+917331120829" className="text-sm text-white/50 transition-colors hover:text-orange">
                    +91 73311 20829
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-orange">
                    📍
                  </span>
                  <a href="https://maps.app.goo.gl/iiCCjLiGBY14SWSq6?g_st=aw" target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed text-white/50 transition-colors hover:text-orange">
                    Qwik Digital Solutions, Renuka Nilayam, Road No. 2,
                    Mamatha Nagar Colony, Nagole, Hyderabad, Telangana 500068
                  </a>
                </li>
              </ul>
              <a href="#contact" className="group mt-6 inline-flex items-center gap-1.5 rounded-xl bg-orange px-5 py-3 text-sm font-semibold text-white shadow-softLg transition-transform hover:scale-[1.02]">
                Contact us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; 2026 <QText text="Qwik"/> Digital Solutions. All Rights
              Reserved.
            </p>
            <div className="flex gap-6 text-xs text-white/40">
              <a href="#" className="transition-colors hover:text-orange">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-orange">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);
}
