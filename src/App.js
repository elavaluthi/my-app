import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './Components/Header' 
import{BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Naviagte from './Components/Naviagte'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/navigate' element={<Naviagte/>}/>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
