import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

class ApiService {
    constructor() {
        this.accessToken = '';
        this.instance = axios.create({
            baseURL: API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Attach an interceptor to include the authorization header automatically
        this.instance.interceptors.request.use((config) => {
            if (this.accessToken) {
                config.headers.Authorization = `Bearer ${this.accessToken}`;
            }
            return config;
        });
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

    async put(url, data, config = {}) {
        return this.instance.put(url, data, config);
    }

    async delete(url, config = {}) {
        return this.instance.delete(url, config);
    }
};
const apiService = new ApiService();

export default apiService;