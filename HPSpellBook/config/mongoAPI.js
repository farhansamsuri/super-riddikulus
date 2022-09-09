import axios from 'axios';

const mongoAPI = axios.create({baseURL:"https://super-riddikulus-server.herokuapp.com/"});

export default mongoAPI;
 