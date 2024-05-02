import * as Yup from "yup";

import { supabase } from "@/lib/supabase";
import { Tables } from "@/types";
import { addFoodNutritionValidationSchema } from "@/utils/validationSchemas";

export const addFoodNutrition = async (
  userId: string,
  brand: string,
  foodName: string,
  selectedDate: string,
  measurementUnit: string,
  servingSize: number,
  calories: number,
  fat: number,
  saturatedFat: number,
  polyunsaturatedFat: number,
  monounsaturatedFat: number,
  transFat: number,
  cholesterol: number,
  sodium: number,
  potassium: number,
  carbohydrates: number,
  fiber: number,
  sugar: number,
  addedSugars: number,
  sugarAlcohols: number,
  protein: number,
  vitaminA: number,
  vitaminC: number,
  vitaminD: number,
  calcium: number,
  iron: number,
) => {
  try {
    await addFoodNutritionValidationSchema.validate({ foodName, servingSize, measurementUnit, calories });
    const { error } = await supabase.from("nutrition").insert({
      brand,
      food_name: foodName,
      date_added: selectedDate,
      measurement_unit: measurementUnit,
      serving_size: servingSize,
      calories,
      fat,
      saturated_fat: saturatedFat,
      polyunsaturated_fat: polyunsaturatedFat,
      monounsaturated_fat: monounsaturatedFat,
      trans_fat: transFat,
      cholesterol,
      sodium,
      potassium,
      carbohydrates,
      fiber,
      sugar,
      added_sugars: addedSugars,
      sugar_alcohols: sugarAlcohols,
      protein,
      vitamin_a: vitaminA,
      vitamin_c: vitaminC,
      vitamin_d: vitaminD,
      calcium,
      iron,
      user_id: userId,
      consumed_at: selectedDate,
    });

    if (error) {
      console.error("Error adding food nutrition:", error);
      return null;
    }

    return true;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      console.error("Validation error adding food nutrition:", error);
    } else {
      console.error("Error adding food nutrition:", error);
    }
    return null;
  }
};

export const fetchFoodNutrition = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from("nutrition")
      .select("*")
      .eq("user_id", userId)
      .order("date_added", { ascending: false });

    if (error) {
      console.error("Error fetching food nutrition:", error);
      return [];
    }

    return data as Tables<"nutrition">[];
  } catch (error) {
    console.error("Error fetching food nutrition:", error);
    return [];
  }
};

export const deleteFoodNutrition = async (foodId: number) => {
  try {
    const { error } = await supabase
      .from("nutrition")
      .delete()
      .eq("id", foodId);

    if (error) {
      console.error("Error deleting food nutrition:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error deleting food nutrition:", error);
    return false;
  }
};

export const updateFoodNutrition = async (
  foodId: number,
  userId: string,
  brand: string,
  foodName: string,
  selectedDate: string,
  measurementUnit: string,
  servingSize: number,
  calories: number,
  fat: number,
  saturatedFat: number,
  polyunsaturatedFat: number,
  monounsaturatedFat: number,
  transFat: number,
  cholesterol: number,
  sodium: number,
  potassium: number,
  carbohydrates: number,
  fiber: number,
  sugar: number,
  addedSugars: number,
  sugarAlcohols: number,
  protein: number,
  vitaminA: number,
  vitaminC: number,
  vitaminD: number,
  calcium: number,
  iron: number,
) => {
  try {
    await addFoodNutritionValidationSchema.validate({ foodName, servingSize, measurementUnit, calories });

    const { error } = await supabase
      .from("nutrition")
      .update({
        brand,
        food_name: foodName,
        date_added: selectedDate,
        measurement_unit: measurementUnit,
        serving_size: servingSize,
        calories,
        fat,
        saturated_fat: saturatedFat,
        polyunsaturated_fat: polyunsaturatedFat,
        monounsaturated_fat: monounsaturatedFat,
        trans_fat: transFat,
        cholesterol,
        sodium,
        potassium,
        carbohydrates,
        fiber,
        sugar,
        added_sugars: addedSugars,
        sugar_alcohols: sugarAlcohols,
        protein,
        vitamin_a: vitaminA,
        vitamin_c: vitaminC,
        vitamin_d: vitaminD,
        calcium,
        iron,
        user_id: userId,
        consumed_at: selectedDate,
      })
      .eq("id", foodId);

    if (error) {
      console.error("Error updating food nutrition:", error);
      return false;
    }

    return true;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      console.error("Validation error updating food nutrition:", error);
    } else {
      console.error("Error updating food nutrition:", error);
    }
    return false;
  }
};
