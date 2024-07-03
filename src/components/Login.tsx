import React, {useState} from 'react'
import {Box, Button, TextField} from "@mui/material"
import style from './Login.module.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: any) => {
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
                    onChange={(event: any) => handleEmailChange(event)}
                    fullWidth
                />
                <TextField
                    sx={{marginBottom: 1}}
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(event: any) => handlePasswordChange(event)}
                    fullWidth
                />
                <Button className={style.button}
                        variant="contained"
                        color="primary"
                        onClick={() => {console.log(email, password)}}
                >
                    Login
                </Button>
            </Box>
        </Box>
    )
}

export default Login