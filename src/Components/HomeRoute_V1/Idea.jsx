import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Idea.css';
import {
  Headphones,
  MessagesSquare,
  Phone,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import ContactUs from "./Contact";

export default function Idea (){
  return(
    <div className="ideaSection blockPadding">
      <div className="ideabg"></div>
      <Container>
        <Row>
          <Col md={6}>
            <div className="ideaContent">
              <h2>Have an idea? <span>Let's build something amazing together.</span></h2>
              <p>Share your idea with us and our experts will turn it into a powerful digital product that drives results.</p>
              <div className="value">
                <div className="value-card">
                  <span><MessagesSquare /></span>
                  <div>
                    <h3>Free Consultation</h3>
                    <p>30-min strategy call</p>
                  </div>
                </div>
                <div className="value-card">
                  <span><ShieldCheck /></span>
                  <div>
                    <h3>NDA Protected</h3>
                    <p>Your idea stays yours</p>
                  </div>
                </div>
                <div className="value-card">
                  <span><Zap /></span>
                  <div>
                    <h3>Quick Kickstart</h3>
                    <p>Start within 48 hours</p>
                  </div>
                </div>
                <div className="value-card">
                  <span><Headphones /></span>
                  <div>
                    <h3>Ongoing Support</h3>
                    <p>Growth after launch</p>
                  </div>
                </div>
              </div>
              <ul>
                <li><a href="mailto:info@codetrios.com"><MessagesSquare /> info@codetrios.com</a></li>
                <li><a href="tel:8882309150"><Phone /> +91 8882309150</a></li>
                {/* <li><Globe /></li> */}
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="formArea">
              <div className="formContainer">
                <ContactUs />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}