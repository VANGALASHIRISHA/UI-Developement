import Reveal from "./Reveal";
import { cn } from "@/lib/utils";
import { QText } from "./QText";
export default function SectionHeading({ eyebrow, title, highlight, description, align = "center", className, titleVariant = "default", }) {
    return (<div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (<Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-royal/15 bg-royal/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-royal">
            <span className="h-1.5 w-1.5 rounded-full bg-orange"/>
            <QText text={eyebrow}/>
          </span>
        </Reveal>)}
      <Reveal delay={0.08}>
        <h2 className={cn("mt-5 text-3xl tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]", titleVariant === "premium-orange"
            ? "font-extrabold text-gradient"
            : "font-bold text-ink")}>
          <QText text={title}/>{" "}
          {highlight &&
            (titleVariant === "premium-orange" ? (<QText text={highlight}/>) : (<span className="text-gradient">
                <QText text={highlight}/>
              </span>))}
        </h2>
      </Reveal>
      {description && (<Reveal delay={0.16}>
          <p className="mt-4 text-base text-ink/60 sm:text-lg">
            <QText text={description}/>
          </p>
        </Reveal>)}
    </div>);
}
