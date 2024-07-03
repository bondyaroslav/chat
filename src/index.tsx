import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import setupStore from "./redux/store"
import App from './App'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

initializeApp({
    apiKey: "AIzaSyBK1--eoYYzqBF_0AJXehMlNZuJQ46AVSw",
    authDomain: "chat-5f4d0.firebaseapp.com",
    projectId: "chat-5f4d0",
    storageBucket: "chat-5f4d0.appspot.com",
    messagingSenderId: "442123115777",
    appId: "1:442123115777:web:e45b3bbb610ec41521cf00",
    measurementId: "G-X7D4PWBZW1"
})

const auth = getAuth()
const firestore = getFirestore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

const store = setupStore()

root.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
)
