import { AxiosResponse } from "axios";
import axiosInstance from "../config/axiosConfig";

class HackerNewsService {
    async fetchHtml(): Promise<AxiosResponse<string>> {
        try {
            return await axiosInstance.get("/");
        } catch (error) {
            throw new Error(`Failed to get: ${error}`);
        }
    }
}

export default HackerNewsService;
