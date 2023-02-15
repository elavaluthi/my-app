import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function () {
  return (
    <div>
        <Navbar bg="light" variant="light">
        
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper ">
                <Link to='/login'>Login</Link>
                <Link to='/register'>register</Link>
                <Link to='/navigate'>navigate</Link>
            
          </Nav>
        
      </Navbar>
    </div>
  )
}
