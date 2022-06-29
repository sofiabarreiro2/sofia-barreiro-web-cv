
import React from 'react';
import Container from 'react-bootstrap/Container';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Education } from '../Education/Education';
import { Experience } from '../Experience/Experience';
import { Languages } from '../Languages/Languages';
import { Title } from '../Title/Title';

export const Home = () => {
  return (
    <Container className="pt-3 pb-5">
      <Title/>
      <About/>
      <Experience/>
      <Education/>
      <Languages/>
      <Contact/>
    </Container>
  );
};
