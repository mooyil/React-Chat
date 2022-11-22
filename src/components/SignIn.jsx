import { Box } from '@mui/material'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase'


const SignIn = () => {


    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth,provider)
    }

  return (
    <Box>
      <GoogleButton onClick={googleSignIn}/>
    </Box>
  )
}

export default SignIn
