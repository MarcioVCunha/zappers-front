import { Routes, Route } from 'react-router-dom';
import Signin from './content/signin/index';
import Signup from './content/signup';
import Homepage from './content/homepage';

const Pages = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Signin />} />
      <Route exact path='/sign-up' element={<Signup />} />
      <Route exact path='/zapper' element={<Homepage />} />
    </Routes>
  );
};

export default Pages;