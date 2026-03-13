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
        body: "After a workout, there's a 30–45 minute 'anabolic window' where your muscles are primed to absorb protein for repair and growth. If you skip this window or eat something random (like samosa, tea, or biscuits), you've wasted your entire workout.",
      },
      {
        heading: "Mistake #2: Ignoring Your Protein Count",
        body: "An average gym-goer needs 1.6–2.2g of protein per kg of body weight per day. A 70kg person needs 112–154g of protein daily. Standard home food (dal, roti, sabzi) typically provides only 40–50g — far short of what's needed.",
      },
      {
        heading: "Mistake #3: Assuming Home Food Is Enough",
        body: "Home-cooked food can be healthy, but it's rarely calorie-counted or macro-balanced. Until you know exactly how much protein, carbs, and fat are in every meal, your body composition will not change significantly.",
      },
      {
        heading: "The Solution: MuscleMeal",
        body: "Every MuscleMeal is pre-calculated, freshly prepared, and goal-specific. Whether you're aiming for fat loss or muscle gain — each portion delivers exactly what your body needs. No guesswork, no waste.",
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
        heading: "Protein in Common Indian Foods (per 100g)",
        body: "Chicken breast: 31g | Eggs (2 pcs): 12g | Paneer: 18g | Soya chunks: 52g | Greek yogurt: 10g | Cooked dal: 9g | Cooked rajma: 8g. Hitting your protein target on dal-roti alone is nearly impossible.",
      },
      {
        heading: "Practical Tips",
        body: "1. Include one high-protein food in every meal. 2. Snack on roasted chana or paneer. 3. Have dahi or chaas daily. 4. If you eat non-veg, egg whites and chicken are the most affordable protein sources. 5. If vegetarian, soya chunks are the most cost-effective protein source available.",
      },
      {
        heading: "Why MuscleMeal Makes This Easy",
        body: "Every MuscleMeal fat loss box has precisely calculated protein — you don't need to count a thing. Macros are clearly printed on every meal box.",
      },
    ],
  },
  {
    id: 3,
    title: "Muscle Gain Isn't Just About Protein — These 5 Factors Matter Too",
    excerpt:
      "Eating chicken alone isn't enough. There are 5 key factors for muscle gain that most beginners miss entirely. Understand all of them and double your results.",
    tag: "Muscle Building",
    readTime: "6 min read",
    imgUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=350&fit=crop",
    content: [
      {
        heading: "1. Calorie Surplus",
        body: "Your body needs extra energy to build muscle. If you're eating at maintenance calories, muscle gain will be extremely slow. Aim for 250–500 extra calories per day — but from healthy sources like oats, rice, sweet potato, and nuts.",
      },
      {
        heading: "2. Carbohydrates (Your Energy Source)",
        body: "Carbs are the fuel for your muscles. Complex carbs before and after your workout are essential. Brown rice, oats, sweet potato, banana — these give your muscles the energy they need so that protein goes toward muscle repair, not energy production.",
      },
      {
        heading: "3. Sleep (Recovery Time)",
        body: "Muscle isn't built in the gym — it's built during sleep. During 7–9 hours of quality sleep, your body releases Growth Hormone which repairs and builds muscle tissue. Less sleep means your protein intake goes to waste.",
      },
      {
        heading: "4. Progressive Overload",
        body: "Add a little more weight or reps each week in your workouts. If you keep doing the same exercise with the same weight, your body adapts and growth stops. You need to continuously challenge your muscles.",
      },
      {
        heading: "5. Consistency (The Most Important Factor)",
        body: "Eating well for one week and skipping the next simply doesn't work. Muscle gain is a slow process that requires 3–6 months of consistent effort. That's why MuscleMeal delivers fresh meals every day — so consistency becomes effortless.",
      },
    ],
  },
];

type Article = (typeof ARTICLES)[number];

function ArticleModal({
  article,
  onClose,
}: { article: Article; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-black/40 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden mb-8"
        onClick={(e) => e.stopPropagation()}
        data-ocid="blog.modal"
      >
        <div className="h-52 overflow-hidden relative">
          <img
            src={article.imgUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            data-ocid="blog.modal.close_button"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow transition-colors"
            aria-label="Close article"
          >
            <X size={18} className="text-foreground" />
          </button>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              <Tag size={10} />
              {article.tag}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={10} />
              {article.readTime}
            </span>
          </div>
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug mb-6">
            {article.title}
          </h2>
          <div className="space-y-5">
            {article.content.map((section) => (
              <div key={section.heading}>
                <h3 className="font-semibold text-foreground mb-2">
                  {section.heading}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BlogSection() {
  const [openArticle, setOpenArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Fitness Knowledge
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Articles &amp; Guides
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              data-ocid={`blog.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col card-glow transition-all duration-300 shadow-sm"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={article.imgUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    {article.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-foreground leading-snug mb-3 flex-1">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {article.excerpt}
                </p>
                <button
                  type="button"
                  onClick={() => setOpenArticle(article)}
                  data-ocid={`blog.article.button.${i + 1}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all w-fit"
                >
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openArticle && (
          <ArticleModal
            article={openArticle}
            onClose={() => setOpenArticle(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
