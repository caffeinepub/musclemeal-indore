import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Gender = "male" | "female";
type HeightUnit = "cm" | "ft";
type ActivityLevel =
  | "sedentary"
  | "lightly"
  | "moderately"
  | "very"
  | "athlete";
type Goal = "fatLoss" | "muscleGain" | "maintain" | "recomposition";
type DietPref = "veg" | "nonveg" | "eggetarian";
type HealthCondition =
  | "none"
  | "diabetes"
  | "highBP"
  | "thyroid"
  | "pcos"
  | "digestive"
  | "allergies";

interface BasicInfo {
  name: string;
  age: string;
  gender: Gender;
  weight: string;
  heightUnit: HeightUnit;
  heightCm: string;
  heightFt: string;
  heightIn: string;
}

interface Results {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  bmi: number;
  bmr: number;
  bmiCategory: string;
  recommendedPlan: string;
  expectedResult: string;
}

const activityOptions = [
  {
    value: "sedentary" as ActivityLevel,
    label: "Sedentary",
    desc: "No exercise, desk job",
    multiplier: 1.2,
  },
  {
    value: "lightly" as ActivityLevel,
    label: "Lightly Active",
    desc: "Gym/walk 1-2 days/week",
    multiplier: 1.375,
  },
  {
    value: "moderately" as ActivityLevel,
    label: "Moderately Active",
    desc: "Gym 3-4 days/week",
    multiplier: 1.55,
  },
  {
    value: "very" as ActivityLevel,
    label: "Very Active",
    desc: "Heavy workout 5-6 days/week",
    multiplier: 1.725,
  },
  {
    value: "athlete" as ActivityLevel,
    label: "Athlete",
    desc: "2x training daily",
    multiplier: 1.9,
  },
];

const goalOptions = [
  {
    value: "fatLoss" as Goal,
    label: "Fat Loss",
    desc: "Lose weight",
    emoji: "🔥",
  },
  {
    value: "muscleGain" as Goal,
    label: "Muscle Gain",
    desc: "Build muscle",
    emoji: "💪",
  },
  {
    value: "maintain" as Goal,
    label: "Maintain",
    desc: "Stay healthy",
    emoji: "⚖️",
  },
  {
    value: "recomposition" as Goal,
    label: "Body Recomposition",
    desc: "Lose fat + gain muscle",
    emoji: "✨",
  },
];

const dietOptions = [
  { value: "veg" as DietPref, label: "Pure Vegetarian", emoji: "🥗" },
  { value: "nonveg" as DietPref, label: "Non-Vegetarian", emoji: "🍗" },
  { value: "eggetarian" as DietPref, label: "Eggetarian", emoji: "🥚" },
];

const healthOptions: { value: HealthCondition; label: string }[] = [
  { value: "none", label: "No Condition" },
  { value: "diabetes", label: "Diabetes" },
  { value: "highBP", label: "High Blood Pressure" },
  { value: "thyroid", label: "Thyroid" },
  { value: "pcos", label: "PCOD/PCOS (Women)" },
  { value: "digestive", label: "Digestive Issues" },
  { value: "allergies", label: "Food Allergies" },
];

