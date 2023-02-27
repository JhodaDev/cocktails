import { createContext, useEffect, useState } from "react";

const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("/api/cocktail")
      .then((res) => res.json())
      .then((data) => setCocktails(data.cocktails));
  }, []);

  return (
    <CocktailContext.Provider
      value={{
        cocktails,
        setCocktails,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailContext;