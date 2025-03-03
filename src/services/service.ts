import api from "./api";
//The cryptoGecko API service:

/**
 * The main list of basic info of crypto coins
 * @param props currency to generate the data (currently permanently "usd")
 * @returns the response data
 */
export const getCryptosList = async (params: object) => {
    const data = await api.get("/coins/markets", { params: params });
    // console.log(data.data);
    return data;
};

/**
 * The history data of the crypto coins
 * @param props pathParams - the coin ID requested. queryParams - the history range. Made to change upon user change selection.
 * @returns the response data
 */
export const getCryptosInfoById = async (params: object, pathParams: string) => {
    const data = await api.get(`/coins/${pathParams}/market_chart`, { params: params });
    // console.log(data.data);
    return data;
};
