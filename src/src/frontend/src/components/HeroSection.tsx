import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WA_LINK =
  "https://wa.me/917724047283?text=Hi%20MuscleMeal%2C%20I%20want%20to%20order%20a%20meal%20plan!";
const ROTATING_TEXTS = [
  "For Fat Loss",
  "For Muscle Gain",
  "For Peak Performance",
  "For Busy Lifestyles",
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setIdx((prev) => (prev + 1) % ROTATING_TEXTS.length),
      2500,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&h=900&fit=crop')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-white mb-8 border border-white/40 px-5 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
            Indore&apos;s First Fitness Meal Delivery
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1.0] tracking-tight mb-4 uppercase"
        >
          Fresh Meals
        </motion.h1>

        <div
          className="relative h-20 md:h-24 lg:h-28 mb-8 overflow-hidden"
          data-ocid="hero.rotating_text"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center font-display text-5xl md:text-6xl lg:text-7xl font-black italic text-primary"
            >
              {ROTATING_TEXTS[idx]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base md:text-lg text-white/80 mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Fresh meals, daily delivery, certified nutrition &mdash;{" "}
          <span className="text-white font-semibold">
            exclusively for Indore
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.primary_button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg text-base font-bold shadow-lg hover:bg-primary/90 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            Order Now
          </motion.a>
          <a
            href="#plans"
            data-ocid="hero.secondary_button"
            className="inline-flex items-center gap-2 text-white text-sm font-bold border-2 border-white px-6 py-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            View Plans
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <title>arrow</title>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <title>Scroll down</title>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
