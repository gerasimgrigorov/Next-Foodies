import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function AllMeals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Deliciou meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your farourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share a recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* suspence the rendering of the elements inside and show the fallback message until its done */}
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}> 
          <AllMeals />
        </Suspense>
      </main>
    </>
  );
}
