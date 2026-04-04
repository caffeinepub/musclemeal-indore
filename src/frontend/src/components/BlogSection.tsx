import { ArrowRight, Clock, Tag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ARTICLES = [
  {
    id: 1,
    title:
      "How Much Protein Do You Really Need to Build Muscle? The Complete Guide for Gym-Goers",
    excerpt:
      "Most gym-goers are eating half the protein they actually need. Here's the exact science on protein requirements for muscle hypertrophy and how MuscleMeal hits your target every day.",
    tag: "Muscle Building",
    readTime: "5 min read",
    imgUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=350&fit=crop",
    content: [
      {
        heading: "The Protein Requirement for Muscle Gain",
        body: "Research is clear: to build muscle you need 1.6–2.2g of protein per kg of body weight per day. A 75kg man needs 120–165g protein daily. Most people eating regular home food get only 40–60g. That deficit stops all muscle growth.",
      },
      {
        heading: "Protein Timing: The Anabolic Window",
        body: "After resistance training, there's a 30–45 minute window where muscle protein synthesis is elevated 2x above baseline. Consuming 30–40g fast-digesting protein in this window significantly increases muscle hypertrophy compared to delayed intake.",
      },
      {
        heading: "Leucine: The Muscle-Building Trigger",
        body: "Leucine is the key amino acid that activates mTOR — the master switch for muscle protein synthesis. You need at least 3g of leucine per meal to trigger a full anabolic response. Chicken, eggs, paneer, and whey are all excellent sources.",
      },
      {
        heading: "How MuscleMeal Solves This",
        body: "Every MuscleMeal contains 30–45g of protein per serving, timed for optimal absorption. You don't count anything. Just eat and train. We handle the nutrition science so you can focus on the gym.",
      },
    ],
  },
  {
    id: 2,
    title:
      "Bulking vs Cutting: The Right Nutrition Strategy for Each Phase of Bodybuilding",
    excerpt:
      "Whether you're in a bulk or a cut, your meal plan needs to be different. Here's exactly what to eat in each phase to maximize muscle and minimize fat.",
    tag: "Bodybuilding",
    readTime: "6 min read",
    imgUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=350&fit=crop",
    content: [
      {
        heading: "The Bulking Phase: Caloric Surplus for Muscle",
        body: "During a bulk, you eat 300–500 calories above your TDEE. Protein stays high at 2g/kg. Carbohydrates fuel workouts and spike insulin to drive amino acids into muscle cells. MuscleMeal's Bulking Plan is designed with exactly this caloric architecture.",
      },
      {
        heading: "The Cutting Phase: Preserve Muscle, Burn Fat",
        body: "A cut requires a 300–500 calorie deficit while keeping protein at 2.2–2.5g/kg — higher than in a bulk — to prevent muscle catabolism. Dropping protein during a cut is the #1 mistake that causes muscle loss instead of fat loss.",
      },
      {
        heading: "Body Recomposition: Lose Fat and Gain Muscle Simultaneously",
        body: "Possible for beginners and returning athletes: eat at maintenance calories with very high protein (2.2–2.5g/kg), train heavy with progressive overload. Research shows up to 1kg fat loss + 0.5kg muscle gain per month is achievable.",
      },
      {
        heading: "MuscleMeal Plans Are Phase-Specific",
        body: "Our Bulking Plan, Cutting Plan, and Body Recomp Plan are each engineered with different calorie targets and macro splits. You choose your phase, we deliver the right meals every morning. No spreadsheets. No guesswork.",
      },
    ],
  },
  {
    id: 3,
    title:
      "Pre-Workout & Post-Workout Nutrition: What to Eat to Maximize Muscle Gain",
    excerpt:
      "What you eat before and after the gym determines 70% of your results. Most gym-goers get this completely wrong. Here's the science-backed protocol.",
    tag: "Gym Nutrition",
    readTime: "5 min read",
    imgUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=350&fit=crop",
    content: [
      {
        heading: "Pre-Workout Nutrition (60–90 Minutes Before)",
        body: "Eat 30–40g protein + 40–60g complex carbohydrates before training. The carbs fill muscle glycogen for maximum strength output. The protein provides amino acids that reduce muscle breakdown during the session. Avoid high-fat foods — they slow digestion and reduce performance.",
      },
      {
        heading: "Post-Workout Nutrition (Within 45 Minutes)",
        body: "Consume 35–50g fast-digesting protein immediately after training. Add 40–60g simple carbohydrates to spike insulin and drive nutrients into depleted muscles. This post-workout window is where the most muscle is built — missing it means wasted workouts.",
      },
      {
        heading: "The Real Numbers: What Studies Show",
        body: "Athletes with optimized pre/post workout nutrition gain 40% more muscle mass than those who train without nutritional timing (Journal of Strength & Conditioning Research). The gap between a good physique and a great physique is often just nutrition timing.",
      },
      {
        heading: "MuscleMeal is Built for Gym Timing",
        body: "Every MuscleMeal box is portioned to serve as either a pre-workout or post-workout meal — with the right protein and carb ratio for each purpose. Our morning delivery ensures your nutrition is ready when your gym session is done.",
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
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Bodybuilder's Knowledge Hub
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900">
            Muscle & Training Articles
          </h2>
          <p className="text-gray-500 mt-3">
            Science-backed nutrition for serious gym-goers and bodybuilders
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
