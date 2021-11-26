import { Routes, Route } from 'react-router-dom';
import Signin from './content/signin/index';
import Signup from './content/signup';

const Pages = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Signin />} />
      <Route exact path='/sign-up' element={<Signup />} />
    </Routes>
  );
};

export default Pages;