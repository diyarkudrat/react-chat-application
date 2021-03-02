import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCYV4AWBwfTNNODOClgcUOIvHdKYqfjvO8",
    authDomain: "few12final.firebaseapp.com",
    projectId: "few12final",
    storageBucket: "few12final.appspot.com",
    messagingSenderId: "948190057179",
    appId: "1:948190057179:web:2ed4d17b20aaee357e32fe",
    measurementId: "G-61X9MXE5G7"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
};

export const addMessage = async (text, uid, photoURL) => {
    const messagesRef = firestore.collection('messages')

    await messagesRef.add({
        text,
        uid,
        photoURL,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
}