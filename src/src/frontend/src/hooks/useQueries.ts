import { useQuery } from "@tanstack/react-query";
import type {
  ActivityLevel,
  DietType,
  EnrichedDietCalculation,
  Gender,
  Goal,
  Testimonial,
} from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export async function calculateDiet(
  actor: any,
  gender: Gender,
  age: bigint,
  weightKg: number,
  heightCm: number,
  activityLevel: ActivityLevel,
  dietType: DietType,
  goal: Goal,
): Promise<EnrichedDietCalculation> {
  return actor.calculateDiet(
    gender,
    age,
    weightKg,
    heightCm,
    activityLevel,
    dietType,
    goal,
  );
}

export async function addContactLead(
  actor: any,
  name: string,
  phone: string,
  area: string,
  planInterest: string,
): Promise<void> {
  return actor.addContactLead(name, phone, area, planInterest);
}
