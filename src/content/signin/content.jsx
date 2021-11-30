import { useContext, useState } from 'react';
import styled from 'styled-components';
import Inputs from '../shared/input';
import Button from './button';
import Link from '../shared/link.jsx';
import UserContext from '../../context/userContext';

const Content = () => {
  const { username, setUsername } = useContext(UserContext);
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Logo>Sign in with your Zappercount</Logo>
      <Inputs placeholder='Username' setFunction={setUsername} />
      <Inputs placeholder='Password' setFunction={setPassword} />
      <Button username={username} password={password} />
      <Link text='Do not have a Zappercount?' sendTo='/sign-up' />
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  height: 90%;
  background-color: grey;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px){
    width: 100%;
    border-radius: 0;
  }
`;

const Logo = styled.p`
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 100px;
`;

export default Content;