import axios from "axios";
import config from "../../config";
const API_URL = config["GECKO_API_URL"];
const GECKO_QUERY_KEY_PARAM = config["GECKO_QUERY_PARAM"];
//creating an Axios API instance:
const api = axios.create({
    baseURL: API_URL,
    params: GECKO_QUERY_KEY_PARAM,
});

export default api;
