import { useEffect } from "react";
import NewConnection from "./NewConnection";
/**
 * NewConnections component:
 * @param props none
 * @returns the checkbox list bar.
 */
export const NewConnections = () => {
    useEffect(() => {
        const getNewConnections = () => {
            try {
            } catch (err) {}
        };
        getNewConnections();
    }, []);
    const connect = (id: string) => {
        console.log(id);
    };
    return (
        <div className="flex-col">
            <h3 className="font-bold">Explore new Connections</h3>
            <NewConnection
                onClick={connect}
                data={{
                    image: "rthr",
                    name: "Tina Zhang",
                    title: "Product manager at Google",
                    id: "sefvsekvjr34",
                }}
            />
            <NewConnection
                onClick={connect}
                data={{
                    image: "rthr",
                    name: "Karthik Srinivasan",
                    title: "Software Engineer at Amazon",
                    id: "rgevbkrg4u4v4",
                }}
            />
        </div>
    );
};
