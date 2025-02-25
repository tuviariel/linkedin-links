import { useEffect, memo, useState } from "react";
import config from "../../../config";
import Select from "../../components/Select";
import { listObject } from "../CryptoDashboard/CryptoDashboard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
const GECKO_API_URL = config["GECKO_API_URL"];
const GECKO_QUERY_PARAM = config["GECKO_QUERY_PARAM"];

interface CryptoDetailProps {
    currencyObject: listObject | undefined;
}

export const CryptoDetail: React.FC<CryptoDetailProps> = (props) => {
    const { currencyObject } = props;
    const [currencyData, setCurrencyData] = useState<any[]>([]);
    const [currency, setCurrency] = useState<string>("usd");
    const [days, setDays] = useState<string>("30");
    console.log(currencyObject);
    useEffect(() => {
        const getData = async () => {
            try {
                let queryParams = GECKO_QUERY_PARAM;
                queryParams = queryParams + `&vs_currency=${currency}&days=${days}`;
                const res = await fetch(
                    `${GECKO_API_URL}/coins/${currencyObject?.id}/market_chart${queryParams}`
                );
                if (!res.ok) {
                    throw new Error(`Response status: ${res.status}`);
                }
                const json = await res.json();
                const data = json.prices.map((arr: any[]) => {
                    const date = new Date(arr[0]);
                    return { time: date.toLocaleDateString("he-IL"), price: arr[1] };
                });
                setCurrencyData(data);
                console.log(data);
            } catch (err: any) {
                console.error(err.message);
            }
        };
        currencyObject?.id && getData();
    }, [currencyObject?.id, days, currency]);

    console.log(currencyData);
    return (
        <>
            <h3 className="underline">
                Details of <span className="capitalize font-bold">{currencyObject?.name}</span>
            </h3>
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
                width={500}
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
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 3 }} />
            </LineChart>
        </>
    );
};
// export default memo(CryptoDetail);
