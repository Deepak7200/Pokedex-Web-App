// custom hook

import { useEffect, useState } from "react";
import axios from 'axios';

function usePokemonList() {

    // const [pokemonList, setPokemonList] = useState([]); // (Multiple useStates: not an efficient way )
    // const [isLoading, setIsLoading] = useState(true);
    // const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    // const [nextUrl, setNextUrl] = useState('');
    // const [prevUrl, setPrevUrl] = useState('');

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
        nextUrl: '',
        prevUrl: ''
    });
    
    async function downloadPokemons(){
        // setIsLoading(true);
        setPokemonListState((prev) => ({...prev, isLoading: true}))
        // const response = await axios.get(pokedexUrl); // this downloads list of 20 pokemons
        const response = await axios.get(pokemonListState.pokedexUrl);
        const pokemonResults = response.data.results; // we get the array of pokemons from result

        console.log(response.data);
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);
        // setPokemonListState({...pokemonListState, nextUrl:response.data.next, prevUrl:response.data.previous}) // not recommended: multiple set state concept 
        setPokemonListState((prev) => ({...prev, nextUrl:response.data.next, prevUrl:response.data.previous}))

        // iterating over the array of pokemons, and using their url to create an array of promises
        // that will download those 20 pokemons
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        // passing that promises array to axios.all (return when all downloaded)
        const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data
        console.log(pokemonData);

        // now iterate the data to each pokemon and extract id, name, image, types
        
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return{
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types
            }
        });

    

        console.log(res);
        // setPokemonList(res);
        // setIsLoading(false);
        setPokemonListState((prev) => ({...prev, pokemonList: res, isLoading: false}));
    }

    useEffect(() => {
        downloadPokemons();
    }, [pokemonListState.pokedexUrl]);
    
    return(
        {pokemonListState,setPokemonListState}
        // can send in form of array also, i.e, [pokemonListState,setPokemonListState]. But need to accept in form of array in PokemonList.jsx
    );
}
export default usePokemonList;