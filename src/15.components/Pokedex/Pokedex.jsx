import PokemonDetails from "../PokemonDetails/PokemonDetails";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/search";
import './Pokedex.css'
import { useState } from "react";

function Pokedex(){

    const [searchTerm, setSearchterm] = useState('');

    return (
        <div className="pokedex-wrapper">
        <Search updateSearchTerm = {setSearchterm}/>
        {(!searchTerm) ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>} {/* Here, key used for re-randering */}
        
        </div>
    );
}

export default Pokedex;