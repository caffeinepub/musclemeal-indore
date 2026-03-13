import { motion } from "motion/react";

const STATS = [
  { value: "500+", label: "Meals Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "100%", label: "Fresh Daily" },
  { value: "Indore", label: "Only" },
];

export default function TrustBar() {
  return (
    <section className="bg-primary/10 border-y border-primary/20 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
