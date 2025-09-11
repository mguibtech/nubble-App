import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer MTA.DPZZqHaOTwIbEZwqsOaTVGRoQ9BTr784l_QW2XzK_H76f9RSTgxGfnrqeNt9',
  },
});
