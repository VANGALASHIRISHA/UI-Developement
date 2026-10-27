import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "./SectionHeading";
import { process } from "@/lib/data";
import { FloatingShapes } from "./FloatingShapes";
export default function Process() {
    return (<section id="process" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <FloatingShapes variant="section"/>
      <div className="container-px relative">
        <SectionHeading eyebrow="How we work" title="A six-stage process," highlight="visible the whole way" description="The same sequence runs through every engagement — the pace changes with scope, the discipline doesn't."/>

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-royal/20 via-royal/10 to-orange/20 lg:left-1/2 lg:block"/>

          <div className="space-y-10 lg:space-y-0">
            {process.map((item, i) => {
            const Icon = Icons[item.icon];
            const isEven = i % 2 === 0;
            return (<motion.div key={item.step} initial={{ opacity: 0, x: isEven ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="relative flex items-start gap-5 lg:grid lg:grid-cols-2 lg:gap-0 lg:py-8">
                  <div className={`hidden lg:block ${isEven ? "order-1 pr-14 text-right" : "order-2 pl-14"}`}>
                    <ProcessCard item={item} align={isEven ? "right" : "left"}/>
                  </div>

                  <div className={`absolute left-6 top-0 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-orange text-white shadow-softLg lg:static lg:left-1/2 lg:top-auto ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    {Icon && <Icon className="h-5 w-5" strokeWidth={2.25}/>}
                  </div>

                  <div className={`flex-1 pl-12 lg:hidden`}>
                    <ProcessCard item={item} align="left"/>
                  </div>
                </motion.div>);
        })}
          </div>
        </div>
      </div>
    </section>);
}
function ProcessCard({ item, align, }) {
    return (<div className={`inline-block max-w-md rounded-2xl border border-royal/8 bg-white p-6 shadow-soft ${align === "right" ? "text-right" : "text-left"}`}>
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-orange">
        Step {item.step}
      </span>
      <h3 className="mt-1.5 text-lg font-bold text-ink">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/55">{item.text}</p>
    </div>);
}
