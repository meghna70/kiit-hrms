import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {FormContainer, Heading,FormContent,FormHeader } from './styled.js'
export default function Login({setUser}) {
  
  const [email,setEmail]= useState('');
  const [password, setPassword]= useState('');

  const navigate= useNavigate();

  const handleSubmit= async(e)=>{
      e.preventDefault();
      console.log("yesa")
      if(!email||!password) return;
      setUser({email:email, password:password});
      console.log("email",email)
      navigate("/k3/home")
  };
  const onChangeEmail=(e)=>{
    setEmail({[e.target.name] : e.target.value})
  }
  const onChangePassword=(e)=>{
    setPassword({...password, [e.target.name] : e.target.value})
  }
  return (
    <FormContainer>
    <Heading>
      SIGN IN
    </Heading>
    <FormContent onSubmit={handleSubmit}>
       <label htmlFor='email'>Email: </label>
       <input type="email"
              placeholder='youremail@gmail.com'
              name='email' 
              id ="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
        <label>Password: </label>
        <input type="password"
              placeholder='password'
              name='password' 
              id ="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
                <button className='submit-btn'>submit</button>
    </FormContent>
  </FormContainer>
  )
}
