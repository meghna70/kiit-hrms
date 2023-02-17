import logo from './logo.svg';
import './App.css';
import Entry from './pages/Entry';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hospitalityt from "./pages/Hospitalityt"
import Kiitform from './pages/Kiitform';
import NavBar from "./pages/NavBar";
import Dashboard from './pages/Dashboard';
import Temple from "./pages/Templeform";
import { useState } from 'react';

function App() {
  const [user,setUser]= useState(null)

  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<Entry setUser={setUser}/>}/>
       <Route path="/k3" element={<NavBar/>}/>
       <Route path="/k3/home" element={<div><NavBar/><Dashboard/></div>}/>
       <Route path="/k3/Kiit" element={<div><NavBar/><Dashboard/></div>}/>
       <Route path="/k3/Kiims" element={<div><NavBar/><Dashboard/></div>}/>
       <Route path="/k3/Kiss" element={<div><NavBar/><Dashboard/></div>}/>
       <Route path="/k3/Hospitality" element={<div><NavBar/><Dashboard/></div>}/>
       <Route path="/k3/Temple" element={<div><NavBar/><Temple/></div>}/>
       <Route path="/k3/Socials" element={<div><NavBar/><Dashboard/></div>}/>
      
       
       </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
