import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../mainservices.css';

export default function ResponsiveWebDesign(){
  return(
    <div className='servicesPage innerPageBg blockhead-top-space'>
      <div className='weAreBlock blockPadding'>
        <Container>
          <Row>
            <Col>
              <div className='weAreContent'>
                <div className='sectionHead'>
                  <div className="tag">Responsive Web Design</div>
                  <h1>Responsive Web Design Services Built for <span>Speed, UX & Growth</span></h1>
                </div>
                <div className='secDetail'>
                  <p>Our website design services cover the complete design journey, from understanding your business and audience to creating the visual interface and preparing a scalable design system for development. We design websites for companies, startups, institutions, professional organizations, and growing brands.</p>
                  <p>Our approach focuses on responsive UI/UX, clear information architecture, mobile-first experiences, fast-loading pages, accessibility, SEO-friendly structure, and conversion-focused layouts. The result is a website that is easier for visitors to navigate and easier for businesses to manage and grow.</p>
                  <p>Depending on your requirements, CodeTrios can design corporate websites, business websites, ecommerce stores, landing pages, WordPress websites, and redesigned digital experiences. Once the design is finalized, our web development services can turn the approved designs into fast, responsive, and scalable websites.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>    
  )
}