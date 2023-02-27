import React, { useContext, useRef, useState } from "react";
import ListCocktailContext from "../context/ListCocktailContext";

export const Form = () => {
  const { setListCocktails } = useContext(ListCocktailContext);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/cocktail/${value}`);
    const data = await response.json();
    const { drinks } = data;

    setListCocktails(drinks);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-[#1F2A48] rounded-lg flex px-6 py-3"
    >
      <input
        ref={inputRef}
        type="text"
        className="pr-6 rounded-md w-full bg-transparent focus:outline-none"
        placeholder="Insert the name of the liquor"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <input
        type="submit"
        placeholder="Search"
        className="bg-[#0079FE] px-4 py-2 rounded-lg cursor-pointer"
      />
    </form>
  );
};
