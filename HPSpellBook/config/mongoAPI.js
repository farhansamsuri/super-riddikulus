import axios from 'axios';

/* const mongoAPI = axios.create({baseURL:"https://super-riddikulus-server.herokuapp.com/"}); */

// export const mongoAPI = axios.create({baseURL:"http://localhost:3008"});

const mongoAPI = axios.create({baseURL:"http://10.0.2.2:3008"});

export default mongoAPI;
