import React from 'react'
import style from './Message.module.css'
import {Box} from "@mui/material"

export interface IMessage {
    text: string
}

const Message: React.FC<IMessage> = ({text}) => {
    return (
        <Box className={style.message}>
            {text}
        </Box>
    )
}

export default Message