function calcResults(
  info: BasicInfo,
  activity: ActivityLevel,
  goal: Goal,
  diet: DietPref,
): Results {
  const weight = Number.parseFloat(info.weight);
  const age = Number.parseFloat(info.age);
  let heightCm = Number.parseFloat(info.heightCm);
  if (info.heightUnit === "ft") {
    const ft = Number.parseFloat(info.heightFt) || 0;
    const inch = Number.parseFloat(info.heightIn) || 0;
    heightCm = ft * 30.48 + inch * 2.54;
  }

  const bmr =
    info.gender === "male"
      ? 10 * weight + 6.25 * heightCm - 5 * age + 5
      : 10 * weight + 6.25 * heightCm - 5 * age - 161;

  const multiplierMap: Record<ActivityLevel, number> = {
    sedentary: 1.2,
    lightly: 1.375,
    moderately: 1.55,
    very: 1.725,
    athlete: 1.9,
  };
  const tdee = bmr * multiplierMap[activity];

  const adjustmentMap: Record<Goal, number> = {
    fatLoss: -500,
    muscleGain: 300,
    maintain: 0,
    recomposition: -200,
  };
  let calories = tdee + adjustmentMap[goal];
  const minCalories = info.gender === "female" ? 1200 : 1500;
  calories = Math.max(calories, minCalories);

  const proteinMap: Record<Goal, number> = {
    fatLoss: 2.2,
    muscleGain: 2.0,
    maintain: 1.6,
    recomposition: 2.0,
  };
  const protein = Math.round(weight * proteinMap[goal]);
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.max(
    50,
    Math.round((calories - protein * 4 - fat * 9) / 4),
  );

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  let bmiCategory = "Normal";
  if (bmi < 18.5) bmiCategory = "Underweight";
  else if (bmi < 25) bmiCategory = "Normal";
  else if (bmi < 30) bmiCategory = "Overweight";
  else bmiCategory = "Obese";

  let recommendedPlan = "";
  if (goal === "fatLoss" && diet === "veg")
    recommendedPlan =
      "Our Veg Fat Loss Plan — 2 meals/day, calorie-controlled high-protein";
  else if (goal === "fatLoss")
    recommendedPlan = "Our Non-Veg Fat Loss Plan — 2-3 meals/day, high-protein";
  else if (goal === "muscleGain" && diet === "veg")
    recommendedPlan = "Our Veg Muscle Gain Plan — 3-4 meals/day, high-calorie";
  else if (goal === "muscleGain")
    recommendedPlan =
      "Our Non-Veg Muscle Gain Plan — 3-4 meals/day, high-protein";
  else if (goal === "maintain")
    recommendedPlan = "Our Maintenance Plan — balanced 2-3 meals/day";
  else
    recommendedPlan =
      "Our Body Recomposition Plan — 3 meals/day, moderate deficit";

  const expectedResultMap: Record<Goal, string> = {
    fatLoss: "In 3 months, approximately 6-8 kg fat loss is possible",
    muscleGain:
      "In 3 months, approximately 3-5 kg lean muscle gain is possible",
    maintain:
      "Maintain current weight and improve energy levels within 4 weeks",
    recomposition:
      "In 3-4 months, visible fat reduction and muscle toning is possible",
  };

  return {
    calories: Math.round(calories),
    protein,
    carbs,
    fat,
    bmi: Math.round(bmi * 10) / 10,
    bmr: Math.round(bmr),
    bmiCategory,
    recommendedPlan,
    expectedResult: expectedResultMap[goal],
  };
}

const STEP_LABELS = ["Basic Info", "Activity", "Goal", "Diet", "Health"];

