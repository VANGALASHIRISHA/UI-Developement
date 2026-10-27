import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import Reveal, { Stagger, staggerItem } from "./Reveal";
import { team } from "@/lib/data";
import { QText } from "./QText";
export default function Team() {
    return (<section id="team" className="relative bg-surface py-24 sm:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-orange">
              <span className="h-px w-6 bg-orange/50"/>
              Our team
              <span className="h-px w-6 bg-orange/50"/>
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              <QText text="The team behind"/> <span className="text-royal">every</span>{" "}
              <span className="text-orange">launch</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-base text-ink/60 sm:text-lg">
              Small, senior pods — the people who plan the work are the same people who ship it.
            </p>
          </Reveal>
        </div>

        <Stagger stagger={0.06} className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (<motion.div key={member.name} variants={staggerItem} whileHover={{ y: -5 }} className="overflow-hidden rounded-2xl border border-royal/8 bg-white text-center shadow-soft transition-shadow hover:shadow-softLg">
              <div className="h-1 w-full bg-gradient-to-r from-royal to-orange"/>

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/5">
                {member.photo ? (<img src={member.photo} alt={member.name} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: member.photoPosition ?? "center 15%" }}/>) : (<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-royal to-orange text-3xl font-bold text-white">
                    {member.initials}
                  </div>)}
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-ink">{member.name}</h3>
                <p className="mt-0.5 text-sm font-semibold text-orange">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">
                  <QText text={member.bio}/>
                </p>

                <div className="mt-4 flex items-center justify-center gap-2 border-t border-royal/8 pt-4">
                  <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} className="flex h-9 w-9 items-center justify-center rounded-full bg-royal/5 text-royal transition-colors hover:bg-royal hover:text-white">
                    <Mail className="h-4 w-4"/>
                  </a>
                  {member.linkedin && (<a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} className="flex h-9 w-9 items-center justify-center rounded-full bg-royal/5 text-royal transition-colors hover:bg-royal hover:text-white">
                      <Linkedin className="h-4 w-4"/>
                    </a>)}
                </div>
              </div>
            </motion.div>))}
        </Stagger>
      </div>
    </section>);
}
