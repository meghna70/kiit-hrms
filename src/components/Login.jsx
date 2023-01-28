import React from 'react'
import {FormContainer, Heading,FormContent,FormHeader } from './styled.js'
export default function Login() {
  return (
    <FormContainer>
    <Heading>
      SIGN IN
    </Heading>
    <FormContent>
       <label>Email: </label>
       <input type="email"
              placeholder='youremail@gmail.com'
              name='email' 
              id ="email" 
              />
        <label>Password: </label>
        <input type="password"
              placeholder='password'
              name='password' 
              id ="password" 
              />
                <button className='submit-btn'>submit</button>
    </FormContent>
  </FormContainer>
  )
}
