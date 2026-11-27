import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//Icon
import NetworkBackground from '../UI/NetworkBackground.jsx';
import { Mail, Phone, MapPin   } from "lucide-react";
import ContactUs from "../HomeRoute_V1/Contact.jsx";


const ContactUsPage = () => {
  return (
    <>
      <div className='servicesPage innerPageBg'>
        <div className="innerHeroBanner">
            <NetworkBackground />
            <Container>
                <Row>
                <Col>
                    <div className='innerBannerContent'>
                      <div className="tag">Contact Us</div>
                      <h1>Let's Talk About <br/>Your <span>Next Project</span>.</h1>
                      <p>Have an idea, need a new website, or looking for the right technology partner? We're here to understand your requirements and help you bring your vision to life.</p>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
        <div className='service-block-2 blockPadding contactPage' aria-labelledby="contact-title">
          <Container>
            <Row>
              <Col>
                <div className="contactBox">
                    <div className="box">
                        <span><Mail /></span>
                        <a href="mailto:info@codetrios.com">info@codetrios.com</a>
                    </div>
                    <div className="box">
                        <span><Phone /></span>
                        <a href="tel:8882309150">+91 8882309150</a>
                    </div>
                    <div className="box">
                        <span><MapPin /></span>
                        <p>Codetrios 711 Sector -31, Faridabad, <br/>Haryana, India - 121003</p>
                    </div>
                </div>
                <ContactUs />
              </Col>
            </Row>
          </Container>
      </div>
      </div>
    </>
  );
};

export default ContactUsPage;
