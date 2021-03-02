import React from 'react';
import { auth } from '../firebase';


function SignOut(props) {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    );
}

export default SignOut;