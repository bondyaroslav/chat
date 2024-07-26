import React from 'react'
import style from './Message.module.css'
import {Avatar, Box, Grid} from "@mui/material"

export interface MessageProps {
    text: string,
    photo: string,
    name: string
}

const Message: React.FC<MessageProps> = ({text, photo, name}) => {
    return (
        <Box className={style.message}>
            <Avatar className={style.userPhoto} src={photo}/>
            <Grid container sx={{display: 'flex', flexDirection: 'column'}}>
                <Box className={style.userName}>{name}</Box>
                <Box className={style.messageText}>{text}</Box>
            </Grid>
        </Box>
    )
}

export default Message