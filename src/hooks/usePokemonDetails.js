import axios from "axios";
import { useState, useEffect } from "react";
// import usePokemonList from "./usePokemonList";

function usePokemonDetails(id,pokemonName) {
    
    const [pokemon, setPokemon] = useState({});
    async function downloadPokemon() {
        let response;
        if(pokemonName){
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        }
        else{
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }
        const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name:''}`)

        // With this commented method, pehle detail aayegi fir same type pokemon aayega. By other method dono ek sath aayega
        // const pokemonOfSameTypes = axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name:''}`)
        // setPokemon(state => ({
        //     ...state,
        //     name: response.data.name,
        //     image: response.data.sprites.other.dream_world.front_default,
        //     weight: response.data.weight,
        //     height: response.data.height,
        //     types: response.data.types.map((t) => t.type.name)
        // }));
        // pokemonOfSameTypes.then((response) => {
        //     setPokemon(state => ({
        //         ...state,
        //         similarPokemons: response.data.pokemon
        //     }))
        // })
        
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name),
            similarPokemons: pokemonOfSameTypes.data.pokemon
        });
        
        setPokemonListState({...pokemonListState, type: response.data.types ? response.data.types[0].type.name:''})
    }

    // const{pokemonListState, setPokemonListState} = usePokemonList(); // It executes before function so here also it works. It also give 20 req call. So, it is good not to use it.
    const[pokemonListState, setPokemonListState] = useState({}); // this is new pokemonListState not of "usePokemonList"
    
    useEffect(()=>{
        downloadPokemon();
    },[]);
    
    return[pokemon];
}
export default usePokemonDetails;