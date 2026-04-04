import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type RecipeItem = {
  name: string;
  img: string;
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
  description: string;
  cuisine: "Indian" | "International";
  tags: string[];
};

const RECIPES: Record<string, RecipeItem[]> = {
  "Bulking Non-Veg": [
    {
      name: "Tandoori Chicken (200g)",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
      protein: 42,
      carbs: 4,
      fat: 6,
      calories: 238,
      description:
        "Classic tandoori chicken — post-workout protein powerhouse for serious mass gain",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Chicken Tikka (150g)",
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      protein: 32,
      carbs: 3,
      fat: 5,
      calories: 185,
      description:
        "Marinated chicken grilled on skewers — lean protein to fuel muscle synthesis",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Chicken Keema Matar",
      img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop",
      protein: 35,
      carbs: 18,
      fat: 10,
      calories: 302,
      description:
        "Minced chicken with green peas — quality protein and carbs for muscle recovery",
      cuisine: "Indian",
      tags: [],
    },
    {
      name: "Pepper Chicken",
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
      protein: 38,
      carbs: 5,
      fat: 8,
      calories: 244,
      description:
        "Bold black pepper chicken — high protein with minimal carbs for clean bulk",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Chicken Stew + Veggies",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      protein: 30,
      carbs: 12,
      fat: 5,
      calories: 213,
      description:
        "Light chicken stew loaded with vegetables — supports muscle recovery and growth",
      cuisine: "Indian",
      tags: [],
    },
    {
      name: "Masala Omelette (3 Eggs)",
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop",
      protein: 22,
      carbs: 4,
      fat: 12,
      calories: 210,
      description:
        "Three egg masala omelette — complete amino acids for muscle protein synthesis",
      cuisine: "Indian",
      tags: [],
    },
    {
      name: "Egg Bhurji + Multigrain Roti",
      img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
      protein: 20,
      carbs: 28,
      fat: 10,
      calories: 280,
      description:
        "Scrambled spiced eggs with multigrain roti — balanced macros for sustained bulk",
      cuisine: "Indian",
      tags: [],
    },
    {
      name: "Boiled Egg Salad (4 Eggs)",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
      protein: 26,
      carbs: 8,
      fat: 10,
      calories: 226,
      description:
        "Protein-packed boiled egg salad — bodybuilder's classic for hitting daily protein targets",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Mutton Rogan Josh (150g)",
      img: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop",
      protein: 28,
      carbs: 6,
      fat: 14,
      calories: 266,
      description:
        "Kashmiri style mutton — rich in protein and creatine for serious strength gains",
      cuisine: "Indian",
      tags: [],
    },
    {
      name: "Bhuna Gosht (Lean)",
      img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      protein: 34,
      carbs: 3,
      fat: 10,
      calories: 238,
      description:
        "Dry-roasted lean mutton — high protein, intense flavor, perfect for bulking",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Grilled Fish + Lemon Garlic",
      img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
      protein: 36,
      carbs: 0,
      fat: 6,
      calories: 198,
      description:
        "Clean grilled fish — zero carbs, high protein, ideal for lean muscle building",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Prawn Masala",
      img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
      protein: 30,
      carbs: 6,
      fat: 4,
      calories: 180,
      description:
        "Spiced prawns in tangy masala — low fat, high protein for muscle definition",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Grilled Chicken + Quinoa Bowl",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      protein: 45,
      carbs: 32,
      fat: 8,
      calories: 380,
      description:
        "American-style protein bowl — complete macros engineered for serious muscle gain",
      cuisine: "International",
      tags: ["High Protein"],
    },
    {
      name: "Chicken Shawarma (Whole Wheat)",
      img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop",
      protein: 38,
      carbs: 28,
      fat: 10,
      calories: 354,
      description:
        "Middle Eastern wrap — high protein carb combo perfect for post-workout muscle fuel",
      cuisine: "International",
      tags: [],
    },
    {
      name: "Teriyaki Chicken + Brown Rice",
      img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop",
      protein: 40,
      carbs: 36,
      fat: 7,
      calories: 367,
      description:
        "Japanese-inspired lean chicken with brown rice — optimal muscle glycogen replenishment",
      cuisine: "International",
      tags: ["High Protein"],
    },
    {
      name: "Turkish Chicken Kebab",
      img: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=400&h=300&fit=crop",
      protein: 36,
      carbs: 4,
      fat: 9,
      calories: 241,
      description:
        "Grilled Turkish-spiced chicken — very lean, ideal for clean bulking phase",
      cuisine: "International",
      tags: ["High Protein"],
    },
  ],
  "Bulking Veg": [
    {
      name: "Paneer Tikka (200g)",
      img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
      protein: 28,
      carbs: 6,
      fat: 16,
      calories: 280,
      description:
        "Marinated paneer grilled on skewers — calorie-dense vegetarian protein for bulking",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Soya Chunk Curry",
      img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop",
      protein: 32,
      carbs: 18,
      fat: 6,
      calories: 254,
      description:
        "High protein soya chunks — plant-based muscle builder that rivals chicken",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Dal Makhani (Healthy)",
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      protein: 18,
      carbs: 30,
      fat: 8,
      calories: 264,
      description:
        "Slow-cooked black lentil curry — protein-rich comfort food for bulking diet",
      cuisine: "Indian",
      tags: [],
    },
    {
      name: "Rajma Chawal + Ghee",
      img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
      protein: 20,
      carbs: 48,
      fat: 8,
      calories: 344,
      description:
        "Classic kidney bean rice bowl — the Indian bodybuilder's staple for caloric surplus",
      cuisine: "Indian",
      tags: [],
    },
    {
      name: "Paneer Bhurji (Full Fat)",
      img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
      protein: 24,
      carbs: 4,
      fat: 18,
      calories: 272,
      description:
        "Scrambled spiced paneer — high fat, high protein for maximum muscle anabolism",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Quinoa + Paneer Bowl",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      protein: 30,
      carbs: 36,
      fat: 12,
      calories: 372,
      description:
        "Complete amino acid profile from quinoa + paneer — perfect veg muscle meal",
      cuisine: "International",
      tags: ["High Protein"],
    },
    {
      name: "Tofu Teriyaki + Brown Rice",
      img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop",
      protein: 26,
      carbs: 38,
      fat: 8,
      calories: 328,
      description:
        "Japanese-style protein-rich tofu bowl — fiber + protein combo for muscle building",
      cuisine: "International",
      tags: [],
    },
    {
      name: "Peanut Butter Oats Smoothie",
      img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
      protein: 24,
      carbs: 42,
      fat: 16,
      calories: 408,
      description:
        "Calorie-dense mass gain smoothie — hard gainer's secret weapon for surplus calories",
      cuisine: "International",
      tags: [],
    },
  ],
  "Lean Muscle Non-Veg": [
    {
      name: "Tandoori Chicken (No Butter)",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
      protein: 42,
      carbs: 4,
      fat: 4,
      calories: 220,
      description:
        "High protein, ultra-low fat — ideal for lean muscle gain while minimizing body fat",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Chicken Clear Soup",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop",
      protein: 22,
      carbs: 2,
      fat: 3,
      calories: 122,
      description:
        "Light clear broth with chicken — low calorie protein source for lean muscle cuts",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Lemon Pepper Chicken",
      img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c1?w=400&h=300&fit=crop",
      protein: 38,
      carbs: 1,
      fat: 4,
      calories: 192,
      description:
        "Zesty lemon pepper chicken breast — near-zero carbs for bodybuilding cutting phase",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Steamed Fish (No Oil)",
      img: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=400&h=300&fit=crop",
      protein: 34,
      carbs: 0,
      fat: 3,
      calories: 162,
      description:
        "Pure protein, zero oil steamed fish — the ultimate lean muscle cutting meal",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Grilled Chicken Caesar Salad",
      img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      protein: 38,
      carbs: 8,
      fat: 10,
      calories: 274,
      description:
        "Classic Caesar with grilled chicken — high protein salad for lean muscle and definition",
      cuisine: "International",
      tags: ["High Protein"],
    },
    {
      name: "Vietnamese Pho Chicken",
      img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
      protein: 28,
      carbs: 14,
      fat: 4,
      calories: 204,
      description:
        "Light aromatic broth with chicken — perfect cutting meal with controlled macros",
      cuisine: "International",
      tags: ["High Protein"],
    },
    {
      name: "Lebanese Grilled Chicken",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
      protein: 40,
      carbs: 4,
      fat: 6,
      calories: 228,
      description:
        "Lebanese spiced grilled chicken — ultra-lean protein source for muscle definition",
      cuisine: "International",
      tags: ["High Protein"],
    },
  ],
  "Lean Muscle Veg": [
    {
      name: "Moong Dal Chilla (No Oil)",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      protein: 14,
      carbs: 22,
      fat: 2,
      calories: 162,
      description:
        "Light savory moong dal crepes — low calorie protein meal for lean muscle cutting",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Sprouts Salad",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
      protein: 12,
      carbs: 18,
      fat: 2,
      calories: 138,
      description:
        "Mixed sprouts with fresh lemon — bioavailable protein for lean muscle preservation",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Palak Paneer (No Cream)",
      img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
      protein: 16,
      carbs: 8,
      fat: 8,
      calories: 168,
      description:
        "Iron-rich spinach with paneer — supports muscle oxygenation during cutting phase",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Tofu Stir Fry (Low Oil)",
      img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
      protein: 18,
      carbs: 8,
      fat: 5,
      calories: 149,
      description:
        "Crispy tofu with colorful vegetables — high protein, low calorie for lean muscle",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Mixed Veg Soup",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop",
      protein: 6,
      carbs: 12,
      fat: 2,
      calories: 90,
      description:
        "Fiber-rich vegetable soup — keeps you in deficit while supporting muscle retention",
      cuisine: "Indian",
      tags: ["High Protein"],
    },
    {
      name: "Quinoa Veg Bowl",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      protein: 18,
      carbs: 32,
      fat: 6,
      calories: 254,
      description:
        "Complete protein quinoa with roasted vegetables — lean muscle building for veg athletes",
      cuisine: "International",
      tags: ["High Protein"],
    },
    {
      name: "Japanese Miso Tofu Soup",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      protein: 14,
      carbs: 8,
      fat: 4,
      calories: 124,
      description:
        "Authentic miso soup with silken tofu — gut health supports muscle nutrient absorption",
      cuisine: "International",
      tags: ["High Protein"],
    },
  ],
};

