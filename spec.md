# Muscle Meals Indore — Diet Calculator Page

## Current State
- App has Home and Recipes pages (two-page routing via useState in App.tsx)
- Existing DietCalculator.tsx component exists but uses backend API calls and only has 4 steps (goal, stats, activity, diet type)
- No standalone Diet Calculator page in the navbar

## Requested Changes (Diff)

### Add
- New page type `calculator` in App.tsx
- Dedicated Diet Calculator page (DietCalculatorPage component) — fully frontend/client-side, no backend calls
- "Diet Calculator" link in Navbar (both desktop and mobile)
- 5-step wizard with progress indicator:
  - Step 1: Basic Info (Name, Age, Gender, Weight kg, Height cm or feet/inches toggle)
  - Step 2: Activity Level (5 options with descriptions)
  - Step 3: Goal (4 options: Fat Loss, Muscle Gain, Maintain, Body Recomposition)
  - Step 4: Diet Preference (Vegetarian, Non-Vegetarian, Eggetarian)
  - Step 5: Health Conditions (multi-select: None, Diabetes, High BP, Thyroid, PCOD/PCOS, Digestive Issues, Food Allergies with text input)
- Results section showing:
  - Daily Calorie Need
  - Daily Protein Need
  - Daily Carbs Need
  - BMI with category label
  - BMR (Basal Metabolic Rate)
  - Recommended Plan (based on goal + diet + activity)
  - Expected Result (timeframe estimate)
  - WhatsApp CTA button with pre-filled message including name, goal, weight, height, activity level
  - Disclaimer: "This calculator provides an estimate. For an accurate plan, our dietician will personally speak with you and create a custom plan."

### Modify
- App.tsx: add `calculator` to Page type, render DietCalculatorPage
- Navbar.tsx: add Diet Calculator nav link alongside Recipes

### Remove
- Old DietCalculator.tsx backend-based component (replace with new client-side version)

## Implementation Plan
1. Create new DietCalculatorPage.tsx with 5-step wizard and client-side BMR/TDEE/macro calculations
2. Update App.tsx to add calculator page routing
3. Update Navbar.tsx to add Diet Calculator link
4. Calculations:
   - BMR: Mifflin-St Jeor formula
   - TDEE: BMR × activity multiplier
   - Calories: TDEE adjusted for goal (−500 for fat loss, +300 for muscle gain, same for maintain, slight −200 for recomposition)
   - Protein: 1.6–2.2g per kg depending on goal
   - Carbs: remaining calories after protein and fat (fat = 25% of calories)
   - BMI: weight / (height in meters)²
