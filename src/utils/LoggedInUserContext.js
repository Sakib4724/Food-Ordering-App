import { createContext, useState } from "react";

export const LoggedInUserContext = createContext(null);

LoggedInUserContext.displayName = "LoggedInUserContext";

export const LoggedInUserProvider = (props) => {

    const [data, setData] = useState('');
    const [email, setEmail] = useState('');
    return <LoggedInUserContext.Provider value={{data, setData, email, setEmail}}>{props.children}</LoggedInUserContext.Provider>
};
