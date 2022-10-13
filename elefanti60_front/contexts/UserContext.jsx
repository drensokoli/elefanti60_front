import { createContext, useState} from "react";

export const UserContext = createContext();

const Context = ({children}) => {
    const [user, setUser] = useState(() =>({
    loggedIn: false,
    }));
    return <UserContextProvider value={user}>{children}</UserContextProvider>;
};

export default Context;