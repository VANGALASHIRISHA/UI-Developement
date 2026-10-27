import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Stagger, staggerItem } from "./Reveal";
import { whyChooseUs } from "@/lib/data";
import Spark from "./Spark";
export default function WhyChooseUs() {
    return (<section id="why-us" className="relative bg-surface py-24 sm:py-32">
      <div className="container-px relative">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading align="left" eyebrow="Why Qwik" title="The difference shows up" highlight="in the first sprint" className="lg:mx-0"/>
            <div className="mt-10 hidden items-center gap-6 lg:flex">
              <Spark className="h-32 w-20 text-royal" strokeWidth={7}/>
              <p className="max-w-[220px] text-sm text-ink/50">
                One bolt, drawn once — the same instinct for speed and clarity
                runs through everything we ship.
              </p>
            </div>
          </div>

          <Stagger stagger={0.09} className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item) => {
            const Icon = Icons[item.icon];
            return (<motion.div key={item.title} variants={staggerItem} whileHover={{ y: -5 }} className="rounded-2xl border border-royal/8 bg-white p-6 shadow-soft transition-shadow hover:shadow-softLg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    {Icon && <Icon className="h-5 w-5" strokeWidth={2}/>}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{item.text}</p>
                </motion.div>);
        })}
          </Stagger>
        </div>
      </div>
    </section>);
}
