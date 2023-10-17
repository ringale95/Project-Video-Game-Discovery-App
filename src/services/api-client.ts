import axios from 'axios';

export const apiClient = axios.create({
   baseURL: 'https://api.rawg.io/api',
   params:{
   key: '1a8e8b459d014cbcb17354c86e53b6cf' 
   }
});
