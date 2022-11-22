import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import LogOut from './LogOut';
const Navbar = () => {
    const [user] = useAuthState(auth)

    return (
        <Box >
            <AppBar sx={{ bgcolor: "primary.main", position: "static" }}>
                <Toolbar sx={{display:"flex", justifyContent:"space-between"}}  >

                    <Typography variant="h6" component="div">
                        Chat
                    </Typography>
                    {user ? <LogOut /> : <SignIn />}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar
