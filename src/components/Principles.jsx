import Reveal from "./Reveal";

const principles = [
  {
    jp: "Seiryoku-Zenyo",
    en: "Maximum Efficiency",
    desc: "Move with leverage, not brute force. Kuzushi → Tsukuri → Kake.",
  },
  {
    jp: "Jita-Kyoei",
    en: "Mutual Welfare & Benefit",
    desc: "We rise together. Respect, humility, and teamwork on and off the tatami.",
  },
  {
    jp: "Ukemi",
    en: "Breakfalls",
    desc: "Learn to fall safely so you can train for life and throw with confidence.",
  },
  {
    jp: "Randori",
    en: "Free Practice",
    desc: "Playful resistance that polishes timing, grip-fighting, and entries.",
  },
];

export default function Principles() {
  return (
    <section className="py-20 md:py-28" id="principles">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Judo Principles</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">Rooted in Jigoro Kano’s philosophy — powerful in modern life.</p>
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <Reveal key={p.jp} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-wider text-blue-300">{p.jp}</p>
                <h3 className="mt-1 text-white font-semibold">{p.en}</h3>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
