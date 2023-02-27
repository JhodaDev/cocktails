import { useContext } from "react";
import CocktailContext from "../context/CocktailContext";
import CocktailCard from "./CocktailCard";

export const MyCocktails = () => {
  const { cocktails } = useContext(CocktailContext);

  return (
    <div>
      <h3 className="text-2xl pt-4 mb-14">My Cocktails</h3>
      <div className="flex flex-col gap-10">
        {cocktails?.map((cocktail) => (
          <CocktailCard key={cocktail._id} cocktail={cocktail} custom />
        ))}
      </div>
    </div>
  );
};
