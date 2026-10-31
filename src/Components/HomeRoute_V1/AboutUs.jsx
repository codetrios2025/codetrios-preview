import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './About.css';
import webImage from '../../assets/images/growth_about.webp';
import { Sparkles, ArrowUpRight,
  Code2,
  Workflow,
  Handshake,
  ShieldCheck, } from "lucide-react";
import { Link } from 'react-router-dom';
const AboutUs = ({data}) =>{

    const whyChooseData = [
      {
        title: "End-to-End Development",
        icon: Sparkles,
        content: "Design, full-stack engineering, and launch—handled by one expert team.",
      },
      {
        title: "SEO & Geo-Targeted Growth",
        icon: Code2,
        content: "Built to rank higher on search engines and attract local customers.",
      },
      {
        title: "Continuous Care & Security",
        icon: Workflow,
        content: "24/7 performance tracking, updates, and maintenance long after launch.",
      },
      {
        title: "Responsive Mobile Design",
        icon: Handshake,
        content: "Seamless, ultra-fast performance across every device and screen size.",
      },
      {
        title: "AI chatboat Development",
        icon: ShieldCheck,
        content: "We build chatboat where customer can chat and response according to there requirement.",
      },
    ];

    //console.log(aboutContent)
    return(
        <div className="newAbout">
            <Container>
                <Row>
                    <Col md={5}>
                        {/* figure wipes open; the image inside settles from a zoom and drifts slightly while you scroll */}
                        <figure data-reveal="clip" data-reveal-duration="1.3s">
                            <img src={webImage} className='imgFull' alt='Full-Stack Web Development that Drives Business Growth' width="1536" height="1024" loading="lazy" data-parallax="0.01" />
                        </figure>
                    </Col>
                    <Col md={7}>
                        <div className="aboutContent">
                          <div className='sectionHead'>
                            <div className="tag" data-reveal="up">About Codetrios</div>
                            <h2 data-reveal="up">High-Performance Web Development That Grow Your Business</h2>
                          </div>
                            <p data-reveal="up">Codetrios is a <span>Best Website Development Company in Delhi/NCR</span>, ensures that the whole technical part is flawlessly managed and compliments the creative design of web pages with fast loading speed and error-free functioning.</p>
                            <p data-reveal="up">A Creative Web Designing Company in Delhi makes sure your website has a responsive, trendy design, with customers placed in the centre to give a Best representation to your business brand. </p>
                            <p>We are professional eCommerce platforms, digital marketing, software development and web development With AI chatboat , helping businesses strengthen their online presence, improve customer engagement, and achieve sustainable growth in your business </p>
                            <p>Our work doesn’t stop at launch. We provide continuous website maintenance, updates, security monitoring, and performance optimization to ensure long-term success. </p>
                            {/* <ul>
                                <li data-reveal="left">Top Digital Service: <span>We craft future-ready websites with creative finesse.</span></li>
                                <li data-reveal="left">Seamless Digital Transformation: <span>We craft websites that redefine your online presence.</span></li>
                                <li data-reveal="left">Responsive Design Excellence: <span>Your website, accessible and engaging on any device.</span></li>
                            </ul> */}
                            <Link to="about-us" className="ctBtn ct-primery-btn" data-reveal="zoom">Explore More <ArrowUpRight className="icon" /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="whyUsSec">
              <Container>
                <Row>
                  <Col>
                    <div className="whyHead">
                      <div className='sectionHead'>
                        <div className="tag" data-reveal="up">Beneftis</div>
                        <h2 data-reveal="up">Why Choose <span>Codetrios?</span></h2>
                        <p className='halfWidth' data-reveal="up">At Codetrios, our work doesn’t stop at launch. We provide continuous website maintenance, updates, security monitoring, and performance optimization to ensure long-term success.</p>
                        {/* <h2>Built for Your Vision. <span>Engineered for Growth.</span></h2> */}
                      </div>
                      <div className="benefitGrid">
                        {whyChooseData.map((item, index) =>{
                          const IconComponent = item.icon;
                          return(
                            <div className="benefitCard" key={index} data-reveal="up">
                              <div className="cardTop">
                                <div className="iconWrap">
                                  <IconComponent aria-hidden="true" />
                                </div>
                              </div>
                              <h3>{item.title}</h3>
                              <p>{item.content}</p>
                            </div>
                          )
                        })}
                        <div className="projectBtn" data-reveal="zoom">
                          <button type='button' className="ctBtn ct-primery-btn">Start A Project Now <ArrowUpRight className="icon" /></button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
        </div>
    )
}

export default AboutUs;