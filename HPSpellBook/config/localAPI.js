import axios from 'axios';

 const localAPI = axios.create({baseURL:"http://10.0.2.2:3008"});

export default localAPI;