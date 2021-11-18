import axios from 'axios';

const config = {
    baseURL: 'http://localhost:5000',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
};

export default axios.create(config);