export default function DietCalculatorPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const [info, setInfo] = useState<BasicInfo>({
    name: "",
    age: "",
    gender: "male",
    weight: "",
    heightUnit: "cm",
    heightCm: "",
    heightFt: "",
    heightIn: "",
  });
  const [activity, setActivity] = useState<ActivityLevel | "">("");
  const [goal, setGoal] = useState<Goal | "">("");
  const [diet, setDiet] = useState<DietPref | "">("");
  const [conditions, setConditions] = useState<HealthCondition[]>([]);
  const [allergyNote, setAllergyNote] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  const canNext = [
    info.name.trim() &&
      info.age &&
      info.weight &&
      (info.heightUnit === "cm" ? info.heightCm : info.heightFt),
    !!activity,
    !!goal,
    !!diet,
    true,
  ][step];

  const navigate = (dir: 1 | -1) => {
    setDirection(dir);
    setStep((s) => s + dir);
  };

  const calculate = () => {
    if (!activity || !goal || !diet) return;
    const r = calcResults(info, activity, goal, diet);
    setResults(r);
  };

  const reset = () => {
    setStep(0);
    setResults(null);
    setInfo({
      name: "",
      age: "",
      gender: "male",
      weight: "",
      heightUnit: "cm",
      heightCm: "",
      heightFt: "",
      heightIn: "",
    });
    setActivity("");
    setGoal("");
    setDiet("");
    setConditions([]);
    setAllergyNote("");
  };

  const toggleCondition = (val: HealthCondition) => {
    if (val === "none") {
      setConditions(["none"]);
      return;
    }
    setConditions((prev) => {
      const without = prev.filter((c) => c !== "none");
      if (without.includes(val)) return without.filter((c) => c !== val);
      return [...without, val];
    });
  };

  const bmiColor = (cat: string) => {
    if (cat === "Normal") return "bg-green-100 text-green-800";
    if (cat === "Obese") return "bg-red-100 text-red-800";
    return "bg-yellow-100 text-yellow-800";
  };

  const getHeightDisplay = () => {
    if (info.heightUnit === "cm") return `${info.heightCm} cm`;
    return `${info.heightFt}ft ${info.heightIn || "0"}in`;
  };

  const getActivityLabel = () =>
    activityOptions.find((a) => a.value === activity)?.label || "";
  const getGoalLabel = () =>
    goalOptions.find((g) => g.value === goal)?.label || "";

  const waMessage = encodeURIComponent(
    `Hi MuscleMeal! My goal is ${getGoalLabel()}, weight ${info.weight}kg, height ${getHeightDisplay()}, ${getActivityLabel()} — please suggest a plan.`,
  );

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  if (results) {
    const nonNoneConditions = conditions.filter((c) => c !== "none");
    const conditionLabels = nonNoneConditions
      .map((c) => healthOptions.find((h) => h.value === c)?.label)
      .filter(Boolean)
      .join(", ");

    return (
      <section className="min-h-screen pt-24 pb-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
              Your Plan, <span className="text-primary">{info.name}</span>
            </h2>
            <p className="text-gray-500 mb-8">
              Based on your inputs, here are your personalized daily targets.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                {
                  label: "Calories / Day",
                  value: `${results.calories}`,
                  unit: "kcal",
                  ocid: "result.calories.card",
                },
                {
                  label: "Protein / Day",
                  value: `${results.protein}`,
                  unit: "g",
                  ocid: "result.protein.card",
                },
                {
                  label: "Carbs / Day",
                  value: `${results.carbs}`,
                  unit: "g",
                  ocid: "result.carbs.card",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  data-ocid={stat.ocid}
                  className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100"
                >
                  <p className="text-2xl font-bold font-display text-gray-900">
                    {stat.value}
                    <span className="text-sm font-normal text-gray-400 ml-1">
                      {stat.unit}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div
                data-ocid="result.bmi.card"
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >
                <p className="text-xs text-gray-500 mb-2">BMI</p>
                <p className="text-2xl font-bold font-display text-gray-900">
                  {results.bmi}
                </p>
                <span
                  className={`inline-block mt-2 text-xs font-semibold px-2 py-0.5 rounded-full ${bmiColor(results.bmiCategory)}`}
                >
                  {results.bmiCategory}
                </span>
              </div>
              <div
                data-ocid="result.bmr.card"
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >
                <p className="text-xs text-gray-500 mb-2">BMR (at rest)</p>
                <p className="text-2xl font-bold font-display text-gray-900">
                  {results.bmr}
                  <span className="text-sm font-normal text-gray-400 ml-1">
                    kcal
                  </span>
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Calories burned at rest
                </p>
              </div>
            </div>

            <div
              data-ocid="result.plan.card"
              className="bg-black text-white rounded-2xl p-6 mb-4"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                Recommended Plan
              </p>
              <p className="text-lg font-semibold">{results.recommendedPlan}</p>
            </div>

            <div
              data-ocid="result.timeline.card"
              className="bg-gray-50 rounded-2xl p-5 border border-gray-100 mb-6"
            >
              <p className="text-xs text-gray-500 mb-1">Expected Result</p>
              <p className="text-base font-semibold text-gray-900">
                ⏱ {results.expectedResult}
              </p>
            </div>

            {conditionLabels && (
              <div
                data-ocid="result.condition.card"
                className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6"
              >
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Your plan takes{" "}
                  <strong>{conditionLabels}</strong> into account. Our dietician
                  will customize it further for your specific needs.
                </p>
              </div>
            )}

            <a
              href={`https://wa.me/917724047283?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="result.whatsapp.button"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl text-base font-semibold hover:bg-[#20be5a] transition-colors mb-3"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              Get My Custom Plan on WhatsApp
            </a>

            <p className="text-xs text-gray-400 text-center mb-6 italic">
              This calculator provides an estimate. For an accurate plan, our
              dietician will personally speak with you and create a custom plan
              tailored to your needs.
            </p>

            <div className="text-center">
              <button
                type="button"
                onClick={reset}
                data-ocid="result.reset.button"
                className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors"
              >
                Calculate Again
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Diet Calculator
          </h1>
          <p className="text-gray-500">
            Get your personalized daily calorie and macro targets in minutes.
          </p>
        </div>

        <div
          className="flex items-center justify-between mb-10 px-2"
          data-ocid="calculator.steps.panel"
        >
          {STEP_LABELS.map((label, i) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 flex-1"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  i < step
                    ? "bg-black text-white border-black"
                    : i === step
                      ? "border-black text-black bg-white ring-2 ring-black/10"
                      : "border-gray-200 text-gray-400 bg-white"
                }`}
              >
                {i < step ? "✓" : i + 1}
              </div>
              <span
                className={`text-[10px] font-medium hidden sm:block ${i <= step ? "text-gray-800" : "text-gray-400"}`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              {step === 0 && <StepBasicInfo info={info} setInfo={setInfo} />}
              {step === 1 && (
                <StepActivity value={activity} onChange={setActivity} />
              )}
              {step === 2 && <StepGoal value={goal} onChange={setGoal} />}
              {step === 3 && <StepDiet value={diet} onChange={setDiet} />}
              {step === 4 && (
                <StepHealth
                  conditions={conditions}
                  toggle={toggleCondition}
                  allergyNote={allergyNote}
                  setAllergyNote={setAllergyNote}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            disabled={step === 0}
            data-ocid="calculator.back.button"
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            ← Back
          </button>
          {step < 4 ? (
            <button
              type="button"
              onClick={() => navigate(1)}
              disabled={!canNext}
              data-ocid="calculator.next.button"
              className="px-6 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          ) : (
            <button
              type="button"
              onClick={calculate}
              data-ocid="calculator.submit.button"
              className="px-6 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Calculate My Plan
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function StepBasicInfo({
  info,
  setInfo,
}: { info: BasicInfo; setInfo: (i: BasicInfo) => void }) {
  const set =
    (k: keyof BasicInfo) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInfo({ ...info, [k]: e.target.value });

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-display font-bold text-gray-900">
        Basic Information
      </h2>
      <div>
        <label
          htmlFor="calc-name"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Your Name
        </label>
        <input
          id="calc-name"
          type="text"
          value={info.name}
          onChange={set("name")}
          placeholder="e.g. Rahul Sharma"
          data-ocid="calculator.name.input"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="calc-age"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Age
          </label>
          <input
            id="calc-age"
            type="number"
            value={info.age}
            onChange={set("age")}
            min={15}
            max={80}
            placeholder="25"
            data-ocid="calculator.age.input"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition"
          />
        </div>
        <div>
          <p className="block text-sm font-medium text-gray-700 mb-1.5">
            Gender
          </p>
          <div className="flex gap-2" data-ocid="calculator.gender.toggle">
            {(["male", "female"] as Gender[]).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setInfo({ ...info, gender: g })}
                data-ocid={`calculator.gender.${g}.button`}
                className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-all ${
                  info.gender === g
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {g === "male" ? "Male" : "Female"}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="calc-weight"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Weight (kg)
        </label>
        <input
          id="calc-weight"
          type="number"
          value={info.weight}
          onChange={set("weight")}
          placeholder="70"
          data-ocid="calculator.weight.input"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-sm font-medium text-gray-700">Height</p>
          <div
            className="flex gap-1 bg-gray-100 p-0.5 rounded-lg"
            data-ocid="calculator.height.toggle"
          >
            {(["cm", "ft"] as HeightUnit[]).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setInfo({ ...info, heightUnit: u })}
                data-ocid={`calculator.height.${u}.button`}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  info.heightUnit === u
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500"
                }`}
              >
                {u === "cm" ? "cm" : "ft / in"}
              </button>
            ))}
          </div>
        </div>
        {info.heightUnit === "cm" ? (
          <input
            id="calc-height-cm"
            type="number"
            value={info.heightCm}
            onChange={set("heightCm")}
            placeholder="170"
            data-ocid="calculator.height.input"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition"
          />
        ) : (
          <div className="flex gap-3">
            <input
              id="calc-height-ft"
              type="number"
              value={info.heightFt}
              onChange={set("heightFt")}
              placeholder="5"
              data-ocid="calculator.height.ft.input"
              className="w-1/2 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition"
            />
            <input
              id="calc-height-in"
              type="number"
              value={info.heightIn}
              onChange={set("heightIn")}
              placeholder="8"
              data-ocid="calculator.height.in.input"
              className="w-1/2 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function StepActivity({
  value,
  onChange,
}: { value: ActivityLevel | ""; onChange: (v: ActivityLevel) => void }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-display font-bold text-gray-900">
        Activity Level
      </h2>
      {activityOptions.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          data-ocid={`calculator.activity.${opt.value}.button`}
          className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 text-left transition-all ${
            value === opt.value
              ? "border-black bg-black text-white"
              : "border-gray-200 bg-white hover:border-gray-400"
          }`}
        >
          <div className="flex-1">
            <p className="font-semibold text-sm">{opt.label}</p>
            <p
              className={`text-xs mt-0.5 ${value === opt.value ? "text-gray-300" : "text-gray-500"}`}
            >
              {opt.desc}
            </p>
          </div>
          {value === opt.value && <span className="text-white">✓</span>}
        </button>
      ))}
    </div>
  );
}

function StepGoal({
  value,
  onChange,
}: { value: Goal | ""; onChange: (v: Goal) => void }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-display font-bold text-gray-900">
        Your Goal
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {goalOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            data-ocid={`calculator.goal.${opt.value}.button`}
            className={`flex flex-col items-center gap-2 px-4 py-5 rounded-xl border-2 text-center transition-all ${
              value === opt.value
                ? "border-black bg-black text-white"
                : "border-gray-200 bg-white hover:border-gray-400"
            }`}
          >
            <span className="text-2xl">{opt.emoji}</span>
            <p className="font-semibold text-sm">{opt.label}</p>
            <p
              className={`text-xs ${value === opt.value ? "text-gray-300" : "text-gray-500"}`}
            >
              {opt.desc}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepDiet({
  value,
  onChange,
}: { value: DietPref | ""; onChange: (v: DietPref) => void }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-display font-bold text-gray-900">
        Diet Preference
      </h2>
      <div className="flex flex-col gap-3">
        {dietOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            data-ocid={`calculator.diet.${opt.value}.button`}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-all ${
              value === opt.value
                ? "border-black bg-black text-white"
                : "border-gray-200 bg-white hover:border-gray-400"
            }`}
          >
            <span className="text-2xl">{opt.emoji}</span>
            <p className="font-semibold text-sm">{opt.label}</p>
            {value === opt.value && (
              <span className="ml-auto text-white">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function StepHealth({
  conditions,
  toggle,
  allergyNote,
  setAllergyNote,
}: {
  conditions: HealthCondition[];
  toggle: (v: HealthCondition) => void;
  allergyNote: string;
  setAllergyNote: (v: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-display font-bold text-gray-900">
        Health Conditions
      </h2>
      <p className="text-sm text-gray-500">
        Select all that apply. This helps us tailor your plan.
      </p>
      <div className="space-y-2">
        {healthOptions.map((opt) => {
          const checked = conditions.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              data-ocid={`calculator.health.${opt.value}.checkbox`}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left transition-all ${
                checked
                  ? "border-black bg-black text-white"
                  : "border-gray-200 bg-white hover:border-gray-400"
              }`}
            >
              <span
                className={`w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-all ${
                  checked ? "border-white bg-white" : "border-gray-300 bg-white"
                }`}
              >
                {checked && (
                  <span className="text-black text-xs font-bold">✓</span>
                )}
              </span>
              <span className="text-sm font-medium">{opt.label}</span>
            </button>
          );
        })}
      </div>
      {conditions.includes("allergies") && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <label
            htmlFor="calc-allergy"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            What foods to avoid?
          </label>
          <input
            id="calc-allergy"
            type="text"
            value={allergyNote}
            onChange={(e) => setAllergyNote(e.target.value)}
            placeholder="e.g. peanuts, dairy, gluten"
            data-ocid="calculator.allergy.input"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition"
          />
        </motion.div>
      )}
    </div>
  );
}
