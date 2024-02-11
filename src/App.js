import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import IndexRoute from './routes/IndexRoute';
import useAuth from './routes/useAuth';

function App() {
  const { authenticated, login, logout } = useAuth();

  return (
    <Router>
      <IndexRoute authenticated={authenticated} login={login} logout={logout} />
    </Router>
  );
}

export default App;
