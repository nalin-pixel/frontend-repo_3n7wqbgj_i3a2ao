import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-20 md:py-28" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 p-10 text-center backdrop-blur">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Step on the Tatami?</h2>
            <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
              Book a free intro session. We’ll lend you a gi, show you safe ukemi, and get you moving with fundamental throws like O-goshi and De-ashi-barai.
            </p>
            <a href="mailto:join@fukuri-judokool.com" className="inline-flex mt-6 items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-100 transition">
              Email join@fukuri-judokool.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
