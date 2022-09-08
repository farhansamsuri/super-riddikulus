import axios from 'axios';

const HPAPI = axios.create({baseURL:"https://super-riddikulus-server.herokuapp.com/"});

export default HPAPI;