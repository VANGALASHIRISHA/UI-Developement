import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock, LayoutGrid, Play, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import PortfolioAccessPopup from "./PortfolioAccessPopup";
import { projects, projectFilters } from "@/lib/data";
import { cn } from "@/lib/utils";
export default function Portfolio() {
    const [active, setActive] = useState(projectFilters[0]);
    const [activeVideo, setActiveVideo] = useState(null);
    const [showAccessPopup, setShowAccessPopup] = useState(false);
    const filtered = projects.filter((p) => p.filter === active);
    // Close the video lightbox on Escape
    useEffect(() => {
        if (!activeVideo)
            return;
        const onKey = (e) => {
            if (e.key === "Escape")
                setActiveVideo(null);
        };
        document.addEventListener("keydown", onKey);
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.documentElement.style.overflow = "";
        };
    }, [activeVideo]);
    return (<section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-royal/5 blur-3xl"/>
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 rounded-full bg-orange/5 blur-3xl"/>

      <div className="container-px relative">
        <SectionHeading eyebrow="Recent work" title="Products we've taken" highlight="from brief to launch" description="A sample of platforms, storefronts and systems shipped for clients across industries."/>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {projectFilters.map((filter) => (<button key={filter} onClick={() => setActive(filter)} className={cn("relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300", active === filter
                ? "text-white"
                : "text-ink/60 hover:text-royal")}>
              {active === filter && (<motion.span layoutId="portfolio-filter-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-royal to-royal-400 shadow-soft" transition={{ type: "spring", stiffness: 350, damping: 30 }}/>)}
              {active !== filter && (<span className="absolute inset-0 rounded-full border border-royal/10"/>)}
              <span className="relative">{filter}</span>
            </button>))}
        </Reveal>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 && (<motion.div key="empty-state" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }} className="col-span-full flex flex-col items-center justify-center rounded-xl3 border border-dashed border-royal/15 bg-surface/50 px-6 py-16 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-royal/8 text-royal">
                  <Clock className="h-5 w-5"/>
                </span>
                <p className="mt-4 text-base font-semibold text-ink">
                  New work in this category is coming soon
                </p>
                <p className="mt-1.5 max-w-sm text-sm text-ink/55">
                  We&apos;re putting the finishing touches on it. Check back shortly, or explore our full portfolio.
                </p>
              </motion.div>)}

            {filtered.map((project, i) => {
            const isVideo = Boolean(project.video);
            return (<motion.div layout key={project.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4, delay: i * 0.05 }} whileHover={{ y: -8 }} className="group relative flex h-full flex-col overflow-hidden rounded-xl3 border border-royal/8 bg-white shadow-soft transition-all duration-300 hover:shadow-[0_24px_70px_-16px_rgba(255,122,0,0.28),0_10px_30px_-10px_rgba(45,35,168,0.2)]">
                  {/* Thumbnail */}
                  <div className={cn("relative h-52 shrink-0 overflow-hidden bg-royal", isVideo && "cursor-pointer")} onClick={() => {
                    if (isVideo)
                        setActiveVideo(project);
                }}>
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

                    {project.comingSoon && (<span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-softLg">
                        <Clock className="h-3 w-3"/>
                        Coming Soon
                      </span>)}

                    {/* Video play button — centered, always visible for podcasts */}
                    {isVideo && (<span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-royal shadow-softLg transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-6 w-6 translate-x-0.5" fill="currentColor"/>
                        </span>
                      </span>)}

                    {/* Bottom-right CTA — reveals on hover */}
                    {isVideo ? (<span className="absolute bottom-4 right-4 flex translate-y-2 items-center gap-1.5 rounded-full bg-orange px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-softLg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        Watch Episode
                        <Play className="h-3.5 w-3.5" fill="currentColor"/>
                      </span>) : project.comingSoon || !project.link ? (<span className="absolute bottom-4 right-4 flex translate-y-2 items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        Coming Soon
                        <Clock className="h-3.5 w-3.5"/>
                      </span>) : (<a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 flex translate-y-2 items-center gap-1.5 rounded-full bg-orange px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-softLg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View Project
                        <ArrowUpRight className="h-3.5 w-3.5"/>
                      </a>)}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-600">
                      {project.category}
                    </p>
                    <h3 className="mt-1.5 flex items-center gap-2 text-lg font-bold text-ink">
                      {project.title}
                      {project.comingSoon && (<span className="inline-flex items-center rounded-full bg-orange/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-600">
                          Coming Soon
                        </span>)}
                    </h3>
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
                </motion.div>);
        })}
          </AnimatePresence>
        </motion.div>

        {/* Dedicated Portfolio access — gated behind the form popup below */}
        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <button type="button" onClick={() => setShowAccessPopup(true)} className="group relative inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/5 px-7 py-3 text-sm font-semibold text-orange-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange hover:text-white hover:shadow-softLg">
            <LayoutGrid className="h-4 w-4"/>
            View Full Portfolio
            <ArrowUpRight className="h-4 w-4 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"/>
          </button>
        </Reveal>
      </div>

      <PortfolioAccessPopup isOpen={showAccessPopup} onClose={() => setShowAccessPopup(false)}/>

      {/* Video lightbox */}
      <AnimatePresence>
        {activeVideo && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 px-4 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.94, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 16 }} transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }} className="relative w-full max-w-3xl overflow-hidden rounded-xl3 bg-black shadow-softLg" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setActiveVideo(null)} aria-label="Close video" className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25">
                <X className="h-4.5 w-4.5"/>
              </button>
              <video key={activeVideo.title} src={activeVideo.video ?? undefined} poster={activeVideo.image} controls autoPlay playsInline className="max-h-[80vh] w-full bg-black"/>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-500">
                  {activeVideo.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {activeVideo.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>)}
      </AnimatePresence>
    </section>);
}
