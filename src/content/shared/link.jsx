/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Link = (props) => {
  const navigate = useNavigate();

  return (
    <Text onClick={() => {
      navigate(props.sendTo);
    }}>
      {props.text}
    </Text>
  );
};

const Text = styled.p`
  margin: 20px;
  cursor: pointer;
  font-weight: 700;
`;

export default Link;