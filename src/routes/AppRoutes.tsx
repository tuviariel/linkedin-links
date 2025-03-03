// import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import CryptoDashboard from "../pages/CryptoDashboard";
import { route_paths } from "../util/config";
const DASHBOARD = route_paths["DASHBOARD"];
// const DETAIL = route_paths['DETAIL'];
// const CryptoDetail = React.lazy(() => import("../pages/CryptoDetail"));
// import AddCrypto from "./pages/AddCrypto";
/**
 * the app's router center- currently only one main route ('/')
 * @param props none. has an option of adding the react.lazy fallback with Suspense
 * @returns app's routes map
 */

export default function AppRoutes() {
    return (
        <Router>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Routes>
                {/* <Route path="/add" element={<AddCrypto />} /> - route not in use- it's prev functionality concluded with-in one button */}
                {/* <Route path={DETAIL} element={<CryptoDetail />} /> - route not in use- changed to being a modal */}
                <Route path={DASHBOARD} element={<CryptoDashboard />} />
            </Routes>
            {/* </Suspense> */}
        </Router>
    );
}
