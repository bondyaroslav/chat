'use client'
import React, {useEffect, useState} from "react"
import {Box, Button} from "@mui/material"
import {auth} from "../../firebase/firebase"
import style from './Navbar.module.css'
const Navbar = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [])

    const handleLogout = () => {
        auth.signOut()
    }

    return (
        <header className={style.Navbar}>
            {user ?
                (
                    <Box className={style.wrapper}>
                        <Box className={style.userData}>
                            <img className={style.photo} src={user.photoURL || ''} alt="no photo"/>
                            <p className={style.name}>{user.displayName}</p>
                        </Box>
                        <Button sx={{marginRight: 2}} onClick={handleLogout}>
                            Logout
                        </Button>
                    </Box>
                )
                :
                null
            }
        </header>
    )
}

export default React.memo(Navbar)