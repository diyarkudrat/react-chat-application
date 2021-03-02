import React, { useState } from 'react';
import { firestore, addMessage, auth } from '../firebase';
import ChatMessage from './ChatMessage';

import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatRoom(props) {
    const [formValue, setFormValue] = useState('');

    const messagesRef = firestore.collection('messages');
    const searchQuery = messagesRef.orderBy('createdAt').limitToLast(25);
    
    const [messages] = useCollectionData(searchQuery, { idField: 'id' });

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;
        await addMessage(formValue, uid, photoURL);

        setFormValue('');  
    }

    return (<>
        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
            <button type="submit" disabled={!formValue}>Send</button>
        </form>
    </>);
}

export default ChatRoom;