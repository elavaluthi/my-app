import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function () {
  return (
    <div>
        <Navbar bg="light" variant="light">
        
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper ">
            {
              localStorage.getItem('user-info')?
              <>
              <Link to='/navigate'>navigate</Link>
                <Link to='/viewproduct'>viewproduct</Link>
                <Link to='/upload'>upload</Link>
                <Link to='/list'>list</Link>
                <Link to='/taskbar'>task</Link>
                <Link to='/taskbartry'>taskbartry</Link>
                
                
              </>
              :
              <>
              <Link to='/login'>Login</Link>
                <Link to='/register'>register</Link>
              </>
            }
                
                
            
          </Nav>
        
      </Navbar>
    </div>
  )
}
