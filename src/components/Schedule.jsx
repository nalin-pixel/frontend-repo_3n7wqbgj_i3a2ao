import Reveal from "./Reveal";

const schedule = [
  { day: "Mon", time: "5:00 – 6:00 PM", class: "Little Tigers (5-8)" },
  { day: "Mon", time: "6:15 – 7:30 PM", class: "Youth Beginners" },
  { day: "Tue", time: "6:00 – 7:30 PM", class: "Adults All Levels" },
  { day: "Wed", time: "5:30 – 7:00 PM", class: "Youth Intermediate" },
  { day: "Thu", time: "6:00 – 7:30 PM", class: "Adults Randori" },
  { day: "Sat", time: "10:00 – 11:30 AM", class: "Open Mat / Competition Team" },
];

export default function Schedule() {
  return (
    <section className="py-20 md:py-28 bg-slate-950/40" id="schedule">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Weekly Schedule</h2>
          <p className="mt-2 text-slate-300">Drop in any time — first class is on us.</p>
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.map((s, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm uppercase tracking-wide text-blue-300">{s.day}</span>
                  <span className="font-semibold">{s.time}</span>
                </div>
                <p className="mt-2 text-slate-300">{s.class}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
