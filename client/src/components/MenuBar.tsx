import React from "react";
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import {routePath} from '../helper/constants'

function MenuBar(props:any){   
    return (<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href={routePath.LANDING}>Home</Nav.Link>
      <Nav.Link href={routePath.GROUPS}>Groups</Nav.Link>
      <Nav.Link href={routePath.CONTACTS}>Contacts</Nav.Link>
      {/* <Nav.Link href={}>Pricing</Nav.Link> */}
    </Nav>    
    </Navbar>)
}

export default MenuBar;
