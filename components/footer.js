import React from 'react';
import Nav from "react-bootstrap/Nav";
import { Button, Navbar,NavDropdown } from 'react-bootstrap'
const Footer = () => {
    return(
        <footer>
            <div className="si">
             <div className="footer" >
             <div >
             <Navbar className="justify-content-center" collapseOnSelect expand="sm" bg="primary"  fixed="bottom" style={{ maxHeight: '30px' ,align: 'center'}}>
             <Navbar.Brand href="#home" >Copy rights @easybusbooking</Navbar.Brand>
  
            </Navbar>
        </div>
         </div>
            
        </div>
        </footer>
    );
}

export default Footer;