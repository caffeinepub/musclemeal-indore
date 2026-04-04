import { ArrowRight, Clock, Tag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ARTICLES = [
  {
    id: 1,
    title:
      "The Biggest Diet Mistake Gym-Goers in Indore Make — And How to Fix It",
    excerpt:
      "90% of people hitting the gym in Indore make the same critical mistake — eating random food after a workout. Here's why it's blocking your results and the perfect fix.",
    tag: "Diet Tips",
    readTime: "4 min read",
    imgUrl:
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&h=350&fit=crop",
    content: [
      {
        heading: "What's the problem?",
        body: "Most people who go to the gym focus only on their workout. But real results — fat loss or muscle gain — come 70% from diet and only 30% from training. That's the biggest mistake people make.",
      },
      {
        heading: "Mistake #1: Skipping the Post-Workout Meal",
        body: "After a workout, there's a 30–45 minute 'anabolic window' where your muscles are primed to absorb protein for repair and growth. If you skip this window or eat something random, you've wasted your entire workout.",
      },
      {
        heading: "Mistake #2: Ignoring Your Protein Count",
        body: "An average gym-goer needs 1.6–2.2g of protein per kg of body weight per day. A 70kg person needs 112–154g of protein daily. Standard home food typically provides only 40–50g — far short.",
      },
      {
        heading: "The Solution: MuscleMeal",
        body: "Every MuscleMeal is pre-calculated, freshly prepared, and goal-specific. Whether you're aiming for fat loss or muscle gain — each portion delivers exactly what your body needs.",
      },
    ],
  },
  {
    id: 2,
    title:
      "How Much Protein Do You Need for Fat Loss? Meeting Your Daily Target on an Indian Diet",
    excerpt:
      "Fat loss without protein is impossible. Learn how much protein Indian meals actually contain and how to hit your daily target without expensive supplements.",
    tag: "Nutrition",
    readTime: "5 min read",
    imgUrl:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=350&fit=crop",
    content: [
      {
        heading: "Why Is Protein Essential for Fat Loss?",
        body: "When you cut calories, your body loses both fat and muscle. High protein intake protects your muscle mass so that only fat is lost. Protein is also thermogenic — your body burns more calories just digesting it.",
      },
      {
        heading: "How Much Protein Do You Need?",
        body: "For fat loss: Body weight (kg) × 1.8–2.2g protein per day. Example: A 65kg woman needs 117–143g of protein daily. A 75kg man needs 135–165g of protein daily.",
      },
      {
        heading: "Protein in Common Indian Foods",
        body: "Chicken breast: 31g | Eggs (2 pcs): 12g | Paneer: 18g | Soya chunks: 52g | Greek yogurt: 10g | Cooked dal: 9g. Hitting your protein target on dal-roti alone is nearly impossible.",
      },
      {
        heading: "Why MuscleMeal Makes This Easy",
        body: "Every MuscleMeal fat loss box has precisely calculated protein — you don't need to count a thing. Macros are printed on each box. Just eat and trust the process.",
      },
    ],
  },
  {
    id: 3,
    title:
      "What Happens to Your Body When You Skip the Gym, Exercise, and Proper Diet",
    excerpt:
      "Skipping the gym and eating poorly doesn't just slow your progress — it actively damages your health. Here's what the science says.",
    tag: "Lifestyle",
    readTime: "6 min read",
    imgUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=350&fit=crop",
    content: [
      {
        heading: "❌ WITHOUT Exercise + Proper Diet",
        body: "Muscle loss begins within 2 weeks of inactivity — up to 1kg per month. Metabolic rate drops 10–15%. Insulin sensitivity worsens. Cardiovascular health declines fast. Mental health suffers — sedentary people are 44% more likely to be depressed.",
      },
      {
        heading: "✅ WITH Exercise + Proper Diet",
        body: "Regular resistance training increases muscle mass 1–2kg every 3 months. Metabolic rate increases 7–10% per kg of muscle. Risk of Type 2 Diabetes drops by 58%. Mental health dramatically improves. Sleep quality and cognitive performance improve within 4 weeks.",
      },
      {
        heading: "The Numbers Don't Lie",
        body: "People who exercise regularly and eat well live an average of 7 years longer (WHO). Regular exercisers have 35% lower risk of heart disease, 40% lower risk of certain cancers. And food accounts for 70% of your results — the gym is only 30%.",
      },
    ],
  },
];

export default function BlogSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="articles" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Knowledge Hub
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
            Articles & Tips
          </h2>
          <p className="text-gray-500 mt-3">
            Nutrition science, fitness tips, and real data for real results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              data-ocid={`articles.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={article.imgUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Tag size={9} />
                    {article.tag}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-black text-gray-900 text-base leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                <button
                  type="button"
                  data-ocid={`articles.read_more.button.${i + 1}`}
                  onClick={() =>
                    setExpanded(expanded === article.id ? null : article.id)
                  }
                  className="mt-4 flex items-center gap-1.5 text-primary text-sm font-bold hover:text-primary/80 transition-colors"
                >
                  {expanded === article.id ? (
                    <>
                      <X size={14} /> Close
                    </>
                  ) : (
                    <>
                      Read More <ArrowRight size={14} />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expanded === article.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden mt-4 border-t border-gray-100 pt-4 space-y-4"
                    >
                      {article.content.map((section) => (
                        <div key={section.heading}>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">
                            {section.heading}
                          </h4>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {section.body}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
