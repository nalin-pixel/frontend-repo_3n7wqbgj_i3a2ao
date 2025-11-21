import Reveal from "./Reveal";
import { Dumbbell, Trophy, Baby, Users } from "lucide-react";

const items = [
  {
    icon: Baby,
    title: "Little Tigers (5-8)",
    text: "Playful fundamentals that build balance, coordination, and respect.",
  },
  {
    icon: Users,
    title: "Youth & Teens",
    text: "Technical progression, safe randori, and competition readiness.",
  },
  {
    icon: Dumbbell,
    title: "Adults & Beginners",
    text: "Get strong, move better, and learn efficient throws without ego.",
  },
  {
    icon: Trophy,
    title: "Competition Team",
    text: "High-intensity drills, strategy, and travel to sanctioned events.",
  },
];

export default function Programs() {
  return (
    <section className="py-20 md:py-28 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Programs</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">
            A clear path from first ukemi to competition podiums. Start where you are.
          </p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
                <it.icon className="h-6 w-6 text-blue-300" />
                <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
