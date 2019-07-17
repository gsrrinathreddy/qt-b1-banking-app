import React, { Component } from 'react'
import {Navbar ,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.css';
export default class Header extends Component {
    render() {
        return (
            <div>
            <Navbar bg="dark"  variant="dark" expand="lg">
                <Navbar.Brand href="#home">Banking-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link >
                        <Link className="links" to="/products">
                            Products
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="links" to="/services">
                       Services
                    </Link>
                    </Nav.Link>
                    <NavDropdown title="Payments" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Credit Card Bill</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Loan EMI</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Water Bill</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Mobile Bill</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav.Link>
                   <Link className="links" to="/login">
                    Login
                   </Link>
                    
                </Nav.Link>
                    <Nav.Link>
                        <Link className="links" to="/register">
                      Register
                    </Link>
                   </Nav.Link>
                </Navbar.Collapse>
            </Navbar> 
            </div>
        )
    }
}
