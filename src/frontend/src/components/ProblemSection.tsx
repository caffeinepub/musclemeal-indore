import { motion } from "motion/react";

const PROBLEMS = [
  "You go to the gym but your diet isn't on track",
  "Outside food is unhealthy and hard to control",
  "You don't have time to cook at home",
  "You don't fully understand nutrition and macros",
  "You're putting in the work but not seeing results",
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Sound Familiar?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Do You Feel
            <br />
            <em>This Way Too?</em>
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
              className="flex items-center gap-4 bg-card border border-border rounded-xl px-6 py-4"
            >
              <span className="text-xl shrink-0">❌</span>
              <span className="text-foreground/80 font-medium">{problem}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-4 bg-primary/15 border border-primary/30 rounded-xl px-6 py-5"
        >
          <span className="text-2xl shrink-0">✅</span>
          <span className="font-bold text-lg text-foreground">
            MuscleMeal solves all of this
          </span>
        </motion.div>
      </div>
    </section>
  );
}
