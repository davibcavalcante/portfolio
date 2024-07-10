import axios from 'axios';

export const apiFetch = axios.create({
    baseURL: import.meta.env.VITE_IP_API_CONFIG,
    headers: {
        "Content-Type": "application/json"
    }
})