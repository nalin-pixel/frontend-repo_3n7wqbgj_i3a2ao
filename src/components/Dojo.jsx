import Reveal from "./Reveal";

export default function Dojo() {
  return (
    <section className="py-20 md:py-28" id="dojo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1590779977035-7391b0f7d7fc?q=80&w=1600&auto=format&fit=crop"
                alt="Dojo"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Dojo</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-slate-300">
                Clean tatami, safe falls, and respectful culture. We teach kuzushi (off-balancing), tsukuri (positioning), and kake (execution) in a way that’s fun and effective for everyone.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-6 space-y-2 text-slate-200">
                <li>• Regulation tatami mats</li>
                <li>• Beginner-friendly ukemi progressions</li>
                <li>• Gi rentals available</li>
                <li>• Inclusive team culture</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
