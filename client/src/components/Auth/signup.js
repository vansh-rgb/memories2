import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../../api/index";







const Signup = () => {
  const [apierror,setapierror]  = useState("");
  const [type, settype] = useState("password");
  const [typeconfirm, settypeconfirm] = useState("password");

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmPass] = useState("");
  const [confirmpasscolor, setconfirmpasscolor] = useState("red");
  const [visiblity,setvisiblity] = useState("hidden");
  const [errorvisibility,seterrorvisibility] = useState("hidden");
  const [frontenderror,setfrontenderror] = useState('');
 
  

  
  async function signupfn() {

    
    if( password === "" || confirmpass === "" || username===""){
      setfrontenderror("fill all the fields");
      setvisiblity("visible");
      return ;
 
 
    }
    if(password !== confirmpass){
      setfrontenderror("passwords dont match");
      setvisiblity('visible');
      return ;
    }
    else{
      setvisiblity("hidden");
      
      const formdata = {
        username,password
      }
     const data = await  api.signup(formdata);
     console.log(data.data.message);
    if(data.status===200){
      localStorage.setItem("usernames",data.data.username);
      window.location.replace("/");

    }
    else{
      setapierror(data.data.message);
      seterrorvisibility('visible');
    }
    
     
    
     
     

      
    
      
    }
    
  }

  function showpassword(str) {
    if (str === "pass") {
      type === "password" ? settype("text") : settype("password");

    }
    else {
      typeconfirm === "password" ? settypeconfirm("text") : settypeconfirm("password");

    }


  }
  function handlechange(evt, str) {
    if (str === "pass") {
     
      setpassword(evt.target.value);
    
      if (confirmpass === evt.target.value) {
        setconfirmpasscolor("green");

      }
      else{
        setconfirmpasscolor("red");
        console.log("not same")
      }

     
      
    }
    else {
      setconfirmPass(evt.target.value);
      console.log(password);
      if (evt.target.value === password) {
        setconfirmpasscolor("green");

      }
      else{
        setconfirmpasscolor("red");
        
      }
     
    }



  }


  return (
    <>
      <div className="Login">


        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        />
        <h1> Signup</h1>





        <TextField
          required
          id="outlined-required"
          label="uername"
          type="username"
          defaultValue=""
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />



        <TextField id="outlined-basic" label="Password" type={type} value={password} variant="outlined" onChange={(e) => { handlechange(e, "pass") }} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),

          endAdornment: (

            <InputAdornment position="end">
              {password !== "" ? <IconButton onClick={() => { showpassword("pass") }}>
                <VisibilityIcon />

              </IconButton> : null}


            </InputAdornment>
          ),
        }} />



        <TextField sx={{ input: { color: confirmpasscolor } }} id="outlined-basic" label="Confirm Password" type={typeconfirm} value={confirmpass} variant="outlined" onChange={(e) => { handlechange(e, "confirmpass") }} InputProps={{

          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),

          endAdornment: (

            <InputAdornment position="end">
              {password !== "" ? <IconButton onClick={() => { showpassword("confirmpass") }}>
                <VisibilityIcon />

              </IconButton> : null}


            </InputAdornment>
          ),
        }} />


        <Button variant="contained" style={{
          backgroundColor: "pink",
          color: "white"
        }}
          onClick={() => { signupfn() }}
        >Signup

        </Button>
        <Link to="/" underline="none" style={{

          color: "pink"
        }}>
          {"Already have an account"}
        </Link>
        <Alert style={{visibility: visiblity}} severity="error">{frontenderror}</Alert>
        <Alert style={{visibility: errorvisibility}} severity="error">{apierror}</Alert>
       
        




      </div>
    </>
  );
};

export default Signup;
