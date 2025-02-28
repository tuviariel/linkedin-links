import { createContext, ReactNode, useContext, useState } from "react";

export interface ListObject {
    id: string;
    name: string;
    current_price: number;
    image: string;
    price_change_percentage_24h: number;
}
interface CryptoContextType {
    modalCurrencyObject: ListObject | undefined;
    setModalCurrencyObject: React.Dispatch<React.SetStateAction<ListObject | undefined>>;
}
// Create the context with a default value
const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

interface CryptoProviderprops {
    children: ReactNode;
}
const CryptoProvider: React.FC<CryptoProviderprops> = ({ children }) => {
    const [modalCurrencyObject, setModalCurrencyObject] = useState<ListObject | undefined>();
    console.log(modalCurrencyObject);
    return (
        <CryptoContext.Provider value={{ modalCurrencyObject, setModalCurrencyObject }}>
            {children}
        </CryptoContext.Provider>
    );
};

const useCrypto = (): CryptoContextType => {
    const context = useContext(CryptoContext);
    if (context === undefined) {
        throw new Error("useCrypto must be used within a CryptoProvider");
    }
    return context;
};

export { useCrypto, CryptoProvider };
