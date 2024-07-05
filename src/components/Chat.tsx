import React, {useState} from 'react'
import style from './Chat.module.css'
import {Container, Box, TextField, Button, Grid, Avatar} from "@mui/material"
import {useSelector} from "react-redux"
import {selectAuth} from "../redux/selectors/authSelector"
import {selectFirestore} from "../redux/selectors/firestoreSelector"
import {useAuthState} from "react-firebase-hooks/auth"
import {useCollectionData} from "react-firebase-hooks/firestore"
import Message from "./Message"
import Loader from "./Loader"
import firebase from "firebase/compat/app"

const Chat = () => {
    const firestore = useSelector(selectFirestore)
    const auth = useSelector(selectAuth)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')

    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const sendMessage = async () => {
        if (user) {
            firestore.collection('messages').add({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setValue('')
        } else {
            return null
        }
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container className={style.Chat}>
            <Box className={style.messagesWrapper}>
                {messages ? messages.map((m: any, user: any) => (
                    <div style={{
                        marginLeft: user.uid === m.uid ? 'auto' : '10px',
                        width: 'fit-content'

                    }}>
                        <Grid container>
                            <Avatar src={m.photoURL}/>
                            <div>{m.displayName}</div>
                        </Grid>
                        <Message key={m.createdAt} text={m.text}/>
                    </div>
                ))
                : null}
            </Box>
            <Box sx={{display: "flex"}}>
                <TextField className={style.input}
                           placeholder="type message"
                           value={value}
                           onChange={handleInputChange}
                />
                <Button className={style.button}
                        onClick={sendMessage}>
                    Send
                </Button>
            </Box>
        </Container>
    )
}

export default Chat