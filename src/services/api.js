import axios from 'axios';


export const key = '07d88bd3b82e696b206fff6cc3bf5f98f4659d7d';

//https://testapi.io/api/heydies/characters

const api = axios.create({
  baseURL: 'https://testapi.io/',
});

export default api;
