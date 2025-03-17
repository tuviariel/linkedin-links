// import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Dashboard from "../pages/LinksDashboard";
import { route_paths } from "../util/config";
const DASHBOARD = route_paths["DASHBOARD"];
// const DETAIL = route_paths['DETAIL'];
// const Detail = React.lazy(() => import("../pages/...."));
// import Add from "./pages/....";
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
                <Route path={DASHBOARD} element={<Dashboard />} />
            </Routes>
            {/* </Suspense> */}
        </Router>
    );
}
