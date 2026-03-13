import { Check, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const PRICES: Record<string, Record<string, number>> = {
  monthly_veg: { "2": 6750, "3": 8250, "4": 9750 },
  monthly_nonveg: { "2": 8750, "3": 10750, "4": 12750 },
  weekly_veg: { "2": 1950, "3": 2399, "4": 2799 },
  weekly_nonveg: { "2": 2499, "3": 3099, "4": 3699 },
};

const PLAN_CARDS = [
  {
    meals: "2",
    title: "Starter",
    calories: "~1800 kcal/day",
    protein: "~120g protein",
    sampleMeals: [
      "Breakfast + Lunch",
      "Grilled Chicken / Paneer",
      "Dal + Rice or Roti",
    ],
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    macros: { protein: 40, carbs: 40, fat: 20 },
  },
  {
    meals: "3",
    title: "Popular",
    calories: "~2200 kcal/day",
    protein: "~150g protein",
    sampleMeals: [
      "Breakfast + Lunch + Dinner",
      "Tandoori Chicken / Soya Curry",
      "Quinoa Bowl + Salad",
    ],
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
    macros: { protein: 45, carbs: 35, fat: 20 },
  },
  {
    meals: "4",
    title: "Elite",
    calories: "~2800 kcal/day",
    protein: "~180g protein",
    sampleMeals: [
      "4 Full Meals + Snack",
      "Post-workout shake meal",
      "Custom menu weekly",
    ],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    macros: { protein: 50, carbs: 30, fat: 20 },
  },
];

const FEATURES = [
  "Fresh daily preparation",
  "Home delivery included",
  "WhatsApp support 24/7",
];

export default function PricingSection() {
  const [isVeg, setIsVeg] = useState(true);
  const [isMonthly, setIsMonthly] = useState(true);

  const priceKey = `${isMonthly ? "monthly" : "weekly"}_${isVeg ? "veg" : "nonveg"}`;
  const currentPrices = PRICES[priceKey];

  const waLink = (meals: string, title: string) => {
    const planLabel = `${meals} Meals ${title} ${isVeg ? "Veg" : "Non-Veg"} ${isMonthly ? "Monthly" : "Weekly"}`;
    return `https://wa.me/917724047283?text=Hi%20MuscleMeal%2C%20I%20want%20to%20order%20${encodeURIComponent(planLabel)}%20plan!`;
  };

  return (
    <section id="plans" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Veg / Non-Veg, Weekly / Monthly &mdash; tailored to your goal
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div
            data-ocid="pricing.veg_nonveg.toggle"
            className="flex items-center bg-card border border-border rounded-full p-1"
          >
            <button
              type="button"
              onClick={() => setIsVeg(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                isVeg
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🥗 Vegetarian
            </button>
            <button
              type="button"
              onClick={() => setIsVeg(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !isVeg
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🍗 Non-Vegetarian
            </button>
          </div>

          <div
            data-ocid="pricing.weekly_monthly.toggle"
            className="flex items-center bg-card border border-border rounded-full p-1"
          >
            <button
              type="button"
              onClick={() => setIsMonthly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                isMonthly
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsMonthly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !isMonthly
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Weekly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PLAN_CARDS.map((plan, idx) => {
            const isMiddle = idx === 1;
            const price = currentPrices[plan.meals];
            return (
              <motion.div
                key={plan.meals}
                data-ocid={`pricing.plan.card.${idx + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl overflow-hidden border flex flex-col ${
                  isMiddle
                    ? "border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                    : "border-border"
                }`}
              >
                {/* Image with macro overlay */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* Macro pills */}
                  <div className="absolute bottom-3 left-3 right-3 flex gap-1.5">
                    <div className="flex-1 bg-black/60 backdrop-blur-sm rounded-lg py-1.5 text-center">
                      <div className="text-xs font-bold text-green-300">
                        {plan.macros.protein}%
                      </div>
                      <div className="text-[9px] text-white/70 uppercase tracking-wide">
                        Protein
                      </div>
                    </div>
                    <div className="flex-1 bg-black/60 backdrop-blur-sm rounded-lg py-1.5 text-center">
                      <div className="text-xs font-bold text-blue-300">
                        {plan.macros.carbs}%
                      </div>
                      <div className="text-[9px] text-white/70 uppercase tracking-wide">
                        Carbs
                      </div>
                    </div>
                    <div className="flex-1 bg-black/60 backdrop-blur-sm rounded-lg py-1.5 text-center">
                      <div className="text-xs font-bold text-orange-300">
                        {plan.macros.fat}%
                      </div>
                      <div className="text-[9px] text-white/70 uppercase tracking-wide">
                        Fat
                      </div>
                    </div>
                  </div>

                  {isMiddle && (
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                      <Zap size={10} /> Most Popular
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="bg-card p-5 flex flex-col flex-1">
                  <div className="mb-4">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {plan.meals} Meals / Day
                      </h3>
                      <span className="text-xs text-primary font-semibold border border-primary/30 px-2 py-0.5 rounded-full">
                        {plan.title}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      {plan.calories} &middot; {plan.protein}
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="font-display text-3xl font-bold text-foreground">
                      ₹{price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">
                      / {isMonthly ? "month" : "week"}
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    {plan.sampleMeals.map((meal) => (
                      <div
                        key={meal}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <Check
                          size={13}
                          className="text-primary mt-0.5 shrink-0"
                        />
                        {meal}
                      </div>
                    ))}
                    {FEATURES.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check
                          size={13}
                          className="text-muted-foreground/50 mt-0.5 shrink-0"
                        />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-2">
                    <a
                      href={waLink(plan.meals, plan.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`pricing.plan.order.button.${idx + 1}`}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-colors ${
                        isMiddle
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
