import React, {useState} from 'react'
import {FormContainer, Heading,FormContent,FormHeader } from './styled.js'
import '../App.css';
import axios from 'axios';

const Registration = () => {
    //const history= useNavigate();
    const [inputs, setInputs] = useState({
      eid: "3478g",
      fname: "",
      lname: "",
      phno: "",
      email: "",
      password: ""
  });

  const handleChange = (e) => {
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
        
    }))
    console.log(e.target.value)
  };

  const sendRequest = async () => {
    const res = await axios.post("http://192.168.10.199:5000/api/kiss/adddata",
      {
          eid: inputs.eid,
          fname: inputs.fname,
          lname: inputs.lname,
          phno: inputs.phno,
          email: inputs.email,
          password: inputs.password
      }
    ).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => alert(inputs)); //to meghna
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
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
                value={inputs.fname}
                onChange={handleChange}
                />
          <label>Last Name: </label>
          <input type="text"
                placeholder='last name'
                name='lname' 
                id ="lname"
                value={inputs.lname}
                onChange={handleChange}
                />
          <FormHeader>
           Contact Information
         </FormHeader>
          <label>Email: </label>
          <input type="email"
                placeholder='email'
                name='email' 
                id ="email"
                value={inputs.email}
                onChange={handleChange}
                />
           <label>Password: </label>
          <input type="password"
                placeholder='password'
                name='password' 
                id ="password" 
                value={inputs.password}
                onChange={handleChange}
                />
          <label>Phone Number: </label>
          <input type="number"
                placeholder='phone number'
                name='phno' 
                id ="phno" 
                value={inputs.phno}
                onChange={handleChange}
                />
          <button className='submit-btn' variant="contained" type="submit">submit</button>
      </FormContent>
    </FormContainer>
    </form>
    </div>
  )
}


export default Registration;
