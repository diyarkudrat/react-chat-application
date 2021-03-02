import React from 'react';

import { auth } from '../firebase';

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageStatus = (uid === auth.currentUser.uid) ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageStatus}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="" />
            <p>{text}</p>
        </div>
    </>);
}

export default ChatMessage;