import axios from 'axios';
import BASE_URL from './service.baseURL.js';

const postSignup = async (body) => {
  return await axios.post(`${BASE_URL}/sign-up`, body);
};

export default postSignup;