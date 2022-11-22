import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { auth, db } from "../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { StayPrimaryLandscape } from '@mui/icons-material'

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("")

  const sendMessage = async (e) => {
    e.preventDefault()
    const { uid, displayName } = auth.currentUser
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp()
    })
    setInput("")
    scroll.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <form
        onSubmit={sendMessage}
        style={{
          height: "56px",
          display: "flex",
          position: "static",
        }}>
        <TextField
          sx={{zIndex:3}}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder='Message' />
        <Button variant="contained" type="submit">Send</Button>
      </form>
    </>
  )
}

export default SendMessage
