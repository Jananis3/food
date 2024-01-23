import React from 'react';
import { Navbar,  Nav } from 'react-bootstrap';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';



const NavComponent = () => {
    return (
      <div className='bg'>
    <div className=' col-sm fixed-top'>
        <Navbar collapseOnSelect expand="sm" className='sticky-top  bg-white' style={{height : '70px'}}>

       
        <Navbar.Brand href="">
        <img src="./download.png" alt="" width="100" height="70"/>
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
         
          <Nav.Link href="#Home">Home</Nav.Link><br/>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Shopping">Order Now</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>


          </Nav>
          

        </Navbar.Collapse>
        <img src="./download1.jpg" alt="" width="40" height="30"/>
        <br></br>
        <img src="./images.png" alt="" width="40" height="30"/>


        <button type="button" className="but">Order Now</button>

    </Navbar>
    </div>
    </div>
           
    )
    
}

export default NavComponent;