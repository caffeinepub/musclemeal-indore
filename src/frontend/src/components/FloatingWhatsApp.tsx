import { motion } from "motion/react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917724047283"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="floating.whatsapp.button"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-2xl green-glow"
    >
      <WhatsAppIcon className="w-7 h-7 fill-primary-foreground" />
    </motion.a>
  );
}
