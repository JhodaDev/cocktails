import React, { useContext } from "react";
import ListCocktailContext from "../context/ListCocktailContext";
import CocktailCard from "./CocktailCard";

export const ListMyCocktails = () => {
  const { listCocktails } = useContext(ListCocktailContext);

  return (
    <div className="flex flex-col gap-10 flex-1 mt-10">
      {listCocktails?.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
};
