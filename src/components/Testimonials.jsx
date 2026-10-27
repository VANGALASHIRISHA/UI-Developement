import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";
import { QText } from "./QText";
const AUTO_MS = 6000;
export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [paused, setPaused] = useState(false);
    const go = useCallback((next, dir) => {
        setDirection(dir);
        setIndex((next + testimonials.length) % testimonials.length);
    }, []);
    useEffect(() => {
        if (paused)
            return;
        const id = setInterval(() => go(index + 1, 1), AUTO_MS);
        return () => clearInterval(id);
    }, [index, paused, go]);
    const t = testimonials[index];
    return (<section id="testimonials" className="relative overflow-hidden py-24 sm:py-32" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/5 blur-3xl"/>
      <div className="container-px relative">
        <SectionHeading eyebrow="Client voices" title="What it's like to" highlight="build with us"/>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="relative overflow-hidden rounded-xl3 border border-royal/8 bg-white p-8 shadow-softLg sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-orange/10 sm:right-10 sm:top-10" fill="currentColor" strokeWidth={0}/>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={index} custom={direction} initial={{ opacity: 0, x: 40 * direction }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 * direction }} transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }} className="relative">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 text-orange" fill="currentColor" strokeWidth={0}/>))}
                </div>

                <p className="mt-5 text-xl font-semibold leading-relaxed text-ink sm:text-2xl">
                  &ldquo;<QText text={t.quote}/>&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-3.5 border-t border-royal/8 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal to-orange text-sm font-bold text-white">
                    {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button onClick={() => go(index - 1, -1)} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-royal/10 bg-white text-royal shadow-soft transition-all hover:border-orange/30 hover:text-orange active:scale-95">
              <ChevronLeft className="h-4 w-4"/>
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (<button key={item.name} onClick={() => go(i, i > index ? 1 : -1)} aria-label={`Go to testimonial ${i + 1}`} className="group relative h-2 overflow-hidden rounded-full bg-royal/10" style={{ width: i === index ? 28 : 8 }}>
                  {i === index && (<motion.span key={paused ? "paused" : index} initial={{ scaleX: 0 }} animate={{ scaleX: paused ? 0 : 1 }} transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: "linear" }} className="absolute inset-0 origin-left rounded-full bg-orange"/>)}
                </button>))}
            </div>

            <button onClick={() => go(index + 1, 1)} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-royal/10 bg-white text-royal shadow-soft transition-all hover:border-orange/30 hover:text-orange active:scale-95">
              <ChevronRight className="h-4 w-4"/>
            </button>
          </div>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-3xl">
          <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-ink/35">
            Trusted by teams at Takshvi Foods · EBN Infra · Hire Hive · Nidhi Avenue
          </p>
        </Reveal>
      </div>
    </section>);
}
