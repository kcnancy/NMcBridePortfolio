  
import React from "react";
import { Container, Row, Card, Col, Image, Button } from "react-bootstrap";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core";
import  "@fortawesome/free-solid-svg-icons";
import nancypic from '../images/nancypic2.jpg'


const Home = () => {
  return (
    <>
      <Container className="d-flex vh-75">
        <Row>
          <Col md={12}>
            <Card className="mb-3 border-info">
              <Card.Body>
                <Image
                  alt="profile"
                  height="200"
                  width="150"
                  className="text=center img-fluid mx-auto"
                  src={nancypic}
                  rounded
                />

                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  <p>
                    I have a successful track record of leading development and
                    deployment teams. Taking new concepts and technology from an
                    idea to a fully functioning, deployed product is what I
                    enjoy the most. The building of teams and watching them
                    bring out the best in one another ranks high on my best
                    accomplishments list! I have a passion for technology and
                    travel, especially cruising. I plan to use my new skills to
                    bring the two together.
                  </p>
                  <p>
                    I enjoy spending time with family and friends and am looking
                    forward to the time that we can all gather and travel safely
                    once again.
                  </p>
                  <p>
                    As a travel advisor I like to make travel affordable and
                    easy for my clients. Using technology to simplify travel, to
                    save time with routine tasks and give my clients more time
                    for fun and new experiences on their trips is my goal!
                  </p>
                </Card.Text>
              </Card.Body>
              <a href="https://docs.google.com/document/d/e/2PACX-1vQHO8eA4djybb3h0nQsCla1GAu80Q0V9jwChjB87xXNNBs93lt6j4-pE-lj9EnSKhe0g3kmm8ADbY4i/pub" target="_blank" rel="noreferrer">
               <Button variant="primary" size="lg" block border-radius="85%">
              Resume
              </Button></a>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;