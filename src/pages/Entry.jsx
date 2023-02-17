import React from 'react'
import { useState } from 'react'
import '../App.css'
import styled from 'styled-components'
import Login from '../components/Login'
import Registration from '../components/Registration'
import { useEffect } from 'react'

export default function Entry({setUser}) {

   
    const [curr, setCurr]= useState("login");
    
    function toggleItem(){
        setCurr(prevState=>{
            console.log("previous :", prevState)
            return [prevState=="login"? "registration": "login"]
        })
    }

    useEffect(()=>{
       
      },[curr])

    
  return (
    <div className='main-container'>
        <div className='form-header'>
           <button className='btn' onClick={toggleItem}>{curr}</button>
        </div>
        <ResponsiveFlex className='form-content'>
              <FlexContent className='entry-name'>
                <br/>
                 Welcome to Kiit HRMS 
              </FlexContent>
              <FlexContent>
                 {curr=="login"? <Registration />:<Login setUser={setUser}/>}
              </FlexContent>
        </ResponsiveFlex>
    </div>
  )
}

const ResponsiveFlex= styled.div`
         width:100%;
         height:100%;
         display: flex;
         flex-direction: row;
`
const FlexContent= styled.div`
      width:50%;     
      padding: 1rem;
`