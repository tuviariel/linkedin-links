import { useCallback, useEffect, useState } from "react";
import Dialog from "../../components/Dialog";
import Button from "../../components/Button";
import config from "../../../config";
import CryptoDetail from "../CryptoDetail";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

const GECKO_API_URL = config["GECKO_API_URL"];
const GECKO_QUERY_PARAM = config["GECKO_QUERY_PARAM"];

export interface listObject {
    id: string;
    name: string;
    current_price: number;
    image: string;
    price_change_percentage_24h: number;
}

export const CryptoDashboard = () => {
    const [coinList, setCoinList] = useState<listObject[]>([]);
    const [watchedList, setWatchedList] = useState<listObject[]>([]);
    const [modalCurrencyObject, setModalCurrencyObject] = useState<listObject>();
    useEffect(() => {
        const getList = async () => {
            try {
                let queryParams = GECKO_QUERY_PARAM;
                queryParams = queryParams + "&vs_currency=usd";

                const res = await fetch(`${GECKO_API_URL}/coins/markets${queryParams}`);
                if (!res.ok) {
                    throw new Error(`Response status: ${res.status}`);
                }
                const json = await res.json();
                setCoinList(json);
                console.log(json);
            } catch (err: any) {
                console.error(err.message);
            }
        };
        getList();
    }, []);

    const openDetail = useCallback((index: number) => {
        setModalCurrencyObject(coinList[index]);
    }, []);
    const addToWatchList = (index: number) => {
        console.log(index);
        const object = coinList[index];
        setWatchedList((prev) => {
            return [...prev, object];
        });

        setCoinList((prev) => {
            let arr = prev.filter((item) => {
                return item.id !== object.id;
            });
            return arr;
        });
    };
    const removeFromWatchList = (index: number) => {
        console.log(index);
        const object = watchedList[index];
        setCoinList((prev) => {
            return [object, ...prev];
        });

        setWatchedList((prev) => {
            let arr = prev.filter((item) => {
                return item.id !== object.id;
            });
            return arr;
        });
    };
    console.log(watchedList);
    return (
        <>
            <h2 className="font-semibold text-3xl mb-12 underline">CryptoCurrencies from Gecko</h2>
            {watchedList.length > 0 && (
                <>
                    <div className="">Watched List</div>
                    <ol>
                        {watchedList.map((item, index) => {
                            return (
                                <li key={item.id} className="flex p-1 border m-1 rounded">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="border border-black rounded-full w-12 h-12"
                                    />
                                    <div className="m-2 mx-6 text-3xl">
                                        {item.name.split(" ")[0]}
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <div>
                                            Current Value:
                                            <span className="font-bold">
                                                {" $" + item.current_price}usd
                                            </span>
                                        </div>
                                        <div className="flex">
                                            Changed in last 24H:
                                            <span className="font-bold">
                                                {" " + item.price_change_percentage_24h}%
                                            </span>
                                            <img
                                                src={
                                                    item.price_change_percentage_24h > 0 ? up : down
                                                }
                                                alt={
                                                    item.price_change_percentage_24h > 0
                                                        ? "Up"
                                                        : "Down"
                                                }
                                                className="h-5 w-5"
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        className="ml-auto"
                                        onClick={() => openDetail(index)}
                                        label="Show Details"
                                    />
                                    <Button
                                        onClick={() => removeFromWatchList(index)}
                                        label="Remove from Watched list"
                                    />
                                </li>
                            );
                        })}
                    </ol>
                </>
            )}
            {coinList.length > 0 && (
                <>
                    {watchedList.length > 0 && <div className="">Un-Watched List</div>}
                    <ol>
                        {coinList.map((item, index) => {
                            return (
                                <li key={item.id} className="flex p-1 border m-1 rounded">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="border border-black rounded-full w-12 h-12"
                                    />
                                    <div className="m-2 mx-6 text-3xl">
                                        {item.name.split(" ")[0]}
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <div>
                                            Current Value:
                                            <span className="font-bold">
                                                {" $" + item.current_price}usd
                                            </span>
                                        </div>
                                        <div className="flex">
                                            Changed in last 24H:
                                            <span className="font-bold">
                                                {" " + item.price_change_percentage_24h}%
                                            </span>
                                            <img
                                                src={
                                                    item.price_change_percentage_24h > 0 ? up : down
                                                }
                                                alt={
                                                    item.price_change_percentage_24h > 0
                                                        ? "Up"
                                                        : "Down"
                                                }
                                                className="h-5 w-5"
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        className="ml-auto"
                                        onClick={() => openDetail(index)}
                                        label="Show Details"
                                    />
                                    <Button
                                        onClick={() => addToWatchList(index)}
                                        label="Add to Watched list"
                                    />
                                </li>
                            );
                        })}
                    </ol>
                </>
            )}
            <Dialog
                open={modalCurrencyObject?.id ? true : false}
                setOpen={setModalCurrencyObject}
                size="large"
                data="cryptoDetail"
                disableOverlayClose={true}>
                <CryptoDetail currencyObject={modalCurrencyObject} />
            </Dialog>
        </>
    );
};
