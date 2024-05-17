"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    instructions: formData.get("instructions"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.'
    }
  }

  await saveMeal(meal);
  revalidatePath("/meals", 'layout') //all nested pages will be revaluated as well
  redirect("/meals");
}
