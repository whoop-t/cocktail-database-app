import axios from 'axios';

const KEY = '1';

export default axios.create({
  baseURL: `https://www.thecocktaildb.com/api/json/v1/${KEY}`
});
