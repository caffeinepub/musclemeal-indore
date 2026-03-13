import { motion } from "motion/react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-28 relative overflow-hidden">
      {/* BG image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1400&h=600&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            Start Today
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-5">
            Begin Today &mdash;
            <br />
            <em className="text-primary">First 7 Days Free</em>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            No advance payment, no commitment &mdash;
            <br />
            just WhatsApp us and watch the results happen
          </p>
          <motion.a
            href="https://wa.me/917724047283"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cta.primary_button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            WhatsApp Us &mdash; 7724047283
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
