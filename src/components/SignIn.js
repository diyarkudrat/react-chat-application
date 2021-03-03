import React from 'react';
import { signInWithGoogle } from '../firebase';
import './styles/SignIn.css';

function SignIn(props) {
    return (
        <button className="signin-button" onClick={signInWithGoogle}>Sign In With Google</button>
    );
}

export default SignIn;