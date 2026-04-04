import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Float "mo:core/Float";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type Gender = { #male; #female };
  type ActivityLevel = { #sedentary; #light; #moderate; #active; #veryActive };
  type Goal = { #fatLoss; #muscleGain };
  type DietType = { #veg; #nonVeg };

  type EnrichedDietCalculation = {
    id : Nat;
    calories : Float;
    protein : Float;
    weightKg : Float;
    heightCm : Float;
    age : Nat;
    gender : Gender;
    activityLevel : ActivityLevel;
    goal : Goal;
    dietType : DietType;
  };

  let dietCalcStore = Map.empty<Nat, EnrichedDietCalculation>();
  var nextDietCalcId = 0;

  module EnrichedDietCalculation {
    public func compare(d1 : EnrichedDietCalculation, d2 : EnrichedDietCalculation) : Order.Order {
      Nat.compare(d1.id, d2.id);
    };
  };

  public shared ({ caller }) func calculateDiet(
    gender : Gender,
    age : Nat,
    weightKg : Float,
    heightCm : Float,
    activityLevel : ActivityLevel,
    dietType : DietType,
    goal : Goal,
  ) : async EnrichedDietCalculation {
    let bmr = switch (gender) {
      case (#male) { 88.36 + (13.4 * weightKg) + (5 * heightCm) - (5.7 * age.toFloat()) };
      case (#female) { 447.6 + (9.2 * weightKg) + (3.1 * heightCm) - (4.3 * age.toFloat()) };
    };

    let activityMultiplier = switch (activityLevel) {
      case (#sedentary) { 1.2 };
      case (#light) { 1.375 };
      case (#moderate) { 1.55 };
      case (#active) { 1.725 };
      case (#veryActive) { 1.9 };
    };

    let tdee = bmr * activityMultiplier;
    let (calories, protein) = switch (goal) {
      case (#fatLoss) { (tdee * 0.8, weightKg * 1.8) };
      case (#muscleGain) { (tdee * 1.1, weightKg * 2.2) };
    };

    let enrichedCalculation : EnrichedDietCalculation = {
      id = nextDietCalcId;
      calories;
      protein;
      weightKg;
      heightCm;
      age;
      gender;
      activityLevel;
      goal;
      dietType;
    };

    dietCalcStore.add(nextDietCalcId, enrichedCalculation);
    nextDietCalcId += 1;

    enrichedCalculation;
  };

  type Recipe = {
    id : Nat;
    name : Text;
    category : Text;
    protein : Float;
    carbs : Float;
    fat : Float;
    calories : Float;
    description : Text;
    imagePath : Text;
  };

  let recipeStore = Map.empty<Nat, Recipe>();
  var nextRecipeId = 0;

  module Recipe {
    public func compare(r1 : Recipe, r2 : Recipe) : Order.Order {
      Nat.compare(r1.id, r2.id);
    };
  };

  public shared ({ caller }) func addRecipe(
    name : Text,
    category : Text,
    protein : Float,
    carbs : Float,
    fat : Float,
    calories : Float,
    description : Text,
    imagePath : Text,
  ) : async () {
    let recipe : Recipe = {
      id = nextRecipeId;
      name;
      category;
      protein;
      carbs;
      fat;
      calories;
      description;
      imagePath;
    };
    recipeStore.add(nextRecipeId, recipe);
    nextRecipeId += 1;
  };

  public query ({ caller }) func getAllRecipes() : async [Recipe] {
    recipeStore.values().toArray().sort();
  };

  type ContactLead = {
    id : Nat;
    name : Text;
    phone : Text;
    area : Text;
    planInterest : Text;
  };

  let contactLeadStore = Map.empty<Nat, ContactLead>();
  var nextContactLeadId = 0;

  module ContactLead {
    public func compare(l1 : ContactLead, l2 : ContactLead) : Order.Order {
      Nat.compare(l1.id, l2.id);
    };
  };

  public shared ({ caller }) func addContactLead(
    name : Text,
    phone : Text,
    area : Text,
    planInterest : Text,
  ) : async () {
    let lead : ContactLead = {
      id = nextContactLeadId;
      name;
      phone;
      area;
      planInterest;
    };
    contactLeadStore.add(nextContactLeadId, lead);
    nextContactLeadId += 1;
  };

  public query ({ caller }) func getAllContactLeads() : async [ContactLead] {
    contactLeadStore.values().toArray().sort();
  };

  type Testimonial = {
    id : Nat;
    name : Text;
    rating : Nat;
    reviewText : Text;
    resultDescription : Text;
  };

  let testimonialStore = Map.empty<Nat, Testimonial>();
  var nextTestimonialId = 0;

  module Testimonial {
    public func compare(t1 : Testimonial, t2 : Testimonial) : Order.Order {
      Nat.compare(t1.id, t2.id);
    };
  };

  public shared ({ caller }) func addTestimonial(
    name : Text,
    rating : Nat,
    reviewText : Text,
    resultDescription : Text,
  ) : async () {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };
    let testimonial : Testimonial = {
      id = nextTestimonialId;
      name;
      rating;
      reviewText;
      resultDescription;
    };
    testimonialStore.add(nextTestimonialId, testimonial);
    nextTestimonialId += 1;
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonialStore.values().toArray().sort();
  };
};
