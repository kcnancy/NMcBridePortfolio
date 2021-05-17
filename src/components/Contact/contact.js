import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Container,
  Row,
  Card,
  Col,
  Button,
  Form,
  } from "react-bootstrap";

 
function Contact() {
  const [state, handleSubmit] = useForm("xoqpbnpr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Container className="vh-100">
      <Col md={12}>
        <Row className="h100 justify-content-center align-items-center">
          <Card
            className=" mb-3 border-info"
            style={{ color: "blue", width: "50rem" }}>
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
        </Row>
      </Col>

    </Container>
  );
}

export default Contact;

