import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactLead {
    id: bigint;
    area: string;
    name: string;
    planInterest: string;
    phone: string;
}
export interface Recipe {
    id: bigint;
    fat: number;
    imagePath: string;
    carbs: number;
    calories: number;
    name: string;
    description: string;
    category: string;
    protein: number;
}
export interface EnrichedDietCalculation {
    id: bigint;
    age: bigint;
    activityLevel: ActivityLevel;
    heightCm: number;
    calories: number;
    goal: Goal;
    weightKg: number;
    gender: Gender;
    dietType: DietType;
    protein: number;
}
export interface Testimonial {
    id: bigint;
    resultDescription: string;
    name: string;
    reviewText: string;
    rating: bigint;
}
export enum ActivityLevel {
    active = "active",
    veryActive = "veryActive",
    light = "light",
    sedentary = "sedentary",
    moderate = "moderate"
}
export enum DietType {
    veg = "veg",
    nonVeg = "nonVeg"
}
export enum Gender {
    female = "female",
    male = "male"
}
export enum Goal {
    fatLoss = "fatLoss",
    muscleGain = "muscleGain"
}
export interface backendInterface {
    addContactLead(name: string, phone: string, area: string, planInterest: string): Promise<void>;
    addRecipe(name: string, category: string, protein: number, carbs: number, fat: number, calories: number, description: string, imagePath: string): Promise<void>;
    addTestimonial(name: string, rating: bigint, reviewText: string, resultDescription: string): Promise<void>;
    calculateDiet(gender: Gender, age: bigint, weightKg: number, heightCm: number, activityLevel: ActivityLevel, dietType: DietType, goal: Goal): Promise<EnrichedDietCalculation>;
    getAllContactLeads(): Promise<Array<ContactLead>>;
    getAllRecipes(): Promise<Array<Recipe>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
}
