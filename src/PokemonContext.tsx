import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export interface PokemonInterface {
    name: string,
    type: string,
    sprite: string
}

interface pokemonContextInterface {
    pokemon: PokemonInterface
    setPokemon: Dispatch<SetStateAction<PokemonInterface>>
}

const defaultState: pokemonContextInterface = {
    pokemon: {name: "", type: "", sprite: ""},
    setPokemon:() => null
} as pokemonContextInterface

export const PokemonContext = createContext<pokemonContextInterface>(defaultState)

type ProviderProps = {
    children:ReactNode
}

export function PokemonContextProvider({children}:ProviderProps){
    const [pokemon, setPokemon]=useState<PokemonInterface>({name: "", type: "", sprite: ""});
    return(
        <PokemonContext.Provider value={{pokemon, setPokemon}}>
            {children}
        </PokemonContext.Provider>

    )
}



