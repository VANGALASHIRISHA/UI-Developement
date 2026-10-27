import Reveal, { Stagger, staggerItem } from "./Reveal";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { stats } from "@/lib/data";
export default function Stats() {
    return (<section className="relative overflow-hidden bg-gradient-to-br from-royal via-royal to-royal-600 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]"/>
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-orange/10 blur-3xl"/>
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl"/>

      <div className="container-px relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">
            By the numbers
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Results, not just deliverables
          </h2>
        </Reveal>

        <Stagger stagger={0.1} className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => {
            const Icon = Icons[stat.icon];
            return (<motion.div key={stat.label} variants={staggerItem} whileHover={{ y: -4 }} className="text-center">
                <motion.div whileHover={{ rotate: 8, scale: 1.06 }} transition={{ type: "spring", stiffness: 300, damping: 18 }} className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 text-orange shadow-soft backdrop-blur">
                  {Icon && <Icon className="h-6 w-6" strokeWidth={2}/>}
                </motion.div>
                <p className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix}/>
                </p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </motion.div>);
        })}
        </Stagger>
      </div>
    </section>);
}
