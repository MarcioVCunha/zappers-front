import axios from 'axios';
import BASE_URL from './service.baseURL.js';

const getMessages = async (config) => {
  return await axios.get(`${BASE_URL}/messages`, config);
};

export default getMessages;