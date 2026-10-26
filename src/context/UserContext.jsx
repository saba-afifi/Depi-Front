import { createContext } from "react";

export const UserContext = createContext(null);

export function UserProvider ({children}){
    const user={
        name:"seba",
        age: 25,
        email:"sebaafifi@gmail.com"
    };


return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
);

};