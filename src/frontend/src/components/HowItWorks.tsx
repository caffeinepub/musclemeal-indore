import { ChefHat, Home, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

const STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Share Your Goal on WhatsApp",
    description:
      "Tell us your training goal on WhatsApp. Choose your plan, meal count, and dietary preference — we'll handle the rest.",
  },
  {
    icon: ChefHat,
    step: "02",
    title: "Your Plan Gets Prepared",
    description:
      "We create your personalized meal plan — every meal calibrated to support your training, recovery, and body composition goal.",
  },
  {
    icon: Home,
    step: "03",
    title: "Fresh Meals Every Morning",
    description:
      "Fresh, macro-perfect meals delivered to your door every morning at 7–8 AM. Fuel up and crush your workout.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900">
            3 Simple Steps
          </h2>
          <p className="text-gray-500 mt-3">
            From order to your doorstep &mdash; in just 3 simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center bg-white rounded-3xl p-8 shadow-card border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon size={28} className="text-primary" />
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-black">
                  {idx + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-black text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
