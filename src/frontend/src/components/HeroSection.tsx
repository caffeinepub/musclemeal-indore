import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WA_LINK =
  "https://wa.me/917724047283?text=Hi%20MuscleMeal%2C%20I%20want%20a%20Free%20Trial!";

const ROTATING_TEXTS = [
  "For Fat Loss",
  "For Muscle Gain",
  "For Peak Performance",
  "For Busy Lifestyles",
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.10 0.01 260) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-8 border border-primary/30 px-5 py-2 rounded-full bg-primary/5">
            Indore&apos;s First Fitness Meal Delivery
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[1.0] tracking-tight mb-4"
        >
          Fresh Meals
        </motion.h1>

        {/* Rotating subtitle */}
        <div
          className="relative h-16 md:h-20 lg:h-24 mb-8 overflow-hidden"
          data-ocid="hero.rotating_text"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center font-display text-5xl md:text-6xl lg:text-7xl font-bold italic text-primary"
            >
              {ROTATING_TEXTS[idx]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Fresh meals, daily delivery, certified nutrition &mdash;{" "}
          <span className="text-foreground font-medium">
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
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            Start Free Trial
          </motion.a>
          <a
            href="#plans"
            data-ocid="hero.secondary_button"
            className="inline-flex items-center gap-2 text-foreground/70 text-sm font-medium hover:text-foreground transition-colors border border-border px-6 py-4 rounded-full hover:border-foreground/40"
          >
            View Plans
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <title>arrow</title>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 text-xs text-muted-foreground"
        >
          First 7 days completely free &mdash; no advance payment required
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
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
