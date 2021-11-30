import axios from 'axios';
import BASE_URL from './service.baseURL';

const getName = async (token) => {
  return await axios.post(`${BASE_URL}/name`, { token });
};

export default getName;