import React from 'react';
//npm i reactstrap
//import { Container } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import NavMenu from './NavMenu';

export default function Layout(props) {

  return (
    <div>
      <NavMenu />
      <Container fluid>
        { props.children }        
      </Container>        
      <Footer />  
    </div>
  );
}
