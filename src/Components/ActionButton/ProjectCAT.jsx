import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactUs from "../HomeRoute_V1/Contact";
import {
  ArrowUpRight,
} from "lucide-react";

import './projetCAT.css';

export default function ProjectCAT() {
  const [isOPen, setIsopen] = useState(false);
      const formOpenHandler=()=>{
          setIsopen(true);
      }
      const formCloseHandler=()=>{
          setIsopen(false);
      }
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
                <button type='button' onClick={formOpenHandler} className="ctBtn ct-primery-btn">Discuss Your Project <ArrowUpRight size={19} aria-hidden="true" /></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {isOPen && 
          <div className="formPop">
              <div className="formElem">
                  <button type='button' onClick={formCloseHandler} className="closeBtn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path vector-effect="non-scaling-stroke" d="M18 6 6 18"/><path vector-effect="non-scaling-stroke" d="m6 6 12 12"/></svg>
                  </button>
                  <ContactUs />
              </div>
          </div>
      }
    </div>
  )
}