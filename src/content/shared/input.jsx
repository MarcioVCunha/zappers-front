/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Inputs = (props) => {
  const { placeholder, setFunction } = props;

  return (
    <Input placeholder={placeholder} onChange={(e) => {
      setFunction(e.target.value);
    }}>
    </Input>
  );
};

const Input = styled.input`
  width: 90%;
  height: 50px;
  border: none;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 28px;
  padding: 5px 10px;
`;

export default Inputs;