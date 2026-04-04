import { motion } from "motion/react";

const HERO_STATS = [
  {
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    number: "80%",
    heading: "Of chronic diseases are diet-related",
    sub: "Poor diet is the #1 cause of preventable illness worldwide — WHO",
    reverse: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    number: "3×",
    heading: "Higher diabetes risk from outside food",
    sub: "Regular consumption of processed and outside food increases diabetes risk 3x — Lancet",
    reverse: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    number: "25%",
    heading: "Longer life expectancy with balanced diet",
    sub: "People who eat clean meals regularly live 8-11 years longer — Nature Medicine",
    reverse: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop",
    number: "70%",
    heading: "Of your fitness results come from what you eat",
    sub: "Exercise accounts for only 30% of body composition change — nutrition is the game-changer for every gym-goer.",
    reverse: true,
  },
];

const HEALTHY_STATS = [
  {
    value: "80%",
    label: "of chronic diseases are diet-related",
    source: "WHO",
    color: "text-red-500",
    bg: "bg-red-50 border-red-100",
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
    color: "text-red-500",
    bg: "bg-red-50 border-red-100",
  },
  {
    value: "56%",
    label: "of regular junk food eaters develop obesity",
    source: "ICMR India",
    color: "text-red-500",
    bg: "bg-red-50 border-red-100",
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
    color: "text-red-500",
    bg: "bg-red-50 border-red-100",
  },
];

const OUTSIDE_FOOD_EFFECTS = [
  {
    icon: "❤️",
    title: "Heart Disease Risk",
    desc: "Outside food is high in trans fats and sodium — major risk factors for cardiovascular disease.",
  },
  {
    icon: "⚖️",
    title: "Uncontrolled Weight Gain",
    desc: "Restaurant meals average 2x the calories of home-cooked meals with unknown macro composition.",
  },
  {
    icon: "🧠",
    title: "Mental Fog & Energy Crashes",
    desc: "Processed food causes blood sugar spikes and crashes, reducing focus and gym performance.",
  },
  {
    icon: "🦠",
    title: "Gut Health Damage",
    desc: "Preservatives and additives in outside food destroy beneficial gut bacteria over time.",
  },
];

export default function HealthStats() {
  return (
    <section id="health-stats" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Why Food Choice Changes Everything
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900">
            The Real Cost of Eating Wrong
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Real-world data on what outside food does to your body — and why
            gym-goers need precision nutrition.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-20">
          {HEALTHY_STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`border rounded-2xl p-5 ${stat.bg}`}
            >
              <div
                className={`font-display text-3xl font-black mb-1 ${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">{stat.source}</div>
            </motion.div>
          ))}
        </div>

        {/* Alternating image + text */}
        <div className="space-y-16 max-w-5xl mx-auto mb-20">
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col ${
                stat.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10`}
            >
              <div className="md:w-1/2 w-full">
                <div className="rounded-3xl overflow-hidden h-64 md:h-72 shadow-card">
                  <img
                    src={stat.image}
                    alt={stat.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="font-display text-6xl font-black text-primary mb-3">
                  {stat.number}
                </div>
                <h3 className="font-display text-2xl font-black text-gray-900 mb-3">
                  {stat.heading}
                </h3>
                <p className="text-gray-500 leading-relaxed">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outside food effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-3xl font-black text-gray-900">
            What Outside Food Does to Your Body
          </h3>
          <p className="text-gray-500 mt-2">
            Every cheat meal has a hidden cost — especially for gym-goers
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {OUTSIDE_FOOD_EFFECTS.map((effect, i) => (
            <motion.div
              key={effect.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-cream border border-orange-100 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-3">{effect.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{effect.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {effect.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
