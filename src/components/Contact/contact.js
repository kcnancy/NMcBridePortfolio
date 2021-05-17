import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container, Row, Card, Col, Button, Form } from "react-bootstrap";
import "./Contact.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqpbnpr");
  if (state.succeeded) {
    return <p>Thank you for contacting me!</p>;
  }
  return (
    <Container className="d-flex vh-100 text-center">
      <Row className="m-auto align-self-center center-text">
        <Col md={4}>
          <Card
            className="mb-3 border-info text-center"
            style={{ color: "blue", width: "50rem" }}
          >
            <Card.Body>
              <h2 className text="center" color="blue">
                Contact Me
              </h2>
              <hr />
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label htmlFor="email">Email Address</Form.Label>
                  <Form.Control type="email" name="email" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    textarea
                    id="message"
                    name="message"
                    type="text"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Form.Group>
                <Button type="submit" disabled={state.submitting}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function Contact() {
  return <ContactForm />;
}
export default Contact;
