import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Stagger, staggerItem } from "./Reveal";
import { services } from "@/lib/data";
import { FloatingShapes } from "./FloatingShapes";
export default function Services() {
    return (<section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <FloatingShapes variant="section"/>
      <div className="container-px relative">
        <SectionHeading eyebrow="What we bring" title="Every discipline your" highlight="digital roadmap needs" description="Eight capabilities, one accountable team — no stitching together separate vendors for design, code and growth." titleVariant="premium-orange"/>

        <Stagger stagger={0.08} className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = Icons[service.icon];
            return (<motion.div key={service.id} variants={staggerItem} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="group relative overflow-hidden rounded-xl3 border border-royal/8 bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-softLg">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-royal to-orange transition-transform duration-300 group-hover:scale-x-100"/>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/8 text-royal transition-colors duration-300 group-hover:bg-royal group-hover:text-white">
                  {Icon && <Icon className="h-6 w-6" strokeWidth={2}/>}
                </div>

                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-orange">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
                  {service.blurb}
                </p>

                <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"/>
                </a>

                {/* Glass hover sheen */}
                <div className="pointer-events-none absolute -inset-px rounded-xl3 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
              </motion.div>);
        })}
        </Stagger>
      </div>
    </section>);
}
