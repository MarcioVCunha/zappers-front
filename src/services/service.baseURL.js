import process from 'process';

const BASE_URL = (process.env.REACT_APP_NODE_ENV === 'production')
  ? ' https://zapper-marcio.herokuapp.com'
  : 'http://localhost:4000';

export default BASE_URL;