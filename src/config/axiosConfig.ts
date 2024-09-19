import axios from "axios";
import envs from "./envConfig";

const axiosInstance = axios.create({
    baseURL: envs.httpBaseUrl,
    timeout: envs.httpTimeout,
});

export default axiosInstance;
