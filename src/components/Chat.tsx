import React, {useEffect, useRef, useState} from 'react'
import style from './Chat.module.css'
import {Box, TextField, Button} from "@mui/material"
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

    const endOfMessagesRef = useRef<HTMLDivElement | null>(null)

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const sendMessage = async () => {
        if (user && value) {
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
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box className={style.Chat}>
                <Box className={style.messagesWrapper}>
                    {messages && messages.map((m, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: m.uid !== user?.uid ? 'flex-start' : 'flex-end',
                            width: '100%',
                            marginLeft: m.uid !== user?.uid ? '10px' : 'auto',
                            marginTop: 10,
                        }}>
                            <Message text={m.text} photo={m.photoURL} name={m.displayName} />
                        </div>
                    ))}
                    <div ref={endOfMessagesRef} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    minHeight: '10%',
                    backgroundColor: '#ECF0F1',
                    alignItems: 'center',
                    padding: '0 10px'
                }}>
                    <TextField
                        placeholder="type message"
                        value={value}
                        onChange={handleInputChange}
                        sx={{
                            flex: 1,
                            marginRight: '10px',
                            '& .MuiInputBase-root': {
                                backgroundColor: '#ffffff',
                                borderRadius: '4px',
                                height: '50px',
                                padding: '0 10px'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#bdc3c7'
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#95a5a6'
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#3498db'
                            }
                        }}
                    />
                    <Button
                        className={style.button}
                        onClick={sendMessage}
                        sx={{
                            height: '50px',
                            backgroundColor: '#3498db',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#2980b9'
                            }
                        }}
                    >
                        Send
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Chat