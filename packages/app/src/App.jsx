import { Form } from "./components/Form";
import { ListMyCocktails } from "./components/ListMyCocktails";
import { MyCocktails } from "./components/MyCocktails";
import { CocktailProvider } from "./context/CocktailContext";
import  { ListCocktailProvider } from "./context/ListCocktailContext";

function App() {
  return (
    <CocktailProvider>
      <div className="w-full h-screen overflow-auto bg-[#141C2F] flex text-white p-10">
        <div className="w-full h-full grid grid-cols-2 gap-x-20">
          <div>
            <ListCocktailProvider>
              <Form />
              <ListMyCocktails />
            </ListCocktailProvider>
          </div>
          <MyCocktails />
        </div>
      </div>
    </CocktailProvider>
  );
}

export default App;
