import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getConfig from '../../services/service.auth';
import getMessages from '../../services/service.getMessages';
import getName from '../../services/service.getName';
import sendMessageToBack from '../../services/sendMessageToBack';

const Homepage = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [messageToSend, setMessageToSend] = useState('');
  let messagesEndRef = useRef(null);
  let intervalRef = useRef();
  const navigate = useNavigate();

  const getMessageFromBack = () => {
    const config = getConfig();

    getMessages(config)
      .then((res) => {
        setMessages(res.data);
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      })
      .catch(() => {
        alert('Your token expired');
        clearInterval(intervalRef.current);
        navigate('/');
      });
  };

  const createInterval = () => {
    intervalRef.current = !intervalRef.current && setInterval(() => {
      getMessageFromBack();
    }, 15000);
  };

  useEffect(() => {
    getName(localStorage.getItem('token'))
      .then((res) => {
        setUsername(res.data);
      })
      .catch(() => {
        alert('We are having problem in the server');
        navigate('/');
      });
    getMessageFromBack();
    createInterval();
  }, []);

  const sendMessage = () => {
    sendMessageToBack({ messageToSend, token: localStorage.getItem('token') })
      .then(() => {
        setMessages('');
      })
      .catch(() => {
        alert('We are having problem in the server');
        navigate('/');
      });
  };

  return (
    <Page>
      <Container>
        <Messages>
          {messages.map((message, key) => {
            return (
              <Item key={key} ref={messagesEndRef}>
                <Name myUsername={username} username={message.username}>{message.username}<span>:</span> </Name>
                <p>{message.message}</p>
              </Item>
            );
          })}
        </Messages>
        <SendMessageContainer>
          <Input placeholder='Type here' value={messageToSend} onChange={(e) => { setMessageToSend(e.target.value); }}></Input>
          <button onClick={() => {
            sendMessage(messageToSend);
          }}>Send</button>
        </SendMessageContainer>
      </Container>
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

const Container = styled.div`
  width: 80%;
  height: 90%;
  border-radius: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background-color: white;
`;

const Messages = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: scroll;
`;

const Item = styled.ul`
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  margin-top: 5px;
  display: flex;
  align-items: center;

  p{
    font-size: 20px;
  }
`;

const Name = styled.p`
  width: 100px;
  color: ${(props) => props.username === props.myUsername ? 'green' : 'black'};
  word-wrap: break-word;
  position: relative;
  margin: 5px;

  span{
    position: absolute;
    right: 0;
    top: calc(50% - 10px);
  }
`;

const SendMessageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    height: 100%;
    background-color: black;
    color: white;
    font-size: 28px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    width: 15%;
  }
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 18px;
  border-radius: 40px;
  border: 1px solid black;
`;


export default Homepage;