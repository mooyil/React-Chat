import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { theme } from "./styles/theme";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import { useRef } from "react";
import SendMessage from "./components/SendMessage";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: "728px",
          margin: "auto auto",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 6,
            height:"90vh",
            bgcolor: "secondary.main",
            boxShadow: "0px 0px 2px 1px #000000",
            position: "relative",
            overflowY:"scroll"
          }}
        >
          <Navbar />
          {user ? <Chat /> : null}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
