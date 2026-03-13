import {
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Flame,
  Loader2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { EnrichedDietCalculation } from "../backend.d";
import { ActivityLevel, DietType, Gender, Goal } from "../backend.d";
import { useActor } from "../hooks/useActor";
import { calculateDiet } from "../hooks/useQueries";

type Step = 1 | 2 | 3 | 4;

const WA_SVG = (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-current"
    role="img"
    aria-label="WhatsApp"
  >
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function DietCalculator() {
  const { actor } = useActor();
  const [step, setStep] = useState<Step>(1);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState<ActivityLevel | null>(null);
  const [dietType, setDietType] = useState<DietType | null>(null);
  const [result, setResult] = useState<EnrichedDietCalculation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const activityOptions: {
    label: string;
    value: ActivityLevel;
    desc: string;
  }[] = [
    {
      label: "Sedentary",
      value: ActivityLevel.sedentary,
      desc: "Little to no exercise",
    },
    {
      label: "Light Active",
      value: ActivityLevel.light,
      desc: "Light exercise 1-3 days/week",
    },
    {
      label: "Moderately Active",
      value: ActivityLevel.moderate,
      desc: "Moderate exercise 3-5 days/week",
    },
    {
      label: "Very Active",
      value: ActivityLevel.active,
      desc: "Hard exercise 6-7 days/week",
    },
    {
      label: "Extremely Active",
      value: ActivityLevel.veryActive,
      desc: "Very hard exercise, physical job",
    },
  ];

  const handleSubmit = async () => {
    if (
      !actor ||
      !goal ||
      !gender ||
      !activity ||
      !dietType ||
      !age ||
      !weight ||
      !height
    ) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await calculateDiet(
        actor,
        gender,
        BigInt(Number.parseInt(age)),
        Number.parseFloat(weight),
        Number.parseFloat(height),
        activity,
        dietType,
        goal,
      );
      setResult(res);
    } catch (_e) {
      setError("Calculation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const waResultLink = result
    ? `https://wa.me/917724047283?text=Hi%20MuscleMeal!%20My%20goal%20is%20${encodeURIComponent(
        result.goal === Goal.fatLoss ? "Fat Loss" : "Muscle Gain",
      )}%2C%20I%20need%20${result.calories}%20kcal%20and%20${result.protein}g%20protein%20daily.%20Please%20suggest%20a%20plan.`
    : "";

  const canProceed = () => {
    if (step === 1) return !!goal;
    if (step === 2) return !!gender && !!age && !!weight && !!height;
    if (step === 3) return !!activity;
    if (step === 4) return !!dietType;
    return true;
  };

  const resetCalculator = () => {
    setResult(null);
    setStep(1);
    setGoal(null);
    setGender(null);
    setAge("");
    setWeight("");
    setHeight("");
    setActivity(null);
    setDietType(null);
  };

  if (result) {
    return (
      <section id="calculator" className="py-20 bg-background">
        <div className="section-divider mb-16" />
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-primary/30 rounded-3xl p-8 text-center green-glow"
          >
            <div className="text-4xl mb-4">
              {result.goal === Goal.fatLoss ? "🔥" : "💪"}
            </div>
            <h2 className="font-display text-3xl font-extrabold text-foreground mb-2">
              Your Personalized Plan
            </h2>
            <p className="text-muted-foreground mb-8">
              Based on your body stats and goal
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-secondary/40 rounded-2xl p-4">
                <div className="text-primary font-display text-3xl font-extrabold">
                  {result.calories}
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  Calories / Day
                </div>
              </div>
              <div className="bg-secondary/40 rounded-2xl p-4">
                <div className="text-primary font-display text-3xl font-extrabold">
                  {result.protein}g
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  Protein / Day
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 mb-8 text-left">
              <p className="text-sm text-foreground font-semibold mb-1">
                Recommended Plan
              </p>
              <p className="text-muted-foreground text-sm">
                {result.goal === Goal.fatLoss
                  ? "Our Fat Loss plan with 2-3 meals per day. Calorie-controlled, high-protein meals to help you shed fat while preserving muscle."
                  : "Our Muscle Gain plan with 3-4 meals per day. High-protein, high-calorie meals to fuel your gains and recovery."}
              </p>
            </div>

            <a
              href={waResultLink}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="calculator.result.whatsapp.button"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity"
            >
              {WA_SVG}
              Get My Custom Plan on WhatsApp
            </a>

            <button
              type="button"
              className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={resetCalculator}
            >
              ← Calculate Again
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="section-divider mb-16" />
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Free Tool
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mt-2">
            Diet Calculator
          </h2>
          <p className="text-muted-foreground mt-3">
            Find out your daily calorie & protein needs in 4 steps.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  s < step
                    ? "bg-primary text-primary-foreground"
                    : s === step
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/30"
                      : "bg-secondary text-muted-foreground"
                }`}
              >
                {s < step ? "✓" : s}
              </div>
              {s < 4 && (
                <div
                  className={`w-12 h-0.5 mx-1 transition-all ${s < step ? "bg-primary" : "bg-border"}`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-3xl p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Goal */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  What's your goal?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    data-ocid="calculator.goal.button.1"
                    type="button"
                    onClick={() => setGoal(Goal.fatLoss)}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                      goal === Goal.fatLoss
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <Flame
                      size={36}
                      className={
                        goal === Goal.fatLoss
                          ? "text-primary"
                          : "text-muted-foreground"
                      }
                    />
                    <span className="font-display font-bold text-foreground">
                      Fat Loss
                    </span>
                    <span className="text-xs text-muted-foreground text-center">
                      Burn fat, stay lean
                    </span>
                  </button>
                  <button
                    data-ocid="calculator.goal.button.2"
                    type="button"
                    onClick={() => setGoal(Goal.muscleGain)}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                      goal === Goal.muscleGain
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <Dumbbell
                      size={36}
                      className={
                        goal === Goal.muscleGain
                          ? "text-primary"
                          : "text-muted-foreground"
                      }
                    />
                    <span className="font-display font-bold text-foreground">
                      Muscle Gain
                    </span>
                    <span className="text-xs text-muted-foreground text-center">
                      Build strength & size
                    </span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Stats */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Your Body Stats
                </h3>
                <div className="space-y-4">
                  <fieldset>
                    <legend className="text-sm text-muted-foreground mb-2 block">
                      Gender
                    </legend>
                    <div
                      className="grid grid-cols-2 gap-3"
                      data-ocid="calculator.gender.radio"
                    >
                      {[
                        { label: "Male", val: Gender.male },
                        { label: "Female", val: Gender.female },
                      ].map((g) => (
                        <button
                          key={g.val}
                          type="button"
                          onClick={() => setGender(g.val)}
                          className={`py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                            gender === g.val
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border text-muted-foreground hover:border-primary/40"
                          }`}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label
                        htmlFor="calc-age"
                        className="text-sm text-muted-foreground mb-2 block"
                      >
                        Age (years)
                      </label>
                      <input
                        id="calc-age"
                        type="number"
                        data-ocid="calculator.age.input"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="25"
                        min="15"
                        max="80"
                        className="w-full bg-input border border-border rounded-xl px-3 py-3 text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="calc-weight"
                        className="text-sm text-muted-foreground mb-2 block"
                      >
                        Weight (kg)
                      </label>
                      <input
                        id="calc-weight"
                        type="number"
                        data-ocid="calculator.weight.input"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="70"
                        min="30"
                        max="200"
                        className="w-full bg-input border border-border rounded-xl px-3 py-3 text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="calc-height"
                        className="text-sm text-muted-foreground mb-2 block"
                      >
                        Height (cm)
                      </label>
                      <input
                        id="calc-height"
                        type="number"
                        data-ocid="calculator.height.input"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="170"
                        min="100"
                        max="250"
                        className="w-full bg-input border border-border rounded-xl px-3 py-3 text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Activity */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Activity Level
                </h3>
                <div className="space-y-3">
                  {activityOptions.map((opt, idx) => (
                    <button
                      key={opt.value}
                      type="button"
                      data-ocid={`calculator.activity.button.${idx + 1}`}
                      onClick={() => setActivity(opt.value)}
                      className={`w-full flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                        activity === opt.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 transition-all ${
                          activity === opt.value
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      />
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {opt.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {opt.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Diet Type */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Diet Preference
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    data-ocid="calculator.diet.button.1"
                    type="button"
                    onClick={() => setDietType(DietType.veg)}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                      dietType === DietType.veg
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <span className="text-4xl">🥗</span>
                    <span className="font-display font-bold text-foreground">
                      Vegetarian
                    </span>
                  </button>
                  <button
                    data-ocid="calculator.diet.button.2"
                    type="button"
                    onClick={() => setDietType(DietType.nonVeg)}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                      dietType === DietType.nonVeg
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <span className="text-4xl">🍗</span>
                    <span className="font-display font-bold text-foreground">
                      Non-Vegetarian
                    </span>
                  </button>
                </div>

                {error && (
                  <p
                    className="text-destructive text-sm mt-4"
                    data-ocid="calculator.error_state"
                  >
                    {error}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1) as Step)}
              disabled={step === 1}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={16} /> Back
            </button>

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s + 1) as Step)}
                disabled={!canProceed()}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button
                data-ocid="calculator.submit.button"
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed() || loading}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                {loading ? "Calculating..." : "Calculate My Plan"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
