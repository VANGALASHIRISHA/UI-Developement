import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { QText } from "./QText";
const HERO_IMAGE = "/images/hero-illustration.jpg";
const HERO_IMAGE_WEBP = "/images/hero-illustration.webp";
export default function Hero() {
    return (<section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="container-px w-full py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 lg:grid-cols-[44%_56%] lg:gap-14 xl:gap-16">
          {/* Left column content.
            Mobile: this wrapper is `display: contents`, so it disappears
            as a box and its three children (Heading, Description, CTA)
            become independent items in the outer grid, free to be
            reordered around the image via the `order-*` utilities below.
            Desktop (lg+): the wrapper becomes a real flex column again,
            restoring the exact original left-column layout and spacing. */}
          <div className="contents lg:order-1 lg:flex lg:max-w-xl lg:flex-col lg:text-left">
            {/* 1. Hero Heading (+ trust badge) */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="order-1 mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-royal/12 bg-surface px-4 py-1.5 text-sm font-medium text-ink/70">
                <span className="flex items-center gap-0.5 text-orange">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-3.5 w-3.5 fill-orange text-orange"/>))}
                </span>
                Trusted Digital Agency
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.1rem] xl:text-[3.4rem]">
                Transform Ideas Into{" "}
                <span className="text-gradient">Powerful</span> Digital
                Experiences
              </h1>
            </motion.div>

            {/* 3. Hero Description */}
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="order-3 mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink/60 lg:mx-0">
              <QText text="Qwik Digital Solutions helps businesses grow through Digital Marketing, Web Development, Full Stack Applications, Branding, SEO, Performance Marketing, Cloud Solutions, and Custom Software Development."/>
            </motion.p>

            {/* 4. CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="order-4 mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange to-orange-600 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-colors hover:brightness-105 sm:w-auto">
                Get Started
                <ArrowUpRight className="h-4.5 w-4.5"/>
              </a>
              <a href="#projects" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-royal/15 bg-white px-7 py-3.5 text-base font-semibold text-royal transition-colors hover:bg-surface sm:w-auto">
                View Projects
              </a>
            </motion.div>
          </div>

          {/* 2. Hero Illustration/Image — sits right after the heading on
            mobile; fills the right column on desktop exactly as before. */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="order-2 relative mx-auto mt-8 flex w-full max-w-2xl items-center lg:order-2 lg:mx-0 lg:mt-0 lg:h-full lg:max-w-none">
            <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-royal/15 via-transparent to-orange/20 blur-2xl"/>
            <div className="relative w-full overflow-hidden rounded-[24px] border border-royal/10 bg-royal shadow-softLg">
              <picture>
                <source srcSet={HERO_IMAGE_WEBP} type="image/webp"/>
                <img src={HERO_IMAGE} alt="Qwik Digital Solutions workstation with code, dashboards, servers and connected devices" className="block h-auto w-full object-contain" loading="eager" width={2048} height={1152}/>
              </picture>

              {/* Capability chips over the image */}
              <div className="absolute left-5 top-5 flex flex-wrap gap-2 sm:left-6 sm:top-6">
                {["AI", "Cloud", "Analytics"].map((chip) => (<span key={chip} className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {chip}
                  </span>))}
              </div>
            </div>

            {/* Floating stat chip */}
            <div className="absolute -bottom-6 left-4 hidden max-w-[calc(100%-2rem)] rounded-2xl border border-royal/10 bg-white px-5 py-3.5 shadow-softLg sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">
                Trusted
              </p>
              <p className="mt-0.5 text-lg font-bold text-ink">Client Retention 94%</p>
            </div>

            {/* Floating tech chip */}
            <div className="absolute -top-5 right-4 hidden max-w-[calc(100%-2rem)] rounded-2xl border border-royal/10 bg-white px-5 py-3.5 shadow-softLg lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">
                Delivery
              </p>
              <p className="mt-0.5 text-lg font-bold text-ink">48+ Products Shipped</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
}
