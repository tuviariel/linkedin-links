import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { CryptoProvider } from "./contexts/context";
function App() {
    return (
        <CryptoProvider>
            <AppRoutes />
        </CryptoProvider>
    );
}

export default App;
