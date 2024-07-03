import React from 'react'
import './App.css'
// import {Route, Routes} from "react-router-dom"
// import Navbar from "./components/Navbar"
import Login from "./components/Login"

interface AppProps {
    firebase: any
    auth: any
    firestore: any
}

const App: React.FC<AppProps> = ({firebase, auth, firestore}) => {

    console.log(firebase, auth, firestore)

    return (
        <div>
            {/*<Navbar/>*/}
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Navbar/>}/>*/}
            {/*</Routes>*/}

            <Login />
        </div>
    )
}

export default App
