import { motion } from "motion/react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/70 bg-white/10 px-4 py-1.5 rounded-full mb-6">
            Start Your Transformation
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-5">
            Train Hard.
            <br />
            Eat Right.
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Macro-tracked meals delivered daily — built specifically for
            gym-goers in Indore.
            <br />
            Just WhatsApp us and start seeing results.
          </p>
          <motion.a
            href="https://wa.me/917724047283"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cta.primary_button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full text-base font-black shadow-lg hover:bg-white/90 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5 fill-primary" />
            WhatsApp Us &mdash; 7724047283
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
