import React, {createContext, ReactNode, useContext} from "react";

type User = {
    id:number,name:string,
} | null


type AppContextType = {
    user: User,
    setUser: (user: User) => void,
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children:ReactNode}> = ({children}) => {
    const [user, setUser] = React.useState<User>(null);
    return(
        <AppContext.Provider value={{user,setUser}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = React.useContext(AppContext);
    if(context === undefined){
        throw new Error("useAppContext must be used as useAppContext");
    }
    return context;
}