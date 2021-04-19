import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function SubmitProjectForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter name" />
                <Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control required type="text" placeholder="Enter subject" />
                <Form.Control.Feedback type="invalid">Please enter a subject!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="name@example.com" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">Please enter a valid email!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Project Details</Form.Label>
                <Form.Control required as="textarea" rows={5} placeholder="Enter details of your project here" />
                <Form.Control.Feedback type="invalid">Please enter your project details!</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    )
}

export default SubmitProjectForm;