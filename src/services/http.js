import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonbox.io/box_73b658bf7833ece90ddb',
});

export default instance;
