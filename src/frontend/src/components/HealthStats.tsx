import { motion } from "motion/react";

const HEALTHY_STATS = [
  {
    value: "80%",
    label: "of chronic diseases are diet-related",
    source: "WHO",
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
  },
  {
    value: "30%",
    label: "lower risk of heart disease with a clean diet",
    source: "Harvard Health",
    color: "text-green-600",
    bg: "bg-green-50 border-green-200",
  },
  {
    value: "11 yrs",
    label: "shorter lifespan linked to poor diet habits",
    source: "BMJ Study",
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
  },
  {
    value: "56%",
    label: "of regular junk food eaters develop obesity",
    source: "ICMR India",
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
  },
  {
    value: "25%",
    label: "longer life expectancy with a balanced diet",
    source: "Nature Medicine",
    color: "text-green-600",
    bg: "bg-green-50 border-green-200",
  },
  {
    value: "3×",
    label: "higher diabetes risk from outside / processed food",
    source: "Lancet",
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
  },
];

const JUNK_FOOD_FACTS = [
  {
    icon: "🫀",
    title: "Heart Disease",
    stat: "43%",
    desc: "of deaths in India are linked to cardiovascular disease caused by unhealthy diet and trans fats found in street food and fried snacks.",
  },
  {
    icon: "🧠",
    title: "Mental Health Impact",
    stat: "2× Risk",
    desc: "People who eat junk food 4+ times a week are 2x more likely to suffer from depression and anxiety compared to those eating whole, nutritious meals.",
  },
  {
    icon: "⚖️",
    title: "Rapid Weight Gain",
    stat: "500+ kcal",
    desc: "A single outside meal (biryani, burger, or thali) can contain 800–1,200 calories with hidden oil and sodium — easily 500+ calories more than a balanced fitness meal.",
  },
  {
    icon: "🦷",
    title: "Gut & Digestive Issues",
    stat: "67%",
    desc: "67% of regular outside food consumers report acidity, bloating, and poor digestion within 6 months — due to lack of fiber and excess preservatives.",
  },
];

export default function HealthStats() {
  return (
    <section id="health-stats" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            The Real Numbers
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Why Your Food Choice{" "}
            <em className="text-primary">Changes Everything</em>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            These are not opinions — these are hard facts backed by global
            health research. What you eat every day directly determines how long
            you live and how well you live.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {HEALTHY_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`border rounded-xl p-5 text-center ${stat.bg}`}
            >
              <div
                className={`font-display text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}
              >
                {stat.value}
              </div>
              <p className="text-foreground/80 text-sm font-medium leading-snug mb-1">
                {stat.label}
              </p>
              <span className="text-xs text-muted-foreground italic">
                — {stat.source}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Junk Food Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-red-500 mb-3">
            The Hidden Danger
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What Outside Food Does to Your Body
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {JUNK_FOOD_FACTS.map((fact, i) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 bg-card border border-border rounded-2xl p-6"
            >
              <div className="text-3xl shrink-0 mt-1">{fact.icon}</div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-display text-lg font-bold text-foreground">
                    {fact.title}
                  </h4>
                  <span className="text-sm font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                    {fact.stat}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {fact.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center bg-primary/5 border border-primary/20 rounded-2xl px-8 py-8"
        >
          <p className="text-foreground font-bold text-xl md:text-2xl leading-relaxed">
            People who eat clean, balanced meals regularly are{" "}
            <span className="text-primary">38% less likely to develop</span>{" "}
            lifestyle diseases — and live an average of{" "}
            <span className="text-primary">8–11 years longer</span> than those
            who rely on outside food.
          </p>
          <p className="text-muted-foreground text-sm mt-3">
            Source: Global Burden of Disease Study / Lancet 2023
          </p>
        </motion.div>
      </div>
    </section>
  );
}
