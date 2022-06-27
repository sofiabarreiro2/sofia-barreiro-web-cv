import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LocaleSelector } from './LocaleSelector';
import { FormattedMessage } from 'react-intl';

export const NavBar = ({selectedLocale, onChangeLocale}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">Sofía Barreiro</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about"><FormattedMessage id="about-me"/></Nav.Link>
            <Nav.Link href="#experience"><FormattedMessage id="experience"/></Nav.Link>
            <Nav.Link href="#education"><FormattedMessage id="education"/></Nav.Link>
            <Nav.Link href="#contact"><FormattedMessage id="contact"/></Nav.Link>
          </Nav>
          <Nav>
            <LocaleSelector selectedLocale={selectedLocale} onChangeLocale={onChangeLocale} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}