
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';



const Header = () => {

    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bolder text-danger" href="#home">FoodZone </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link to="#home">Home</Nav.Link>
                        <Nav.Link to="#about">About</Nav.Link>
                        <Nav.Link to="#menu">Menu</Nav.Link>
                        <Nav.Link to=" n#order">Order</Nav.Link>
                        <Navbar.Text>
                            <a href="#login">Sign In</a>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;