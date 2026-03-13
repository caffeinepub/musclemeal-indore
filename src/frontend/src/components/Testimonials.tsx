import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const RESULTS = [
  {
    image: "/assets/uploads/24330fc0-1bb6-11f1-b556-0d2041fa1b6f-1.png",
    name: "Rohit Sharma",
    result: "Lost 18kg in 75 days",
    rating: 5,
    quote:
      "MuscleMeal changed my life. Fresh meals every day and results this fast — I couldn't believe it!",
  },
  {
    image: "/assets/uploads/24335de0-1bb6-11f1-b556-0d2041fa1b6f-2.png",
    name: "Priya Verma",
    result: "Lost 14kg in 60 days",
    rating: 5,
    quote:
      "I stopped cooking at home and switched to MuscleMeal — best decision ever. Healthy, tasty, and affordable!",
  },
  {
    image: "/assets/uploads/24327380-1bb6-11f1-b556-0d2041fa1b6f-3.png",
    name: "Aman Patel",
    result: "Gained 8kg muscle in 90 days",
    rating: 5,
    quote:
      "Muscle gain requires exact macros — MuscleMeal delivered exactly that. Solid gains in just 90 days!",
  },
  {
    image: null,
    name: "Deepak Joshi",
    result: "Lost 6kg in 30 days",
    rating: 5,
    quote:
      "Delivery arrives at 7:30 AM every single day — perfectly punctual. Food is fresh and delicious. Highly recommend!",
  },
  {
    image: null,
    name: "Sneha Tiwari",
    result: "Toned up in 45 days",
    rating: 5,
    quote:
      "The diet calculator helped me understand exactly how much protein I need. MuscleMeal fulfills it every day!",
  },
  {
    image: null,
    name: "Vivek Sharma",
    result: "Muscle gain + fat loss",
    rating: 5,
    quote:
      "Took the non-veg 3-meal plan — absolute value for money. Got great results and the food tastes amazing!",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          // biome-ignore lint/suspicious/noArrayIndexKey: static stars
          key={i}
          size={12}
          className={i < count ? "fill-primary text-primary" : "text-border"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(RESULTS.length - 1, c + 1));

  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Real Transformations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Before &amp; After Results
          </h2>
          <p className="text-muted-foreground mt-3">
            Real results from our clients &mdash; photos and feedback
          </p>
        </motion.div>

        {/* Horizontal carousel */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {RESULTS.map((r, i) => (
              <motion.div
                key={r.name}
                data-ocid={`testimonials.item.${i + 1}`}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-shrink-0 w-[280px] md:w-[320px] bg-card border border-border rounded-2xl overflow-hidden snap-start"
              >
                {r.image ? (
                  <div className="h-72 overflow-hidden">
                    <img
                      src={r.image}
                      alt={`${r.name} transformation`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-28 bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-primary">
                        {r.name[0]}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <StarRow count={r.rating} />
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed mb-4">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {r.name}
                      </p>
                    </div>
                    <span className="text-xs font-bold bg-primary/15 text-primary px-3 py-1 rounded-full border border-primary/25">
                      {r.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              disabled={current === 0}
              data-ocid="testimonials.pagination_prev"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 disabled:opacity-30 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {RESULTS.map((_, i) => (
                <button
                  key={i.toString()}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? "bg-primary w-5"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              disabled={current === RESULTS.length - 1}
              data-ocid="testimonials.pagination_next"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 disabled:opacity-30 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
