import './Portfolio.css';
import'bootstrap/dist/css/bootstrap.css';
import {Carousel, Row, Col, Button, Modal} from 'react-bootstrap';
import { useParams } from 'react-router';
import freelancer_info from "../data/freelancer_data";
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { useState } from 'react';
import SubmitProjectForm from './SubmitProjectForm.js';
import NagivationBar from './NavigationBar.js'

function Portfolio() {
    const {id} = useParams();
    const freelancer = freelancer_info[id];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="Portfolio shadow-lg mb-5">
      <NagivationBar />
        <Carousel className="main_carousel">
        {freelancer.photos.map(photo => (
          <Carousel.Item>
            <img src={photo}/>
          </Carousel.Item>
        ))}
        </Carousel>
        
        <div>
          <h1></h1>
        </div>

        <div class="biography shadow-lg p-3 mb-5" fluid="md">
          <Row>
            <Col xs={3} className="m-2">
              <h2>{freelancer.name}</h2>
              <img src={freelancer.profile_photo}></img>
            </Col>
            <Col  className="m-2">
              <Row> <h2>Biography</h2> </Row>
              <Row> <h3> {freelancer.biography} </h3> </Row>
            </Col>
            <Col xs={3}  className="m-2">
              <Row> <h2>Years Experience</h2></Row>
              <Row> <h3>{freelancer.experience_years}</h3></Row>
              
              <br/>

              <Row> <h2>Clients</h2> </Row>
              <Row> <h3>{freelancer.clients}</h3> </Row>

              <br/>

              <Row> <h2>Certifications</h2> </Row>
              <Row> <h3>{freelancer.certifications}</h3> </Row>

              <br/>

              <Row> <h2>Equipment</h2> </Row>
              <Row> <h3>{freelancer.equipment}</h3> </Row>

              <br/>

              <Row className="contact-btn p-2">
                <Button  onClick={handleShow}>Contact {freelancer.name}</Button>
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Get in contact with {freelancer.name}!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Send us a description of what sort of content you're looking for!</p>
                    <SubmitProjectForm />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Row>
            </Col>
          </Row>
        </div>

        <div class="gallery">
         <Gallery>
          {freelancer.photos.map(photo => (
          <Item original={photo}
          thumbnail={photo}
          width="1024"
      height="768">
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={photo} />
          )}
          </Item>
        ))}
          </Gallery>
        </div>

          
    </div>

  );
}

export default Portfolio;
