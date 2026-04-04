import { motion } from "motion/react";

const GOALS = [
  {
    icon: "🍽️",
    title: "What Is MuscleMeal?",
    desc: "Every morning we prepare fresh, calorie-counted, protein-rich meals and deliver them straight to your door — tailored to your specific fitness goal.",
    image: "/assets/generated/whats-musclemeal.dim_800x500.jpg",
    tag: "Indore's #1 Fitness Meal Service",
  },
  {
    icon: "🔥",
    title: "For Weight Loss",
    desc: "Calorie deficit meals with the right macros — filling, delicious, and scientifically portioned to help you shed fat without starving.",
    image: "/assets/generated/fat-loss-meal.dim_800x500.jpg",
    tag: "Fat Loss Plan",
  },
  {
    icon: "💪",
    title: "For Mass Gain",
    desc: "High-protein meals with 30g+ protein in every single meal — designed to fuel muscle growth and speed up recovery after intense workouts.",
    image: "/assets/generated/muscle-gain-meal.dim_800x500.jpg",
    tag: "Muscle Building Plan",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-hf-light">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            The Solution
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tight">
            Built For Your Goal
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Whether you want to lose fat or build muscle — MuscleMeal has a plan
            for you.
          </p>
        </motion.div>

        <div className="space-y-10">
          {GOALS.map((goal, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 bg-white border border-gray-200 rounded-xl overflow-hidden`}
              >
                <div className="md:w-1/2 w-full h-56 md:h-72 overflow-hidden shrink-0">
                  <img
                    src={goal.image}
                    alt={goal.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 w-full p-8">
                  <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-lg mb-4">
                    {goal.tag}
                  </span>
                  <h3 className="font-display text-2xl font-black text-gray-900 mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{goal.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
