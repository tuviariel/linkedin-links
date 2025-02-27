import api from "./api";

export const getCryptosList = async (params: object) => {
    const data = await api.get("/coins/markets", { params: params });
    // console.log(data.data);
    return data;
};

export const getCryptosInfoById = async (params: object, pathParams: string) => {
    const data = await api.get(`/coins/${pathParams}/market_chart`, { params: params });
    // console.log(data.data);
    return data;
};
