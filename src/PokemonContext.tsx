import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export interface PokemonInterface {
    name: string | undefined,
    type: string | undefined,
    sprite: string | undefined
}

interface pokemonContextInterface {
    pokemon: PokemonInterface
    setPokemon: Dispatch<SetStateAction<PokemonInterface>>
    favePokemons: PokemonInterface[]
    setFavePokemons: Dispatch<SetStateAction<PokemonInterface[]>>
}

const defaultState: pokemonContextInterface = {
    pokemon: {name: " ", type: " ", sprite: " "},
    setPokemon:() => null,
    favePokemons: [],
    setFavePokemons:() => null
} as pokemonContextInterface

export const PokemonContext = createContext<pokemonContextInterface>(defaultState)

type ProviderProps = {
    children:ReactNode
}

export function PokemonContextProvider({children}:ProviderProps){
    const [pokemon, setPokemon]=useState<PokemonInterface>({name: " ", type: " ", sprite: " "});
    const [favePokemons, setFavePokemons]=useState<PokemonInterface[]>([]);
    return(
        <PokemonContext.Provider value={{pokemon, setPokemon, favePokemons, setFavePokemons}}>
            {children}
        </PokemonContext.Provider>

    )
}



