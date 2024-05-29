import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from "../../api/index";
import './login.css';

export default function Login() {
	const [type,settype] = useState("password");
	const [password,setpassword] = useState("");
	const [username,setusername] = useState("");
	const [apierror,setapierror] = useState("");
	const [visiblity,setvisiblity] = useState("hidden");
	const [errorvisibility,seterrorvisibility] = useState("hidden");

	// const error = useSelector(state => state.error);
	async  function  loginfn(){
		if(username === "" || password === ""  ){
			setvisiblity("visible");
			return ;
		}
		else{
			const formdata = {
				username,password
			}
			console.log(username);
			const data = await api.login(formdata);
			console.log(data);
			if(data.status===200){
				localStorage.setItem("usernames",data.data.username);
				window.location.replace("/");
			}
			if(data.status!==200){
				setapierror(data.data.message);
				seterrorvisibility("visible");
			}
		}
	}
	function showpassword(){
		type==="password" ? settype("text") : settype("password");
	}
	
	return (
<div className="Login">
	 {/* <ReactLogo/> */}
	 <Box
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete="off"
				/>
				<h1> Login</h1>
			
			 <TextField id="outlined-basic" value={username}  onChange={(e)=>{setusername(e.target.value)}}  label="username" variant="outlined"  InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<EmailIcon />
						</InputAdornment>
					),
				}}  />
			 
			 <TextField id="outlined-basic" label="Password" type={type} value={password} variant="outlined" onChange={(e)=>{setpassword(e.target.value)}}  InputProps={{
				
					startAdornment: (
						<InputAdornment position="start">
							<LockIcon />
						</InputAdornment>
					),
					
					endAdornment: (
						<InputAdornment position="end">
							{password!=="" ? <IconButton onClick={()=>{showpassword()}}>
							<VisibilityIcon />
							</IconButton>:null}
						</InputAdornment>
					),
				}} />
			 <Button variant="contained" className="Loginbutton"   style={{
			 backgroundColor: "pink",
			 color: "white"
		}
		}
		onClick={()=>{loginfn()}} >Login</Button>
			 <Link to="/signup" underline="none" style={{
			 
			 color: "pink"
		}}>
				{"New User Register Here"}
			</Link>
			<Alert style={{visibility: visiblity}} severity="error">Fill All the fields</Alert>
			<Alert style={{visibility: errorvisibility}} severity="error">{apierror}</Alert>
	</div>
	)
}
