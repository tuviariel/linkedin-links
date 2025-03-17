import { useEffect, useState } from "react";
import LinksHeader from "../../components/LinksHeader";
import NewConnections from "../../components/NewConnections";
import PostToComment from "../../components/PostToComment";
import WritePost from "../../components/WritePost";
import ApplyToJobs from "../../components/ApplyToJobs";
import DailyChecklist from "../../components/DailyChecklist";
import Loading from "../../assets/images/loading.gif";
import {} from "../../services/service";
import { userContext } from "../../contexts/context";
// import { dateDisplay } from "../../util/utils";

/**
 * Links SideBar- all the main functionality of Links.
 * @param props none. Gets data by calling the...
 * @returns the main dashboard of Links.
 */

export const LinksSideBar = () => {
    const { userData } = userContext();
    const [loading, setLoading] = useState<boolean>(userData ? true : false);
    useEffect(() => {
        userData && setLoading(false);
    }, [userData]);

    return (
        <div className="flex flex-col px-4 w-full">
            <LinksHeader />
            {loading ? (
                <div className="flex flex-col">
                    <img src={Loading} alt="Loading..." className="mx-auto" />
                    <div className="w-full text-center">Loading...</div>
                </div>
            ) : (
                <>
                    <NewConnections />
                    <WritePost />
                    <PostToComment />
                    <ApplyToJobs />
                    <DailyChecklist />
                </>
            )}
        </div>
    );
};
