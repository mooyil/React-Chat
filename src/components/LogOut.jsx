import { Box, Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'



const LogOut = () => {


    const signOut = () => {
        signOut(auth)
    }

    return (
        <Box>
            <Button
                onClick={() => auth.signOut()}
                variant="contained"
                sx={{
                    bgcolor: "primary.dark",
                    "&:hover": { bgcolor: "primary.light" }
                }}>
                Logout</Button>
        </Box>
    )
}

export default LogOut
