import {Dispatch, ReactNode, SetStateAction, createContext, useState} from 'react';

interface WindowInterface {
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
} as WindowInterface

export const WindowContext = createContext(defaultState);

type ProviderProps = {
    children: ReactNode
}

export const WindowContextProvider = ({children}: ProviderProps) => {
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [sprite, setSprite] = useState<string>('');

    return(
        <WindowContext.Provider value={{name, setName, type, setType, sprite, setSprite}}>
            {children}
        </WindowContext.Provider>
    )
}