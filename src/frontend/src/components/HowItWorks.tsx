import { ChefHat, Home, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

const STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Share Your Goal on WhatsApp",
    description:
      "Step 1 — Message us on WhatsApp with your goal. Choose your plan, meal count, and dietary preferences.",
  },
  {
    icon: ChefHat,
    step: "02",
    title: "Your Plan Gets Prepared",
    description:
      "Step 2 — We create your personalized meal plan — every meal calibrated to match your specific goal.",
  },
  {
    icon: Home,
    step: "03",
    title: "Fresh Meals Every Morning",
    description:
      "Step 3 — Fresh meals delivered to your door every morning at 7–8 AM. Daily. Without fail.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            3 Simple Steps
          </h2>
          <p className="text-muted-foreground mt-3">
            From order to your doorstep &mdash; in just 3 simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-border" />

          {STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-card border-2 border-border flex items-center justify-center">
                  <step.icon size={28} className="text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
