
import React from 'react';
import Container from 'react-bootstrap/Container';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Education } from '../Education/Education';
import { Experience } from '../Experience/Experience';
import { Title } from '../Title/Title';

export const Home = () => {
  return (
    <Container>
      <Title/>
      <About/>
      <Experience/>
      <Education/>
      <Contact/>
    </Container>
  );
};
