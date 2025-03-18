import { createContext, ReactNode, useContext, useState } from "react";
//the ListObject interface used also in other components:
export interface userData {
    id: string;
    name: string;
    position: number;
    image: string;
    age: number;
}

interface ContextType {
    userData: userData | undefined;
    setUserData: React.Dispatch<React.SetStateAction<userData | undefined>>;
}
// Create the context with a default value:
const AppContext = createContext<ContextType | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}
// The ContextProvider wrapped around the app:
const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<userData | undefined>();
    console.log(userData);
    return <AppContext.Provider value={{ userData, setUserData }}>{children}</AppContext.Provider>;
};
// The context to be used in other pages / components:
const userContext = (): ContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("userContext must be used within a ContextProvider");
    }
    return context;
};
// exporting external usage:
export { userContext, ContextProvider };
