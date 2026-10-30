import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Idea.css';
import {
  ClipboardList,
  Code2,
  FlaskConical,
  Globe,
  Headphones,
  Lightbulb,
  MessagesSquare,
  PenTool,
  Phone,
  Rocket,
  ShieldCheck,
  Star,
  Zap,
} from 'lucide-react'
import ContactUs from "./Contact";

export default function Idea (){
  return(
    <div className="ideaSection">
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
                    <h5>Free Consultation</h5>
                    <p>30-min strategy call</p>
                  </div>
                </div>
                <div className="value-card">
                  <span><ShieldCheck /></span>
                  <div>
                    <h5>NDA Protected</h5>
                    <p>Your idea stays yours</p>
                  </div>
                </div>
                <div className="value-card">
                  <span><Zap /></span>
                  <div>
                    <h5>Quick Kickstart</h5>
                    <p>Start within 48 hours</p>
                  </div>
                </div>
                <div className="value-card">
                  <span><Headphones /></span>
                  <div>
                    <h5>Ongoing Support</h5>
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