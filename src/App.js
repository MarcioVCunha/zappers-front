import GlobalStyle from './styles/globalStyles';
import Pages from './routes';
import { useState } from 'react';
import UserContext from './context/userContext';

function App() {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{username, setUsername}}>
      <GlobalStyle />
      <Pages />
    </UserContext.Provider>
  );
}

export default App;
