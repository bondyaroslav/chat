import React from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import {useAppDispatch} from "./hooks/redux"
import {addAuth, addFirestore} from "./redux/reducers/firebaseReducer"
import AppRouter from "./components/AppRouter"
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

interface AppProps {
    firebase: any
    auth: any
    firestore: any
}

const App: React.FC<AppProps> = ({firebase, auth, firestore}) => {
    const dispatch = useAppDispatch()
    dispatch(addAuth(auth))
    dispatch(addFirestore(firestore))

    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader/>
    }

    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    )
}

export default App
