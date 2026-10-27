import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { megaMenus } from "@/lib/data";
export default function MegaMenu({ activeKey, onMouseEnter, onMouseLeave, }) {
    const menu = megaMenus[activeKey];
    if (!menu)
        return null;
    return (<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="absolute inset-x-0 top-full z-40 hidden pt-3 nav:block">
      <div className="container-px">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-xl3 border border-white/60 bg-white/85 shadow-softLg backdrop-blur-2xl">
          <div className="grid grid-cols-[1.05fr_1fr]">
            {/* Left: hero image + description */}
            <div className="relative overflow-hidden p-8">
              <div className="relative overflow-hidden rounded-xl2 shadow-soft">
                <img src={menu.image} alt={menu.imageAlt} className="h-52 w-full object-cover" loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-royal/70 via-royal/0 to-transparent"/>
                <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {menu.label}
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink/60">
                {menu.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {menu.quickLinks.map((link) => (<a key={link.label} href={link.href} className="rounded-full border border-royal/10 bg-surface px-3.5 py-1.5 text-xs font-medium text-royal transition-colors hover:border-orange/30 hover:bg-orange/10 hover:text-orange-600">
                    {link.label}
                  </a>))}
              </div>
            </div>

            {/* Right: featured service cards */}
            <div className="border-l border-royal/8 bg-surface/50 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                Featured
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2.5">
                {menu.features.map((feature) => {
            const Icon = Icons[feature.icon];
            return (<a key={feature.title} href={activeKey} className="group flex items-start gap-3.5 rounded-xl border border-transparent bg-white px-4 py-3.5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-orange/20 hover:shadow-softLg">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-royal/8 text-royal transition-colors duration-200 group-hover:bg-orange group-hover:text-white">
                        {Icon && <Icon className="h-4.5 w-4.5" strokeWidth={2}/>}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-1 text-sm font-bold text-ink">
                          {feature.title}
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-orange opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"/>
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-ink/50">
                          {feature.text}
                        </span>
                      </span>
                    </a>);
        })}
              </div>

              <a href="#contact" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5">
                Get Started
                <ArrowRight className="h-4 w-4"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>);
}
