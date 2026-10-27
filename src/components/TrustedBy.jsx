import { Building2, GraduationCap, Boxes, Cpu, Landmark, PartyPopper, Eye, Building, Mountain, } from "lucide-react";
import Reveal from "./Reveal";
import { QText } from "./QText";
const CLIENT_LOGOS = [
    { name: "Nidhi Avenue", icon: Building2, accent: "orange" },
    { name: "IIUTC Study", icon: GraduationCap, accent: "royal" },
    { name: "EBN", icon: Boxes, accent: "orange" },
    { name: "NIS IT Consultants", icon: Cpu, accent: "royal" },
    { name: "SV Real Estates", icon: Landmark, accent: "orange" },
    { name: "AKR Banquets", icon: PartyPopper, accent: "royal" },
    { name: "Your Mind Vision", icon: Eye, accent: "orange" },
    { name: "My City Infra", icon: Building, accent: "royal" },
    { name: "Pinnacle Properties", icon: Mountain, accent: "orange" },
];
function LogoCard({ logo }) {
    const Icon = logo.icon;
    const isOrange = logo.accent === "orange";
    return (<div className={`
        group flex h-[60px] shrink-0 cursor-pointer items-center gap-3
        whitespace-nowrap rounded-xl border border-royal/10 bg-white
        px-5 shadow-[0_2px_10px_-2px_rgba(45,35,168,0.08)]
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:scale-[1.08] hover:border-orange/40
        hover:shadow-[0_0_0_1px_rgba(255,122,0,0.25),0_10px_30px_-6px_rgba(255,122,0,0.45)]
      `}>
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white transition-transform duration-300 group-hover:scale-110 ${isOrange
            ? "bg-gradient-to-br from-orange-400 to-orange-600"
            : "bg-gradient-to-br from-royal-400 to-royal-600"}`}>
        <Icon className="h-4 w-4" strokeWidth={2.4}/>
      </span>
      <span className="text-[14px] font-bold leading-none tracking-tight text-royal">
        {logo.name}
      </span>
    </div>);
}
export default function TrustedBy() {
    const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
    return (<section id="clients" className="border-y border-royal/5 bg-white py-14 sm:py-16">
      <div className="container-px">
        <Reveal>
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-royal sm:text-3xl">
            <QText text="Our Trusted Clients"/>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm font-medium text-ink/50">
            Trusted by growing brands and businesses across industries
          </p>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden">
        {/* soft gradient fade on both edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28"/>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28"/>

        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] sm:gap-5">
          {loop.map((logo, i) => (<LogoCard key={`${logo.name}-${i}`} logo={logo}/>))}
        </div>
      </div>
    </section>);
}
