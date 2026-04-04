import { motion } from "motion/react";

const GOALS = [
  {
    icon: "🍽️",
    title: "What Is MuscleMeal?",
    desc: "Every morning we prepare fresh, calorie-counted, high-protein meals and deliver them straight to your door — engineered for gym-goers and bodybuilders who want real muscle gain.",
    image: "/assets/generated/gym-meal-prep-indian.dim_800x500.jpg",
    tag: "Indore's #1 Gym Nutrition Service",
  },
  {
    icon: "🏋️",
    title: "For Mass Gain & Bulking",
    desc: "High-calorie, high-protein meals with 30–45g protein per serving — designed to fuel serious muscle growth, maximize recovery after heavy lifts, and support consistent strength gains.",
    image: "/assets/generated/muscle-gain-high-protein.dim_800x500.jpg",
    tag: "Bulking Plan",
  },
  {
    icon: "💪",
    title: "For Bodybuilders & Athletes",
    desc: "Precision macro-tracked meals for competitive bodybuilders and dedicated athletes — the right protein, carbs, and calories at the right time to build the physique you're training for.",
    image: "/assets/generated/bodybuilder-eating-meal.dim_800x500.jpg",
    tag: "Elite Athlete Plan",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            The Solution
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900">
            Built for Serious Gym-Goers
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Whether you're bulking hard or building lean muscle — MuscleMeal
            delivers the exact protein and macros your body needs.
          </p>
        </motion.div>

        <div className="space-y-8">
          {GOALS.map((goal, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-0 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-card`}
              >
                <div className="md:w-1/2 w-full h-60 md:h-72 overflow-hidden shrink-0">
                  <img
                    src={goal.image}
                    alt={goal.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 w-full p-8 md:p-10">
                  <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                    {goal.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-gray-900 mb-3">
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
