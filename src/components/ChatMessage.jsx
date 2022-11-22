import { Box, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { auth } from '../firebase'

const ChatMessage = ({ chatMessage }) => {
  const [sameUser, setSameUser] = useState()

  useEffect(() => {
    chatMessage.uid !== auth.currentUser.uid
      ? setSameUser(true)
      : setSameUser(false)
  }, [])

  return (
    <Box
      sx={{
        display: "flex",
        mb: "10px",
        alignItems: "center",
        position: "relative", flexDirection: sameUser ? "" : "row-reverse",
      }}>
      <Box
        color="inherit"
        sx={{
          display: "flex",
          flexDirection: "column",
          float: sameUser ? "left" : "right",
          boxShadow: "0px 0px 3px 1px #000000",
          p: "5px",
          maxWidth: "50%",
          bgcolor: "secondary.dark",

        }} >
        <Typography
          sx={{
            textAlign: sameUser ? "left" : "right",
          }} variant="caption">
          {chatMessage.name}
        </Typography>
        <Typography
          sx={{
            textAlign: sameUser ? "left" : "right",
            wordBreak: "break-word"
          }} variant="p">
          {chatMessage.text}
        </Typography>
      </Box>
    </Box>
  )
}

export default ChatMessage
