import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBK1--eoYYzqBF_0AJXehMlNZuJQ46AVSw",
    authDomain: "chat-5f4d0.firebaseapp.com",
    projectId: "chat-5f4d0",
    storageBucket: "chat-5f4d0.appspot.com",
    messagingSenderId: "442123115777",
    appId: "1:442123115777:web:e45b3bbb610ec41521cf00",
    measurementId: "G-X7D4PWBZW1"
}

export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()
