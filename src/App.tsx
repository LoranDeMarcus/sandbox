import React from 'react';
import io from 'socket.io-client'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
