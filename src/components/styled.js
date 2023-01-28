import styled from "styled-components"
import { createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
      body{
        font-family: 'Poppins', sans-serif;
      }
  `
export const Heading= styled.div`
  padding: 5px 0px 0px 0px;
  font-size: 25px;
  font-style: none;
  text-align:center;
  font-family: 'Noto Sans', sans-serif;
  background: linear-gradient(90.07deg, #17D059 -8%, #00ADED 104.95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`
export const FormContainer= styled.div`
      padding : 1.5rem 2.5rem 1.5rem 2.5rem;
      width: 18rem;
      border-radius:16px;
      font-family: 'Poppins', sans-serif;
      border:5rem;
      border: 1px solid #BFBFBF;
      text-align: left;
      background-color: white;
      box-shadow:  1px 1px 6px 4px rgb(176 198 212);
`
export const FormContent= styled.form`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items:stretch;
      
      input{
        margin: 0px 0px 0px 0px;
        padding: 15px;
        font-size: 14px;
        border-radius: 20px;
        border: 1px solid rgba(206, 212, 218, 1)
      }
      input:focus{
        border: 1px solid rgba(206, 212, 218, 1)
        outline: none;
      }
      label{
        font-family: Arial, Helvetica, sans-serif;
        padding: 7px 0px 3px 0px ;
        font-size: 14px;
      }
`
export const FormHeader= styled.div`
      margin: 25px 0px 7px 0px;
      font-size: 18px;
`