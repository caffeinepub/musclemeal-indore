import { CheckCircle, Clock } from "lucide-react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const ACTIVE_AREAS = [
  "Vijay Nagar",
  "Palasia",
  "Scheme 54",
  "AB Road",
  "New Palasia",
  "Sapna Sangeeta",
  "LIG",
  "MIG",
  "Bhawarkuan",
  "Rajendra Nagar",
];

const COMING_SOON = ["Indore Bypass", "Rau", "Pithampur", "Dewas Road"];

export default function DeliveryAreas() {
  return (
    <section id="delivery" className="py-24 bg-card/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Indore Only
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Delivery Areas
          </h2>
          <p className="text-muted-foreground mt-3">
            Currently delivering to these areas across Indore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle size={18} className="text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">
                Active Delivery Zones
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {ACTIVE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground/80">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Clock size={18} className="text-muted-foreground" />
              <h3 className="font-display text-lg font-bold text-muted-foreground">
                Coming Soon
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {COMING_SOON.map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                  <span className="text-muted-foreground">{area}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-primary/5 border border-primary/15 rounded-xl">
              <p className="text-sm text-muted-foreground mb-3">
                Your area not listed? WhatsApp us &mdash; we&apos;re expanding
                soon!
              </p>
              <a
                href="https://wa.me/917724047283?text=Hi%20MuscleMeal%2C%20I%20want%20delivery%20in%20my%20area!"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="delivery.whatsapp.button"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
