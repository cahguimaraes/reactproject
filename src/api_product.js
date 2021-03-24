import axios from 'axios';

const api_product = axios.create({
    baseURL: 'http://localhost:8080/product',
    timeout: 1000
});

export default api_product;