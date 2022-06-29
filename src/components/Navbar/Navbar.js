import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LocaleSelector } from './LocaleSelector';
import { FormattedMessage } from 'react-intl';

const navBarElements = [
  { href: "#experience", title: 'experience' },
  { href: "#education", title: 'education' },
  { href: "#languages", title: 'languages' },
  { href: "#contact", title: 'contact' }
]

export const NavBar = ({ selectedLocale, onChangeLocale }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#">Sofía Barreiro</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {navBarElements.map(item => (
              <Nav.Link href={item.href} onClick={() => setExpanded(false)}><FormattedMessage id={item.title} /></Nav.Link>
            ))}
          </Nav>
          <Nav>
            <LocaleSelector selectedLocale={selectedLocale} onChangeLocale={onChangeLocale} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}