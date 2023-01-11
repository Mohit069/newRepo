import logo from './logo.svg';
import './App.css';
// import { todoslist }  from './MyComponents/todoslist';
import { Footer } from './MyComponents/Footer';
import  Header from './MyComponents/Header';
import About from './MyComponents/About';
import React,  { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function App() {

  const [mode, setMode]= useState("light")

  const togglemode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#636464"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"

    }
  }
  
  return (
   
    <> 
  <Router>
     <Routes>
	    <Route exact path='/' element={<Header title="New App" about="About us" mode={mode} togglemode={togglemode}/>}>
          <Route exact path='/about' element={< About />}></Route>
      </Route>
	    
	  </Routes>
  </Router>

    </>    
  );
}

export default App;
