import { ListObject } from "../../contexts/context";
import Button from "../Button";
import up from "../../assets/images/up.svg";
import down from "../../assets/images/down.svg";
interface ListItemProps {
    item: ListObject;
    index: number;
    openDetail: (index: number) => void;
    addToWatchList: (index: number) => void;
    removeFromWatchList: (index: number) => void;
    watchedList: boolean;
}
/**
 * ListItem component- a component for every item in the list of cryptoCoins
 * @param props item, index, openDetail, addToWatchList, removeFromWatchList, watchedList
 * @returns a Listitem Component
 */
export const ListItem = (props: ListItemProps) => {
    const { item, index, openDetail, addToWatchList, removeFromWatchList, watchedList } = props;
    return (
        <li key={item.id} className="flex p-1 border m-1 rounded">
            <img
                src={item.image}
                alt={item.name}
                className="border border-black rounded-full w-12 h-12"
            />
            <div className="m-2 mx-6 text-3xl">{item.name.split(" ")[0]}</div>
            <div className="flex flex-col text-left">
                <div>
                    Current Value:
                    <span className="font-bold">{" $" + item.current_price}usd</span>
                </div>
                <div className="flex">
                    Changed in last 24H:
                    <span className="font-bold">{" " + item.price_change_percentage_24h}%</span>
                    <img
                        src={item.price_change_percentage_24h > 0 ? up : down}
                        alt={item.price_change_percentage_24h > 0 ? "Up" : "Down"}
                        className="h-5 w-5"
                    />
                </div>
            </div>
            <Button className="ml-auto" onClick={() => openDetail(index)} label="Show Details" />
            <Button
                onClick={() => (watchedList ? removeFromWatchList(index) : addToWatchList(index))}
                label={`${watchedList ? "Remove from" : "Add to"} Watched list`}
            />
        </li>
    );
};
