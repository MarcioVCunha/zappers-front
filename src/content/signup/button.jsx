/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import postSignup from '../../services/service.signup';

const Button = (props) => {
  const { username, password } = props;
  const navigate = useNavigate();

  const createUser = () => {
    if (username !== '' && password !== '') {
      postSignup({ username, password })
        .then(() => {
          alert('User created');
          navigate('/');
          return;
        })
        .catch((error) => {
          if (error.response.status === 409) {
            alert('Someone is already using this username');
            return;
          }
          alert('We are having problems with our server');
          navigate('/');
          return;
        });

      return;
    }
    alert('Preencha os dados corretamente por favor');
    return;
  };

  return (
    <SignInButton onClick={() => createUser()}>
      Sign Up
    </SignInButton>
  );
};

const SignInButton = styled.button`
  margin-top: 100px;
  width: 40%;
  height: 40px;
  border-radius: 30px;
  border: none;
  background-color: rgb(0, 200, 0);
  color: white;
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 600px){
    width: 90%;
  }
`;

export default Button;