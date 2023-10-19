import axios from 'axios';

export const apiClient = axios.create({
   baseURL: 'https://api.rawg.io/api',
   params:{
   key: '783bdeb708fc421b9dbd6e5f2c12a3ba' 
   }
});
