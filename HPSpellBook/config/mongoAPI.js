import axios from 'axios';

const mongoAPI = axios.create({baseURL:"https://super-riddikulus-server.herokuapp.com/"});

export const localAPI = axios.create({baseURL:"https://localhost:3008"});

export default mongoAPI;
