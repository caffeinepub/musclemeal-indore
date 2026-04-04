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
    title: "Cutting Plan",
    calories: "~1800 kcal/day",
    protein: "~120g protein",
    sampleMeals: [
      "Breakfast + Lunch",
      "High-protein, low-carb meals",
      "Calorie-deficit optimized",
    ],
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    emoji: "🔥",
  },
  {
    meals: "3",
    title: "Bulking Plan",
    calories: "~2200 kcal/day",
    protein: "~150g protein",
    sampleMeals: [
      "Breakfast + Lunch + Dinner",
      "High-calorie, high-protein meals",
      "Post-workout recovery meal",
    ],
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
    emoji: "💪",
  },
  {
    meals: "4",
    title: "Elite Athlete",
    calories: "~2800 kcal/day",
    protein: "~180g protein",
    sampleMeals: [
      "4 Full Meals + Snack",
      "Pre & post-workout nutrition",
      "Custom macro plan weekly",
    ],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    emoji: "🏆",
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
    <section id="plans" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900">
            Choose Your Plan
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Designed for gym-goers — Veg / Non-Veg, weekly or monthly
          </p>
        </motion.div>

        {/* Toggles */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex rounded-full overflow-hidden border-2 border-gray-200 p-1 bg-gray-50">
            <button
              type="button"
              data-ocid="pricing.veg.toggle"
              onClick={() => setIsVeg(true)}
              className={`px-5 py-2 text-sm font-bold rounded-full transition-colors ${
                isVeg
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              🥗 Vegetarian
            </button>
            <button
              type="button"
              data-ocid="pricing.nonveg.toggle"
              onClick={() => setIsVeg(false)}
              className={`px-5 py-2 text-sm font-bold rounded-full transition-colors ${
                !isVeg
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              🍗 Non-Veg
            </button>
          </div>
          <div className="flex rounded-full overflow-hidden border-2 border-gray-200 p-1 bg-gray-50">
            <button
              type="button"
              data-ocid="pricing.monthly.toggle"
              onClick={() => setIsMonthly(true)}
              className={`px-5 py-2 text-sm font-bold rounded-full transition-colors ${
                isMonthly
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              data-ocid="pricing.weekly.toggle"
              onClick={() => setIsMonthly(false)}
              className={`px-5 py-2 text-sm font-bold rounded-full transition-colors ${
                !isMonthly
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Weekly
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLAN_CARDS.map((plan, i) => {
            const isPopular = plan.title === "Bulking Plan";
            return (
              <motion.div
                key={plan.meals}
                data-ocid={`pricing.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden flex flex-col bg-white card-hover transition-all duration-300 ${
                  isPopular
                    ? "border-2 border-primary shadow-lifted"
                    : "border border-gray-200 shadow-card"
                }`}
              >
                {isPopular && (
                  <div className="bg-primary text-white text-xs font-black uppercase tracking-widest text-center py-2 flex items-center justify-center gap-1">
                    <Zap size={12} />
                    Most Popular
                  </div>
                )}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-xl shadow-sm">
                    {plan.emoji}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="font-black text-xl text-gray-900">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {plan.meals} Meals / Day
                    </p>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-black text-gray-900">
                      ₹{currentPrices[plan.meals].toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-400 ml-1">
                      /{isMonthly ? "month" : "week"}
                    </span>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                      {plan.calories}
                    </span>
                    <span className="text-xs font-bold bg-green-50 text-green-700 px-2.5 py-1 rounded-full">
                      {plan.protein}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {[...plan.sampleMeals, ...FEATURES].map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Check size={14} className="text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(plan.meals, plan.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`pricing.order.button.${i + 1}`}
                    className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full text-sm font-black hover:bg-primary/90 transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    Order {plan.title}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
