import './Home.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import SubmitProjectForm from './SubmitProjectForm.js'
import NavigationBar from './NavigationBar.js'

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Home" style={{ backgroundImage: "url(../../images/Homepage2.jpg)"}} id="background_img">
      <NavigationBar/>
      <Container className="homepageWelcome blue-font d-flex align-items-center">
        <div className="center-align">
          <h2>we are</h2>
          <LinkContainer to="/aboutus">
            <h1 className="font-weight-bold title">Bubble Vision</h1>  
          </LinkContainer>
          
          <h2>we connect businesses to freelance videographers and photographers</h2>
        </div>

      </Container>

      <Row className="buttons">
        <Col className="d-flex justify-content-center">
          <LinkContainer to="/freelancers">
            <Button className="btn-lg">Browse our Freelancers!</Button>
          </LinkContainer>
          
        </Col>
        <Col className="d-flex justify-content-center">
          <Button className="btn-lg" onClick={handleShow}>Submit a Project Idea!</Button>
        </Col>
      </Row>  

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Send us your visual content needs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Send us a description of what sort of content you are looking for. Our experts will match you 
            with the most appropriate freelancer
          </p>
          <SubmitProjectForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default App;
