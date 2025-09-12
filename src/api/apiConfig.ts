import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mg.mu9fy7ac6_n77bvfgfyd8AwwQu37JgGMLt9fpqbDxaOVvz8llLIYov-m8ZmO',
  },
});
