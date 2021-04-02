import axios from 'axios';

const endpoint = axios.create({
    baseURL : "https://hetvikbackapi.azurewebsites.net/api/"
});

export default endpoint;