import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Aboutpage.css';

export default function AboutusPage(){
  return(
    <section className='aboutScreen'>
      <div className="innerHeroBanner">
        <Container>
          <Row>
            <Col>
              <div className='innerBannerContent'>
                <h1>Full-Stack <span>Web Development</span><br/> that Drives <span>Business Growth</span></h1>
                <p>CodeTrios is a web development and digital solutions company in India helping businesses build, improve, and scale their digital presence. We provide website design, web development, ecommerce development, web application development, custom software development, UI/UX design, digital strategy consulting, web hosting, and SEO & GEO services.</p>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}