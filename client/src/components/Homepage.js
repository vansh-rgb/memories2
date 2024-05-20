import React from 'react'
import Form from './form'
import Posts from './Posts/posts'
import Login from './Auth/login'
import Navbar from './navbar'

export default function Homepage(props) {
  console.log(props.token);
  return (
      <>
      {props.token!=null ? <><Navbar></Navbar> <Form Id={props.id} />
      <Posts updateId={props.updatedid} /></>
      :
      <Login/>
      }
     
      </>
    
  )
}
