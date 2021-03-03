import React from 'react';
import { auth } from '../firebase';
import './styles/SignOut.css';


function SignOut(props) {
    return auth.currentUser && (
        <button className="signOut" onClick={() => auth.signOut()}>Sign Out</button>
    );
}

export default SignOut;