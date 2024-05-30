import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from "react-bootstrap";

function Header(props) {
    const navbarStyle = {
        backgroundColor: "#B0C5A4"
    }
    return (
        <Navbar style={navbarStyle} data-bs-theme="light">
            <Container>
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          </Container>
      </Navbar>
    )
}

export default Header;