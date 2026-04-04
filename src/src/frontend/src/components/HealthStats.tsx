import { motion } from "motion/react";

const HERO_STATS = [
  {
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    number: "80%",
    heading: "of chronic diseases are diet-related",
    sub: "Poor diet is the #1 cause of preventable illness worldwide — WHO",
    reverse: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    number: "3×",
    heading: "higher diabetes risk from outside food",
    sub: "Regular consumption of processed and outside food increases diabetes risk 3x — Lancet",
    reverse: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    number: "25%",
    heading: "longer life expectancy with balanced diet",
    sub: "People who eat clean meals regularly live 8-11 years longer — Nature Medicine",
    reverse: false,
  },
];

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
    color: "text-primary",
    bg: "bg-primary/5 border-primary/20",
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
    color: "text-primary",
    bg: "bg-primary/5 border-primary/20",
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
    <section id="health-stats" className="bg-white">
      {/* Section header */}
      <div className="py-16 bg-hf-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              The Real Numbers
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 uppercase tracking-tight">
              Why Your Food Choice{" "}
              <em className="text-primary not-italic">Changes Everything</em>
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              The science is clear — what you eat determines your health,
              lifespan, and fitness results. Real-world numbers from WHO,
              Harvard, ICMR, and more.
            </p>
          </motion.div>
        </div>
      </div>

      {/* HelloFresh-style alternating image + stat rows */}
      {HERO_STATS.map((row, i) => (
        <motion.div
          key={row.number}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          className={`flex flex-col md:flex-row h-auto md:h-[400px] ${
            row.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image half */}
          <div className="w-full md:w-1/2 h-60 md:h-full overflow-hidden">
            <img
              src={row.image}
              alt={row.heading}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text half */}
          <div
            className={`w-full md:w-1/2 flex items-center justify-center px-10 py-12 ${
              i % 2 === 0 ? "bg-[#F3FAF5]" : "bg-white"
            }`}
          >
            <div className="max-w-sm">
              <div className="text-7xl md:text-8xl font-black text-primary leading-none mb-3">
                {row.number}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-snug mb-4 uppercase tracking-tight">
                {row.heading}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{row.sub}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Stats grid */}
      <div className="py-16 bg-hf-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
            {HEALTHY_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`border rounded-xl p-5 ${s.bg}`}
              >
                <div
                  className={`text-3xl md:text-4xl font-black mb-2 ${s.color}`}
                >
                  {s.value}
                </div>
                <div className="text-sm text-gray-700 font-medium leading-snug mb-1">
                  {s.label}
                </div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  — {s.source}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-center font-display text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">
              What Outside Food Does to Your Body
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {JUNK_FOOD_FACTS.map((fact, i) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4"
                >
                  <div className="text-3xl shrink-0">{fact.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-gray-900">{fact.title}</h4>
                      <span className="text-sm font-black text-red-600">
                        {fact.stat}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {fact.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary rounded-xl p-7 text-center"
          >
            <p className="text-white font-bold text-lg mb-1">
              Every meal from MuscleMeal is tracked, balanced, and optimized —
              so your food works <em className="not-italic underline">for</em>{" "}
              you.
            </p>
            <p className="text-white/80 text-sm">
              No hidden calories. No unhealthy oils. No guesswork.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
