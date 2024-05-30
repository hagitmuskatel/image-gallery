import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from "react-bootstrap";
import {ReactComponent as Logo} from "../images/logo.svg";

function Header(props) {
    const navbarStyle = {
        backgroundColor: "#B0C5A4"
    }
    return (
        <Navbar style={navbarStyle} data-bs-theme="light">
            <Container style={{height: '60px'}}>
            <Logo alt={props.title} style={{maxWidth:'400px', maxHeight:'50px'}}/>
          </Container>
      </Navbar>
    )
}

export default Header;