import axios from 'axios';

// const endpoint = axios.create({
//     baseURL : "https://hetvikbackapi.azurewebsites.net/api/"
// });

const endpoint = axios.create({
    baseURL : "https://localhost:44301/api/"
});

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.get['Accepts'] = 'application/json'
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'


export default endpoint;