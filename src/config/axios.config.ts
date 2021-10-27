import axios from 'axios';

export const loadProxyUrl = (): string | undefined => {
    if (window.location.host.includes('localhost')) {
        return 'http://localhost:3000';
    }
};

const AxiosConfig = axios.create({
    baseURL: `${loadProxyUrl()}/`,
    headers: {
        'Content-Type': 'application/json',
    },
    proxy: {
        host: `${loadProxyUrl()}`,
        port: 5000,
    },
});

export default AxiosConfig;
