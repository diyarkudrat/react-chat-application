import React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { auth } from './firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const user = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat Application</h1>
        <h2>⚛️ 🔥 💬</h2>

        <SignOut />
      </header>
      
      <section>
        { user[0] ? <ChatRoom /> : <SignIn /> }
      </section>

    </div>
  );
}

export default App;
