import { createContext, useState } from "react";

const ListCocktailContext = createContext();

export const ListCocktailProvider = ({ children }) => {
  const [listCocktails, setListCocktails] = useState([]);

  return (
    <ListCocktailContext.Provider
      value={{
        listCocktails,
        setListCocktails,
      }}
    >
      {children}
    </ListCocktailContext.Provider>
  );
};

export default ListCocktailContext;