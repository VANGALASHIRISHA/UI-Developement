import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { portfolio, portfolioFilters } from "@/lib/data";
import { cn } from "@/lib/utils";
export default function FullPortfolio() {
    const [active, setActive] = useState("All");
    const filtered = active === "All" ? portfolio : portfolio.filter((p) => p.filter === active);
    return (<section id="full-portfolio" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-royal/5 blur-3xl"/>
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 rounded-full bg-orange/5 blur-3xl"/>

      <div className="container-px relative">
        <SectionHeading eyebrow="Recent work" title="Products we've taken" highlight="from brief to launch" description="A sample of platforms, storefronts and systems shipped for clients across industries."/>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2.5">
          {portfolioFilters.map((filter) => (<button key={filter} onClick={() => setActive(filter)} className={cn("relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300", active === filter
                ? "text-white"
                : "text-ink/60 hover:text-royal")}>
              {active === filter && (<motion.span layoutId="portfolio-filter-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-royal to-royal-400 shadow-soft" transition={{ type: "spring", stiffness: 350, damping: 30 }}/>)}
              {active !== filter && (<span className="absolute inset-0 rounded-full border border-royal/10"/>)}
              <span className="relative">{filter}</span>
            </button>))}
        </Reveal>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (<motion.div layout key={project.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4, delay: i * 0.05 }} whileHover={{ y: -8 }} className="group relative flex h-full flex-col overflow-hidden rounded-xl3 border border-royal/8 bg-white shadow-soft transition-all duration-300 hover:shadow-[0_24px_70px_-16px_rgba(255,122,0,0.28),0_10px_30px_-10px_rgba(45,35,168,0.2)]">
                {/* Thumbnail */}
                <div className="relative h-52 shrink-0 overflow-hidden bg-royal">
                  <img src={project.image} alt={project.title} loading="lazy" onError={(e) => {
                const img = e.currentTarget;
                if (img.dataset.fallback)
                    return;
                img.dataset.fallback = "true";
                img.src = "/images/project-placeholder.svg";
            }} className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-out group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-royal/85 via-royal/10 to-transparent transition-opacity duration-300 group-hover:from-royal/90"/>

                  <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {project.type}
                  </span>

                  {/* View project — reveals on hover */}
                  <a href="#contact" className="absolute bottom-4 right-4 flex translate-y-2 items-center gap-1.5 rounded-full bg-orange px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-softLg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Project
                    <ArrowUpRight className="h-3.5 w-3.5"/>
                  </a>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-600">
                    {project.category}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-ink">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (<span key={tag} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-royal">
                        {tag}
                      </span>))}
                  </div>
                </div>

                {/* Glow ring on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-xl3 opacity-0 ring-1 ring-orange/40 transition-opacity duration-300 group-hover:opacity-100"/>
              </motion.div>))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>);
}
