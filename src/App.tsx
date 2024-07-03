import React from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navbar/>}/>
            </Routes>
        </>

    )
}

export default App
