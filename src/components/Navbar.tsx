import React from 'react'
import style from './Navbar.module.css'
import {useSelector} from "react-redux"
import {selectAuth} from "../redux/selectors/authSelector"
import {useAuthState} from "react-firebase-hooks/auth"
import {Box, Button} from "@mui/material"

const Navbar = () => {
    const auth = useSelector(selectAuth)
    const [user] = useAuthState(auth)

    return (
        <header className={style.Navbar}>
            {user ?
                (
                    <Box className={style.wrapper}>
                        <Box className={style.userData}>
                            <img className={style.photo} src={user.photoURL || ''} alt="no photo"/>
                            <p className={style.name}>{user.displayName}</p>
                        </Box>
                        <Button sx={{marginRight: 2}}
                                onClick={() => auth.signOut()}
                        >
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

export default Navbar