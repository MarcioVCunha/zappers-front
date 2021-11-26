import styled from 'styled-components';
import Content from './content';

const Signup = () => {
  return (
    <Page>
      <Content />
    </Page>
  );
};

const Page = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Signup;