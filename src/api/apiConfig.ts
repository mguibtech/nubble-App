import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer OQ.BoxIVc3DcFyfT4Hp79yZxrPxvm8a8GT4AgTbMCLCEKe916O71yU6E2vFa8IK',
  },
});
