import { motion } from "motion/react";

const PROBLEMS = [
  "You train hard at the gym but your diet isn't on track",
  "Outside food kills your progress with hidden calories and bad macros",
  "You don't have time to meal prep after a long workout",
  "You're not hitting your daily protein and macro targets",
  "You're putting in the reps but not seeing the results you deserve",
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
            Every Gym-Goer
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
            MuscleMeal solves all of this — meal by meal
          </span>
        </motion.div>
      </div>
    </section>
  );
}
