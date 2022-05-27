import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import { Button, Navbar,NavDropdown } from 'react-bootstrap'
import AuthenticationServiceAdmin from '../servicesw/AuthenticationServiceAdmin';
const SiteInfo = () => {
    return(
        <div className="site-inf">
             <div className="header" >
             <div>
             <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top" style={{ maxHeight: '50px' }}>
             <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav" >
            
             <Navbar.Collapse className="justify-content-end">
             
    <Navbar.Text>
      <div><Link onClick={AuthenticationServiceAdmin.logout}>Logout</Link></div>
    </Navbar.Text>
  </Navbar.Collapse>
      <div  >
    
    </div>
    
  </Navbar.Collapse>
  
</Navbar>

  
        </div>
         </div>
            
        </div>
        
    );
}

export default SiteInfo;