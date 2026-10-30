import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
} from "lucide-react";

import './projetCAT.css';

export default function ProjectCAT() {
  return (
    <div className="projectCAT">
      <Container>
        <Row>
          <Col>
            <div className="projectCAT__container">
              <div className='sectionHead'>
                <div className="tag">Let’s work together</div>
                <h2>Let’s build your <span>next chapter.</span></h2>
                <p>Share your ideas with us, and we’ll help you turn them into a practical digital solution for your business.</p>
              </div>
              <div className="projectCAT__btn">
                <Link to="/contact-us" title="Discuss Your Project" className="ctBtn ct-primery-btn">Discuss Your Project <ArrowUpRight size={19} aria-hidden="true" /></Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}