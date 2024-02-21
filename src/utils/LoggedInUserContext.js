import { createContext, useState } from "react";

export const LoggedInUserContext = createContext(null);

LoggedInUserContext.displayName = "LoggedInUserContext";

export const LoggedInUserProvider = (props) => {

    const [data, setData] = useState('');
    return <LoggedInUserContext.Provider value={{data, setData}}>{props.children}</LoggedInUserContext.Provider>
};
