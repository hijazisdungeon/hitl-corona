import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export default axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1',
});
