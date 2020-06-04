import axios from 'axios';
import config from '../config';

const { KEY, LANGUAGE } = config.TMDb;

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
    language: LANGUAGE,
  },
});
