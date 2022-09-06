import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MenuBar.scss';
import Cookies from 'js-cookie';
import {useIntl} from "react-intl";
import {Profile} from '../../../assets/icons/component';

interface Props {
    display: string
}

export const MenuBar: React.FC<Props>=({display})=>{
    const handleLanguageEnglish = () => {
        Cookies.set('language', 'en');
    }
    const handleLanguageSpanish = () => {
        Cookies.set('language', 'es');
    }


    const intl = useIntl();
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="image/logo1.png" alt="home" />
                    <img src="image/logo2.png" alt="home" />
                    <img src="image/logo3.png" alt="home" />
                    <img src="image/logo4.png" alt="home" />
                </Navbar.Brand>
                <div className={`d-flex ${display}`}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title={intl.formatMessage({id: "languages"})} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={handleLanguageEnglish} href="#">{intl.formatMessage({id: "english"})}</NavDropdown.Item>
                                <NavDropdown.Item href="#"onClick={handleLanguageSpanish}>
                                    {intl.formatMessage({id: "spanish"})}
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="user">
                        <div className="info">
                            <h4>Juan Felipe</h4>
                            <p>Cerrar sesión </p>
                        </div>
                        <Profile/>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}