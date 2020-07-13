import React from 'react';

// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Marcus' }}>
      <SignIn />
      {/* <SignUp /> */}
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
