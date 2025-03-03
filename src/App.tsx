import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundaryFallback from "./components/ErrorBoundaryFallback";
import { CryptoProvider } from "./contexts/context";
function App() {
    return (
        <ErrorBoundaryFallback>
            <CryptoProvider>
                <AppRoutes />
            </CryptoProvider>
        </ErrorBoundaryFallback>
    );
}

export default App;
