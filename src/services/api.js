import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const newsApi = axios.create({
  baseURL:'http://newsapi.org/v2/top-headlines?q=covid&country=br&apiKey=1cc2caf9ce7a4c6a960cb5cbe4fe1f23';
})

export default axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1',
});
