import { motion } from "framer-motion";
import { Medal, Flame, CalendarCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + texture */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.07] bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-white/80 backdrop-blur">
            <Flame className="h-4 w-4 text-orange-400" />
            <span className="text-sm">Fukuri Judokool • Est. 2001</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-6xl/tight font-black text-white tracking-tight">
                Master the Art of Judo
                <span className="block text-blue-300">with Fukuri Judokool</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-lg md:text-xl text-slate-200/90 max-w-xl">
                Where discipline meets flow. Build confidence, agility and respect through authentic, competition-proven Judo training for all ages.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#schedule" className="inline-flex items-center justify-center rounded-xl bg-blue-500 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-400 transition">
                  <CalendarCheck className="mr-2 h-5 w-5" /> View Schedule
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-semibold hover:bg-white/20 transition border border-white/10">
                  Try a Free Class
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <ul className="mt-8 grid grid-cols-3 gap-4 text-white/80">
                <li className="flex items-center gap-2"><Medal className="h-5 w-5 text-yellow-300"/> Black-belt coaches</li>
                <li className="flex items-center gap-2"><Medal className="h-5 w-5 text-yellow-300"/> Kids to adults</li>
                <li className="flex items-center gap-2"><Medal className="h-5 w-5 text-yellow-300"/> Friendly community</li>
              </ul>
            </Reveal>
          </div>

          <div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579722826405-b31e8e65e29e?q=80&w=1600&auto=format&fit=crop"
                  alt="Judo throw"
                  className="h-full w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/15"
              >
                <p className="text-white text-sm font-medium">Ippon-worthy techniques every session</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
