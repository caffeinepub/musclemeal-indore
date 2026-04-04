const ITEMS = [
  "30g+ Protein Per Meal",
  "Fresh Daily Preparation",
  "Macro-Tracked",
  "Built for Gym-Goers",
  "Indore Delivery",
  "No Hidden Calories",
  "High-Protein Indian Meals",
  "100% Fresh Ingredients",
  "Cutting & Bulking Plans",
  "WhatsApp Support 24/7",
];

const DOUBLED = [...ITEMS, ...ITEMS];

export default function TrustBar() {
  return (
    <section className="bg-primary py-3.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {DOUBLED.map((item, i) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: marquee requires index for duplicate items
            key={i}
            className="inline-flex items-center gap-2 text-white font-bold text-sm mx-6 shrink-0"
          >
            <span className="text-white/60">★</span> {item}
          </span>
        ))}
      </div>
    </section>
  );
}
