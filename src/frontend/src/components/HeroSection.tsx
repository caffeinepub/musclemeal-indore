import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WA_LINK =
  "https://wa.me/917724047283?text=Hi%20MuscleMeal%2C%20I%20want%20to%20order%20a%20meal%20plan!";
const ROTATING_TEXTS = [
  "For Muscle Building",
  "For Fat Loss Goals",
  "For Gym Athletes",
  "For Peak Performance",
];
const SOCIAL_PROOF = ["💪", "🏋️", "🔥"];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setIdx((prev) => (prev + 1) % ROTATING_TEXTS.length),
      2800,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-cream pt-16"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16 md:py-20">
        {/* LEFT: text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            Designed for Gym-Goers &amp; Athletes
          </motion.span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-2">
            Fresh Meals
          </h1>

          {/* Rotating text */}
          <div
            className="relative mb-6"
            style={{ minHeight: "5.5rem" }}
            data-ocid="hero.rotating_text"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight"
              >
                {ROTATING_TEXTS[idx]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Macro-tracked, high-protein meals delivered every morning — built
            for gym-goers who want{" "}
            <span className="text-gray-900 font-semibold">real results</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.primary_button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-primary text-white px-8 py-4 rounded-full text-base font-bold shadow-md hover:bg-primary/90 transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              Order Now
            </motion.a>
            <a
              href="#plans"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center justify-center gap-2 text-gray-800 text-base font-bold border-2 border-gray-800 px-8 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
            >
              See Plans
            </a>
          </div>

          {/* Social proof strip */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {SOCIAL_PROOF.map((emoji) => (
                <div
                  key={emoji}
                  className="w-9 h-9 rounded-full bg-white border-2 border-cream flex items-center justify-center text-sm shadow-xs"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-bold text-gray-900">500+</span> gym-goers in
              Indore trust MuscleMeal
            </p>
          </div>
        </motion.div>

        {/* RIGHT: bright food image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 md:order-2 relative"
        >
          <div className="rounded-3xl overflow-hidden h-72 md:h-[520px] shadow-lifted">
            <img
              src="/assets/generated/hero-bg.dim_1400x800.jpg"
              alt="Fresh high-protein meal bowls for gym-goers"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating macro badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lifted px-4 py-3 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
              💪
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Per Meal</div>
              <div className="text-sm font-black text-gray-900">
                30g+ Protein
              </div>
            </div>
          </motion.div>
          {/* Fresh badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="absolute -top-4 -right-4 bg-primary text-white rounded-2xl shadow-md px-4 py-2 text-center"
          >
            <div className="text-xs font-bold uppercase tracking-wide">
              Daily
            </div>
            <div className="text-sm font-black">Fresh Prep</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
