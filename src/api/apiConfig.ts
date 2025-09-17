import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mg.9C8hKloWC27qBK88hSCeqsgbgle71eotRUV5ECtQolWKEnkhUpkme9E148VK',
  },
});
