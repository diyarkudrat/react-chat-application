import React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { auth } from './firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function App() {

  const user = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat Application</h1>
        <h2>⚛️ 🔥 💬</h2>

        { user[0] ? <ChatRoom /> : <SignIn /> }
        <SignOut />
      </header>
    </div>
  );
}

export default App;