const TABS = [
  "Bulking Non-Veg",
  "Bulking Veg",
  "Lean Muscle Non-Veg",
  "Lean Muscle Veg",
];
const FILTERS = ["All", "Indian", "International", "High Protein"];
const TAB_OCIDS = [
  "recipes.tab.1",
  "recipes.tab.2",
  "recipes.tab.3",
  "recipes.tab.4",
];

export default function RecipesPage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [activeFilter, setActiveFilter] = useState("All");

  const allRecipes = RECIPES[activeTab];
  const filtered = allRecipes.filter((r) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Indian" || activeFilter === "International")
      return r.cuisine === activeFilter;
    return r.tags.includes(activeFilter);
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Bodybuilder's Menu
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Recipe Library
            </h1>
            <p className="text-gray-500 mt-3 max-w-md mx-auto text-lg">
              High-protein Indian & International recipes for muscle gain and
              bodybuilding.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              type="button"
              data-ocid={TAB_OCIDS[i]}
              onClick={() => {
                setActiveTab(tab);
                setActiveFilter("All");
              }}
              className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "border-gray-200 text-gray-600 hover:border-primary/40 hover:text-gray-900 bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                activeFilter === f
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-800 bg-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((recipe, idx) => (
              <motion.div
                key={recipe.name}
                data-ocid={`recipes.card.item.${idx + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col shadow-sm hover:shadow-md"
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={recipe.img}
                    alt={recipe.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  {recipe.tags.length > 0 && (
                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                      {recipe.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="text-[10px] py-0 bg-primary/90 text-white border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2">
                    <Badge
                      variant="outline"
                      className="text-[10px] border-white/40 text-white bg-black/30"
                    >
                      {recipe.cuisine}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-gray-900 text-sm leading-tight mb-1">
                    {recipe.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2 flex-1">
                    {recipe.description}
                  </p>

                  <div className="grid grid-cols-4 gap-1">
                    {[
                      {
                        label: "P",
                        value: `${recipe.protein}g`,
                        color: "text-blue-600",
                      },
                      {
                        label: "C",
                        value: `${recipe.carbs}g`,
                        color: "text-amber-600",
                      },
                      {
                        label: "F",
                        value: `${recipe.fat}g`,
                        color: "text-orange-500",
                      },
                      {
                        label: "kcal",
                        value: `${recipe.calories}`,
                        color: "text-primary",
                      },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="text-center bg-gray-50 rounded-lg py-1.5"
                      >
                        <div className={`text-xs font-bold ${m.color}`}>
                          {m.value}
                        </div>
                        <div className="text-[10px] text-gray-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div
            className="text-center py-12 text-gray-400"
            data-ocid="recipes.empty_state"
          >
            No recipes match this filter.
          </div>
        )}
      </div>
    </div>
  );
}
