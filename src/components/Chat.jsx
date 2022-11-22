import { Box } from '@mui/system'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import React, { useState, useEffect, useRef } from 'react'
import { db } from '../firebase'
import ChatMessage from './ChatMessage'
import SendMessage from './SendMessage'

const Chat = () => {
    const [chatMessages, setChatMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let chatMessages = [];
            querySnapshot.forEach((doc) => {
                chatMessages.push({ ...doc.data(), id: doc.id });
            });
            setChatMessages(chatMessages);
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", p: "10px" }}>
                {chatMessages && chatMessages.map((chatMessage) => (
                    <ChatMessage key={chatMessage.id} chatMessage={chatMessage} />

                ))}
            <SendMessage scroll={scroll} />
            <span ref={scroll}></span>
            </Box>
        </>

    )
}

export default Chat
