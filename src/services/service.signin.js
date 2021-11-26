import axios from 'axios';
import BASE_URL from './service.baseURL.js';

const postSignin = async (body) => {
  return await axios.post(`${BASE_URL}/sign-in`, body);
};

export default postSignin;