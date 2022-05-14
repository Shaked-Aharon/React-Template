import React, { useContext, useState, createContext } from "react";

export interface IUserProvider{
    user: any;
    setUser: (user: any) => void;
}

export const UserContext = createContext({user: null, setUser: () => {} } as IUserProvider);

export function useUserProvider(){
    return useContext(UserContext)
}

const AuthProvider: React.FC<any> = ({children}) => {
    const [user, setUser] = useState<string>('');

    function setLoggedInUser(user: any){
        setUser(user);
    }

    return (
        <UserContext.Provider value={{user, setUser: setLoggedInUser}}>
            {children}
        </UserContext.Provider>
    );
}
export default AuthProvider;
