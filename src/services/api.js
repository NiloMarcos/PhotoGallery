import axios from 'axios';

// 563492ad6f91700001000001d071dffd22464edc8847d8348ba5c3ee

// export const key = '563492ad6f91700001000001d071dffd22464edc8847d8348ba5c3ee'

const api = axios.create({
  baseURL: 'https://api.pexels.com/',
  headers: {
    Authorization: '563492ad6f91700001000001d071dffd22464edc8847d8348ba5c3ee'
  }
});

export default api;
