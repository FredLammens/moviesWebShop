import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const NavigationBar = () => {
    let history = useHistory();
    const goHome = () => {
        history.push("/home");
    }
    const goProduct = () => {
        history.push("/products");
    }
    const goBasket = () => {
        history.push("/basket");
    }
    return (
        <div className="NavBar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand onClick={goHome}>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={goProduct}>Producten</Nav.Link> 
                        <Nav.Link onClick={goBasket}>Winkelmand</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;