import React from 'react'
import {FormContainer, Heading,FormContent,FormHeader } from './styled.js'
import '../App.css';

function registration() {

  return (
    <FormContainer>
      <Heading>
        SIGN UP
      </Heading>
      <FormContent>
         <FormHeader>
           Personal Information
         </FormHeader>
         <label>First Name: </label>
         <input type="text"
                placeholder='first name'
                name='fname' 
                id ="fname" 
                />
          <label>Last Name: </label>
          <input type="text"
                placeholder='last name'
                name='lname' 
                id ="lname" 
                />
          <FormHeader>
           Contact Information
         </FormHeader>
          <label>Email: </label>
          <input type="email"
                placeholder='email'
                name='email' 
                id ="email" 
                />
           <label>Password: </label>
          <input type="password"
                placeholder='password'
                name='password' 
                id ="password" 
                />
          <label>Phone Number: </label>
          <input type="number"
                placeholder='phone number'
                name='phno' 
                id ="phno" 
                />
          <button className='submit-btn'>submit</button>
      </FormContent>
    </FormContainer>
  )
}

export default registration
