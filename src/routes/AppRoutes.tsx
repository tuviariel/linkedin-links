import { BrowserRouter as Router, Routes, Route } from "react-router";
import CryptoDashboard from "../pages/CryptoDashboard";
// import CryptoDetail from "./pages/CryptoDetail";
// import AddCrypto from "./pages/AddCrypto";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/add" element={<AddCrypto />} /> */}
                {/* <Route path="/detail" element={<CryptoDetail />} /> */}
                <Route path="/" element={<CryptoDashboard />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
