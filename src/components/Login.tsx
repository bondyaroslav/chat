import React, {useState} from 'react'
import {Box, Button, TextField} from "@mui/material"
import style from './Login.module.css'
import {useSelector} from "react-redux"
import {selectAuth} from "../redux/selectors/authSelector"
import firebase from "firebase/compat/app"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = useSelector(selectAuth)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return (
        <Box className={style.loginPage}>
            <Box className={style.container}>
                <h1 className={style.title}>Login</h1>
                <TextField
                    sx={{marginBottom: 1}}
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                />
                <TextField
                    sx={{marginBottom: 1}}
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={handlePasswordChange}
                    fullWidth
                />
                <Button className={style.button}
                        sx={{marginBottom: 1}}
                        variant="contained"
                        color="primary"
                        onClick={() => {console.log(email, password)}}
                >
                    Login
                </Button>
                <Button className={style.button}
                        color="primary"
                        onClick={login}
                >
                    Login with Google
                </Button>
            </Box>
        </Box>
    )
}

export default Login