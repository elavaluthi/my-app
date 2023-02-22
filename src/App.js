import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './Components/Header' 
import{BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Naviagte from './Components/Naviagte'
import Viewproduct from './Components/Viewproduct'
import DocumentUpload from './Components/DocumentUpload';
import FileList from './Components/FileList';
import TaskBar from './Components/TaskBar';
import Taskbartry from './Components/Taskbartry';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      
      <Routes>
       
          
        
          <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
          
          <Route path='/navigate' element={<Naviagte/>}/>
          <Route path='/viewproduct' element={<Viewproduct/>}/>
          <Route path='/upload' element={<DocumentUpload/>}/>
          <Route path='/list' element={<FileList/>}/>
          <Route path='/taskbar' element={<TaskBar/>}/>
          <Route path='/taskbartry' element={<Taskbartry/>}/>
          
          
        
        
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
