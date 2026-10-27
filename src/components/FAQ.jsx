import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { faqs } from "@/lib/data";
export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    return (<section id="faq" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading eyebrow="Questions" title="Answers before you" highlight="ask twice"/>

        <div className="mx-auto mt-14 max-w-2xl divide-y divide-royal/8 rounded-xl3 border border-royal/8 bg-white shadow-soft">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (<Reveal key={faq.q} delay={i * 0.04}>
                <div>
                  <button onClick={() => setOpenIndex(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={isOpen}>
                    <span className="text-base font-semibold text-ink">{faq.q}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-royal transition-transform duration-300 ${isOpen ? "rotate-45 bg-orange/10 text-orange" : ""}`}>
                      <Plus className="h-4 w-4"/>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-relaxed text-ink/60">
                          {faq.a}
                        </p>
                      </motion.div>)}
                  </AnimatePresence>
                </div>
              </Reveal>);
        })}
        </div>
      </div>
    </section>);
}
