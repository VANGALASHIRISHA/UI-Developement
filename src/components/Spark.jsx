import { motion } from "framer-motion";
/**
 * The Qwik "spark" — a redrawn abstraction of the bolt cut into our logo's Q.
 * Used sparingly as the site's one recurring signature: it self-draws on
 * first view, then sits still. This is the throughline that ties the hero,
 * section dividers and footer back to the brand mark without repeating the
 * logo itself.
 */
export default function Spark({ className, strokeWidth = 6, once = true, }) {
    return (<svg viewBox="0 0 120 200" fill="none" className={className} aria-hidden="true">
      <motion.path d="M78 6 L28 108 L58 108 L40 194 L96 88 L64 88 L78 6 Z" stroke="url(#sparkGradient)" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once, margin: "-40px" }} transition={{ duration: 1.4, ease: "easeInOut" }}/>
      <defs>
        <linearGradient id="sparkGradient" x1="0" y1="0" x2="120" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2D23A8"/>
          <stop offset="1" stopColor="#FF7A00"/>
        </linearGradient>
      </defs>
    </svg>);
}
export function SparkDivider({ className }) {
    return (<div className={cnDivider(className)} aria-hidden="true">
      <svg viewBox="0 0 1440 60" fill="none" className="w-full h-full">
        <motion.path d="M0 30 L560 30 L600 6 L630 54 L660 30 L1440 30" stroke="url(#dividerGradient)" strokeWidth="2" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 1.2, ease: "easeInOut" }}/>
        <defs>
          <linearGradient id="dividerGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2D23A8" stopOpacity="0"/>
            <stop offset="0.45" stopColor="#2D23A8"/>
            <stop offset="0.55" stopColor="#FF7A00"/>
            <stop offset="1" stopColor="#FF7A00" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>);
}
function cnDivider(className) {
    return ["w-full h-8", className].filter(Boolean).join(" ");
}
