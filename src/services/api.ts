import axios from "axios";
import { config } from "../util/config";
const API_URL = config["API_URL"];
const QUERY_KEY_PARAM = config["QUERY_PARAM"];
//creating an Axios API instance:
const api = axios.create({
    baseURL: API_URL,
    params: QUERY_KEY_PARAM,
});

export default api;
