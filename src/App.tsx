import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import './App.css';
import SlideHome from './SlideHome';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardContent from './CardContent'


function App() {
  
  return (
    <div className="App">
            <Container className='header'>
              <Row className="wrapsite">
            <Col> <Menu /></Col>
              </Row>
              </Container>
              <Container className='mt-3 slidehome'>
                <Row>
                  <Col>
                  <SlideHome />
                  </Col>
                </Row>
              </Container>
              <Container className='content'>
                <Row>
              <Col>
              <div className="menu-back wrapsite">
                <CardContent />
              </div>
              </Col>
              </Row>
              </Container>
    </div>
  );
}
export default App