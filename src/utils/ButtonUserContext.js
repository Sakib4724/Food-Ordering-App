import { createContext, useState } from "react";

export const ButtonContext = createContext(null);

ButtonContext.displayName = "ButtonContext";

export const ButtonContextProvider = (props) => {

    const [data, setData] = useState('Login');
    return <ButtonContext.Provider value={{data, setData}}>{props.children}</ButtonContext.Provider>
};
