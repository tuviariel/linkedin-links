// import { useCallback, useEffect, useState } from "react";
// import Dialog from "../../components/global/Dialog";
import LinksSideBar from "../LinksSideBar";
import {} from "../../services/service";
// import { useAppContext } from "../../contexts/context";
import {} from "../../contexts/context";

/**
 * Dashboard page- currently the apps main page ('/' route)
 * @param props none. Gets data by calling the ....
 * @returns the main dashboard page with sub components.
 */

export const Dashboard = () => {
    // console.log();
    return (
        <div className="relative flex">
            <div className=""></div>
            <div className="w-96 flex ml-auto text-[#0D141C] text-left bg-[#F7FAFA]">
                <LinksSideBar />
            </div>
        </div>
    );
};
