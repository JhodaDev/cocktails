import axios from "axios";
import { useContext } from "react";
import CocktailContext from "../context/CocktailContext";

export default function CocktailCard({ cocktail, custom }) {
  const { setCocktails, cocktails } = useContext(CocktailContext);

  const handleSave = async () => {
    const {
      strDrink,
      strCategory,
      strGlass,
      strInstructions,
      strTags,
      strDrinkThumb,
    } = cocktail;

    const { data: response } = await axios.post(
      "/api/cocktail",
      {
        strDrink,
        strCategory,
        strGlass,
        strInstructions,
        strTags,
        strDrinkThumb,
      }
    );

    const { data } = response;
    setCocktails([...cocktails, data]);
  };

  const handleDelete = async () => {
    const { data } = await axios.delete(
      `/api/cocktail/${cocktail._id}`
    );

    if (data.code === 200) {
      const newCocktails = cocktails.filter(
        (gobalCocktail) => gobalCocktail._id !== cocktail._id
      );
      setCocktails(newCocktails);
    }
  };

  return (
    <div>
      <article className="relative break-words ">
        <div className="flex gap-8">
          <header className="relative w-60">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="rounded-md w-full"
            />
            <span className="absolute top-10 bg-[#1F2A48] px-4 py-1 text-sm rounded-r-md">
              {cocktail.strDrink}
            </span>
          </header>

          <div className="max-w-[468px] ">
            <div className="">
              <h3 className="text-lg font-semibold text-[#0079FE]">Tags</h3>
              <p className="text-sm">{cocktail.strTags || "No information"}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-semibold text-[#0079FE]">Glass</h3>
              <p className="text-sm">{cocktail.strGlass || "No information"}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-semibold text-[#0079FE]">Category</h3>
              <p className="text-sm">
                {cocktail.strCategory || "No information"}
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <button
                onClick={custom ? handleDelete : handleSave}
                className={`${
                  custom ? "bg-red-300" : "bg-green-300"
                } text-black px-8 py-1 rounded-md font-semibold`}
              >
                {custom ? "Eliminar" : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      </article>
      <div className="mt-2">
        <div className="mt-2">
          <h3 className="text-xl font-semibold text-[#0079FE]">Instructions</h3>
          <p>{cocktail.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}
