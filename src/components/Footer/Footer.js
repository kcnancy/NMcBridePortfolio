import React from "react";
import Logo from "../images/Navigating-with-Nancy-Final.png";
import { dom } from '@fortawesome/fontawesome-svg-core';
import "react-icons";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome";
import { Container, Row, Column, FooterLink, Heading } from "./FooterStyles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);


dom.watch() // This will kick off the initial replacement of i to svg tags and configure a MutationObserver



const Footer = () => {
  return (
    <Container>
      <Row>
        <Column>
          <h3
            style={{
              color: "white",
              textAlign: "left",
              marginTop: "0px",
              marginLeft: "5px",
            }}
          >
            Social Media
          </h3>
        </Column>

        <Column>
          <Heading>Navigating with Nancy</Heading>
          <FooterLink
            href="http://www.navigatingwithnancy.com/"
            target="_blank"
          >
            <span style={{ marginLeft: "6px" }}>
              <img src={Logo} alt="website logo" style={{ height: 45 }} />
            </span>
          </FooterLink>
        </Column>

        <Column>
          <Heading>GitHub</Heading>
          <FooterLink href="https://github.com/kcnancy" target="_blank">
            <span style={{ marginLeft: "6px" }}>
              <i className="fab fa-github" ></i>
            </span>
          </FooterLink>
        </Column>

        <Column>
          <Heading>Facebook</Heading>
          <FooterLink
            href="https://www.facebook.com/navigatingwithnancy"
            target="_blank"
          >
            <span style={{ marginLeft: "6px" }}>
              <i className="fab fa-facebook"></i>
            </span>
          </FooterLink>
        </Column>

        <Column>
          <Heading>Instagram</Heading>
          <FooterLink
            href="https://www.instagram.com/nancy.mcbride.940/"
            target="_blank"
          >
            <span style={{ marginLeft: "6px" }}>
              <i className="fab fa-instagram"></i>
            </span>
          </FooterLink>
        </Column>

        <Column>
          <Heading>LinkedIn</Heading>
          <FooterLink
            href="https://linkedin.com/in/nancy-mcbride-ks"
            target="_blank"
          >
            <span style={{ marginLeft: "6px" }}>
              <i className="fab fa-linkedin" />
            </span>
          </FooterLink>
        </Column>

        <Column>
          <Heading>Twitter</Heading>
          <FooterLink href="https://twitter.com/navwithnancy" target="_blank">
            <span style={{ marginLeft: "6px" }}>
              <i className="fab fa-twitter"></i>
            </span>
          </FooterLink>
        </Column>
      </Row>
    </Container>

  );
};
export default Footer;