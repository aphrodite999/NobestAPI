import { createContext, useState, useContext, ReactNode } from 'react';

const Context = createContext();

export const GlobalContext = (props) => {
    const [authenticated, setAuthenticated] = useState(false);
    return <Context.Provider value={{ authenticated, setAuthenticated }}>{props.children}</Context.Provider>;
};

export const useGlobalContext = () => {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalContext');
    }
    return context;
};
