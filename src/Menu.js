import React from 'react';
import logo from './odin.webp';
import {
    Navbar,
    Container,
    Offcanvas,
    Nav,
    NavDropdown,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu(){



  return (

    <Navbar className='mainnav' sticky="top" expand={false}>
        <Container fluid>
            <Navbar.Brand className='title-nav' href="#">Betfrost
            <img
                src={logo}
                className="d-inline-block main-logo"
                alt="Betfrost - Odin DeFi"
             />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"><Button variant="dark">Connect</Button></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">HOME</Nav.Link>
                <Nav.Link href="#action2">ODIN'S FATE</Nav.Link>
                <Nav.Link href="#action2">THE GRACE OF FREJA</Nav.Link>
                <Nav.Link href="#action2">LOKI'S INN</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    Something else here
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
       </Navbar>

  )
  }
  export default Menu