import { motion } from "motion/react";

const PROBLEMS = [
  "You train heavy but your protein intake is nowhere near enough for muscle growth",
  "Outside food has random macros — impossible to hit your daily protein target",
  "You don't have time to cook 4-5 high-protein meals per day after gym",
  "You're not in a proper caloric surplus for bulking — or deficit for lean muscle",
  "You're putting in the reps every day but the muscle just isn't growing fast enough",
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-cream">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Sound Familiar?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Every Bodybuilder
            <br />
            Knows This Struggle
          </h2>
        </motion.div>

        <div className="space-y-3 mb-8">
          {PROBLEMS.map((problem, i) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-xs"
            >
              <span className="text-xl shrink-0">❌</span>
              <span className="text-gray-700 font-medium">{problem}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-4 bg-primary rounded-2xl px-6 py-5"
        >
          <span className="text-2xl shrink-0">✅</span>
          <span className="font-black text-lg text-white">
            MuscleMeal delivers the exact protein and macros to build muscle —
            every single day
          </span>
        </motion.div>
      </div>
    </section>
  );
}
