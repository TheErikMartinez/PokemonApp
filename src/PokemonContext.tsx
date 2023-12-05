import {Dispatch, ReactNode, SetStateAction, createContext, useState} from 'react';

interface PokemonInterface {
    name: string,
    setName: Dispatch<SetStateAction<string>>,
    type: string,
    setType: Dispatch<SetStateAction<string>>, 
    sprite: string,
    setSprite: Dispatch<SetStateAction<string>>,
}

const defaultState = {
    name: '',
    type: '',
    sprite: ''
} as PokemonInterface

export const PokemonContext = createContext(defaultState);

type ProviderProps = {
    children: ReactNode
}

export const PokemonContextProvider = ({children}: ProviderProps) => {
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [sprite, setSprite] = useState<string>('');

    return(
        <PokemonContext.Provider value={{name, setName, type, setType, sprite, setSprite}}>
            {children}
        </PokemonContext.Provider>
    )
}