import { Row, Col, Form, Accordion, Button } from 'react-bootstrap'


const Filters = ({ setSearchQuery }) => {
    return (
    <div className="toggle">
    <Accordion defaultActiveKey="0">
        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="test">
            Filter Selection
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <Form className="yellow-font">
            <Row>
            <Col>
            <input
                type="radio" 
                value="videographer" 
                name="type" 
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Videographer
            </Col>
            <Col>
            <input 
                type="radio"
                value="photographer"
                name="type"
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Photographer
            </Col>
            </Row>
            <Row>
            <Col>
            <input
                type="radio" 
                value="events" 
                name="type" 
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Events
            </Col>
            <Col>
            <input 
                type="radio"
                value="retail"
                name="type"
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Retail
            </Col>
            <Col>
            <input 
                type="radio"
                value="hospitality"
                name="type"
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Hospitality
            </Col>
            <Col>
            <input 
                type="radio"
                value="corporate"
                name="type"
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Corporate
            </Col>
            </Row>
        </Form>
        </Accordion.Collapse>
        </Accordion>
        </div>
    );
  }

export default Filters;