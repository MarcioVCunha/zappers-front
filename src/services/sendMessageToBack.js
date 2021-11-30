import axios from 'axios';
import BASE_URL from './service.baseURL';

const sendMessageToBack = (body) => {
  return axios.post(`${BASE_URL}/post-message`, body);
};

export default sendMessageToBack;