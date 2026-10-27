import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Stagger, staggerItem } from "./Reveal";
import { technologies } from "@/lib/data";
export default function Technologies() {
    return (<section id="technologies" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-royal/5 blur-3xl"/>
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange/8 blur-3xl"/>

      <div className="container-px relative">
        <SectionHeading eyebrow="Our Stack" title="Technologies we build" highlight="with, every day" description="A modern, battle-tested toolkit chosen for reliability, speed and long-term maintainability — not resume-driven trends."/>

        <Stagger stagger={0.08} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((group) => {
            const Icon = Icons[group.icon];
            return (<motion.div key={group.category} variants={staggerItem} whileHover={{ y: -5 }} className="rounded-2xl border border-royal/8 bg-white p-6 shadow-soft transition-shadow hover:shadow-softLg">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    {Icon && <Icon className="h-5 w-5" strokeWidth={2}/>}
                  </div>
                  <h3 className="text-base font-bold text-ink">{group.category}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (<span key={item} className="rounded-full border border-royal/10 bg-surface px-3 py-1.5 text-xs font-medium text-ink/70 transition-colors hover:border-orange/30 hover:text-orange">
                      {item}
                    </span>))}
                </div>
              </motion.div>);
        })}
        </Stagger>
      </div>
    </section>);
}
