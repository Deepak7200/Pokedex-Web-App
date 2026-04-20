import { Routes, Route } from "react-router-dom";
import Pokedex from "../15.components/Pokedex/Pokedex";
import PokemonDetails from "../15.components/PokemonDetails/PokemonDetails";

function CustomRoutes() {
    
    return(
        <Routes>
            <Route path="/" element={<Pokedex/>}></Route>
            <Route path="/pokemon/:id" element={<PokemonDetails/>}></Route>
        </Routes>
    );
}
export default CustomRoutes;