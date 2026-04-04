const ITEMS = [
  "30-45g Protein Per Meal",
  "Made for Bodybuilders",
  "Macro-Tracked for Muscle Gain",
  "Bulking & Cutting Plans",
  "Fresh Daily Preparation",
  "Indore Delivery",
  "High-Protein Indian Meals",
  "Serious Gym-Goers Only",
  "No Hidden Calories",
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
