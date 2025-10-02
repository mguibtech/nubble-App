import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mg.oatuBuisX0XEpmUOYpbxrXaKIJQK9wciJWDrh_ahuc8zBrJOMMVw8aV6jNoO',
  },
});
