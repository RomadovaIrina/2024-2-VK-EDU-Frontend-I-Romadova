import axios from "axios";
import { getAccessToken } from "./tokens/tokenManager";
import { refreshToken } from "./auth/auth";

const API_URL = import.meta.env.VITE_API_URL;

class ApiService {
    constructor() {
        this.accessToken = getAccessToken();
        this.instance = axios.create({
            baseURL: API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // Нашла где то на просторах интернета я не на 100 процентов пока разобралась что к чему
        this.instance.interceptors.request.use((config) => {
            if (this.accessToken) {
                config.headers.Authorization = `Bearer ${this.accessToken}`;
            }
            return config;
        });


        this.instance.interceptors.response.use(
            (response) => response, 
            async (error) => {
                if (error.response?.status === 401) {
                    const newAccessToken = await refreshToken(); 
                    if (newAccessToken) {
                        this.setAccessToken(newAccessToken); 
                        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
                        return this.instance.request(error.config); 
                    }
                }
                return Promise.reject(error); 
            }
        );
    }

    setAccessToken(token) {
        this.accessToken = token;
    }
    

    async get(url, config = {}) {
        return this.instance.get(url, config);
    }

    async post(url, data, config = {}) {
        return this.instance.post(url, data, config);
    }
    async patch(url, data, config = {}) {
        if (data instanceof FormData) {
            config.headers = {
                ...config.headers,
                'Content-Type': 'multipart/form-data',
            };
        }
        return this.instance.patch(url, data, config);
    }

    async put(url, data, config = {}) {
        return this.instance.put(url, data, config);
    }

    async delete(url, config = {}) {
        return this.instance.delete(url, config);
    }
};
const apiService = new ApiService();

export default apiService;