import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import { Typography } from '@material-ui/core';

export default function Navbar() {
  return (
    <div style={{display: "flex",flexDirection: "row",backgroundColor: "#febecc",marginBottom: "10%"}}>
        <img src="https://www.freelogovector.com/wp-content/uploads/2017/06/44%20-%20PNG%20memories%20copy.jpg"  style={{width: "10%",height: "10%"}}/>
        <Typography variant="h4" style={{margin: "auto",fontFamily: "Sigmar One , cursive"}} >
          Memories
        </Typography>
        <IconButton onClick={()=>{localStorage.removeItem("usernames");  window.location.replace("/");}} > <LogoutIcon></LogoutIcon> </IconButton>
    </div>
  )
}
