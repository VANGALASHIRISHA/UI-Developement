import { Target, Compass, Heart, Check, Instagram, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { QText } from "./QText";
const founderSocials = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/sumanth_qwikdigitalsolutions/",
        icon: Instagram,
    },
    {
        label: "Email",
        href: "mailto:info@qwikdigitalsolutions.com",
        icon: Mail,
    },
];
const pillars = [
    {
        icon: Target,
        title: "Our mission",
        text: "Give companies of any size access to the same product quality and speed usually reserved for venture-funded startups.",
    },
    {
        icon: Compass,
        title: "How we work",
        text: "Small senior pods instead of large account layers — the people who plan the work are the people who ship it.",
    },
    {
        icon: Heart,
        title: "What we value",
        text: "Directness over polish, visible progress over status updates, and outcomes over hours logged.",
    },
];
const checklist = [
    "Senior team on every project",
    "Fixed-scope, transparent pricing",
    "Weekly demos, no black boxes",
    "Post-launch support included",
];
export default function About() {
    return (<section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative mx-auto max-w-lg text-center">
            <div className="mx-auto w-full max-w-[520px] rounded-xl2 bg-gradient-to-br from-orange via-white to-royal p-[3px] shadow-softLg">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[17px] bg-white">
                <img src="/images/team/founder-ceo-sumanth.jpg" alt="K. Sumanth — Founder & CEO, Qwik Digital Solutions" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "center 12%" }} />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-ink">K. Sumanth</h3>
              <p className="mt-1 text-sm font-semibold text-orange">
                Founder & CEO
              </p>
              <p className="text-sm text-ink/55">Qwik Digital Solutions</p>
            </div>

            <div className="mt-5 flex justify-center gap-4">
              {founderSocials.map((social) => (<a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined} aria-label={social.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-royal/10 bg-white text-royal shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-orange hover:to-royal hover:text-white hover:shadow-softLg">
                  <social.icon className="h-5 w-5" strokeWidth={2}/>
                </a>))}
            </div>
          </div>

          <div>
            <SectionHeading align="left" eyebrow="What we are" title="A studio built for teams" highlight="who move fast" className="lg:mx-0"/>
            <p className="mt-5 text-ink/60">
              <QText text="Qwik Digital Solutions is a full-stack digital studio — strategists, designers and engineers working from one roadmap instead of three disconnected ones."/>{" "}
              We&apos;ve shipped e-commerce platforms, real estate
              marketplaces, SaaS products and growth systems for teams who
              needed it done right the first time.
            </p>

            <div className="mt-9 space-y-6">
              {pillars.map((pillar) => (<div key={pillar.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal/8 text-royal">
                    <pillar.icon className="h-5 w-5" strokeWidth={2}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-ink">{pillar.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink/55">
                      <QText text={pillar.text}/>
                    </p>
                  </div>
                </div>))}
            </div>

            <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-royal/8 pt-8 sm:grid-cols-2">
              {checklist.map((item) => (<div key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <Check className="h-3 w-3" strokeWidth={3}/>
                  </span>
                  <span className="text-sm text-ink/70">{item}</span>
                </div>))}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
