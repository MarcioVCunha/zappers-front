/* eslint-disable react/prop-types */
import styled from 'styled-components';
import postSignin from '../../services/service.signin';
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
  const { username, password } = props;
  const navigate = useNavigate();

  const signInUser = () => {
    if (username !== '' && password !== '') {
      postSignin({ username, password })
        .then((res) => {
          localStorage.setItem('token', res.data);
          alert('Login done with success');
          navigate('/zapper');
          return;
        })
        .catch((error) => {
          if (error.response.status === 404) {
            alert('Username or password incorect');
            return;
          }
          alert('We are having problem in our server');
          return;
        });

      return;
    }
    alert('Preencha os dados corretamente por favor');
    return;
  };

  return (
    <SignInButton onClick={() => signInUser()}>
      Sign In
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