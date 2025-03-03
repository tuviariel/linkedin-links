import { useEffect, useState } from "react";
import Select from "../../components/Select";
import Loading from "../../assets/images/crypto.jpeg";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getCryptosInfoById } from "../../services/service";
import { useCrypto } from "../../contexts/context";
import { dateDisplay } from "../../util/utils";

/**
 * Crypto Details page- currently used as the modal content from withing the dashboard
 * @param props none. Gets data by calling the CryptoGecko API by currency Id.
 * @returns the crypto details displayed in a graph.
 */

export const CryptoDetail = () => {
    const { modalCurrencyObject } = useCrypto();

    const [currencyData, setCurrencyData] = useState<any[]>([]);
    const [currency, setCurrency] = useState<string>("usd");
    const [days, setDays] = useState<string>("30");
    const [errorMessage, setErrorMessage] = useState<string>("");
    // console.log(modalCurrencyObject);
    useEffect(() => {
        //getting info through API service:
        const getData = async () => {
            try {
                let queryParams = { vs_currency: currency, days: days };
                if (modalCurrencyObject?.id) {
                    const res = await getCryptosInfoById(queryParams, modalCurrencyObject.id);
                    if (!res.data) {
                        throw new Error(`Response status: ${res.status}`);
                    }
                    const currData = res.data.prices.map((arr: any[]) => {
                        return { time: dateDisplay(arr[0]), price: arr[1] };
                    });
                    setCurrencyData(currData);
                }
            } catch (err: any) {
                console.error(err.message);
                setErrorMessage(err.message);
            }
        };
        modalCurrencyObject?.id && getData();
    }, [modalCurrencyObject?.id, days, currency]);

    // console.log(currencyData);
    return (
        <>
            <h3 className="underline">
                Details of <span className="capitalize font-bold">{modalCurrencyObject?.name}</span>
            </h3>
            {currencyData ? (
                <>
                    <div className="flex">
                        <Select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            label="Coin Value in Currency">
                            <>
                                <option value="usd">USD - American Dollar</option>
                                <option value="eur">EUR - European Euro</option>
                                <option value="gbp">GBP - Great Britain Pound</option>
                                <option value="ils">ILS - Israeli New Shekel</option>
                            </>
                        </Select>
                        <Select
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            label="History Length">
                            <>
                                <option value="5">5 Days</option>
                                <option value="10">10 Days</option>
                                <option value="15">15 Days</option>
                                <option value="30">1 Month</option>
                                <option value="60">2 Months</option>
                                <option value="90">3 Months</option>
                                <option value="180">6 Months</option>
                                <option value="270">9 Months</option>
                                <option value="365">1 Year</option>
                            </>
                        </Select>
                    </div>
                    <LineChart
                        width={700}
                        height={300}
                        data={currencyData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#8884d8"
                            activeDot={{ r: 3 }}
                        />
                    </LineChart>
                </>
            ) : errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
                <div className="flex flex-col-reverse">
                    <div>Loading...</div>
                    <img src={Loading} alt="Loading..." className="mx-auto" />
                </div>
            )}
        </>
    );
};
