import axios from 'axios';

const api_sku = axios.create({
    baseURL: 'http://localhost:8080/sku',
    timeout: 1000
});

export default api_sku;