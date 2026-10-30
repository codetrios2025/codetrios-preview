import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Services.css';
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";
import bgWebsite from "../../assets/svg/bg-website-design.svg";
import bgDev from "../../assets/svg/bg-web-development.svg";
import bgEcom from "../../assets/svg/bg-ecommerce.svg";
import bgApps from "../../assets/svg/bg-web-applications.svg";
import bgDesign from "../../assets/svg/bg-design-services.svg";

const OurServices = () => {
  return (
    <section className="servicesSection" id="our-services">
      <Container>
        <Row>
          <Col>
            <div className='sectionHead'>
              <div className="tag" data-reveal="up">WHAT WE DO</div>
              <h2 data-reveal="up">Our <span>Services</span></h2>
              <p className="halfWidth" data-reveal="up">At Codetrios, our work doesn’t stop at launch. We provide continuous website maintenance, updates, security monitoring, and performance optimization to ensure long-term success.</p>
            </div>
            <div className="servicesGrid">
              <div className={`cardContainer cardRowTop`}>
                <article className={`card card-a`} data-reveal="up">
                  <div className="cardBg" style={{ "--img": `url(${bgWebsite})` }} aria-hidden="true" />
                  <span>Design & Experience</span>
                  <h3><Link to='/'>Website Design</Link></h3>
                  <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
                  <span className="cardGo"><ArrowUpRight aria-hidden="true" /></span>
                  <ul className="cardChips">
                    <li>Responsive</li>
                    <li>UI/UX</li>
                    <li>SEO-friendly</li>
                  </ul>
                </article>
                <article className={`card card-b`} data-reveal="up">
                  <div className="cardBg" style={{ "--img": `url(${bgDev})` }} aria-hidden="true" />
                  <span>Featured Service</span>
                  <h3>Web Development</h3>
                  <p>CodeTrios is a web development company in India helping businesses, startups, organizations, and growing brands build fast, secure, and scalable websites and web applications. We combine modern frontend and backend technologies, responsive development, performance optimization, and maintainable architecture to create digital platforms designed around real business requirements.</p>
                  <span className="cardGo"><ArrowUpRight aria-hidden="true" /></span>
                  <ul className="cardChips">
                    <li>Responsive</li>
                    <li>UI/UX</li>
                    <li>SEO-friendly</li>
                  </ul>
                </article>
              </div>
              <div className={`cardContainer cardRowBottom`}>
                <article className={`card card-c`} data-reveal="up">
                  <div className="cardBg" style={{ "--img": `url(${bgEcom})` }} aria-hidden="true" />
                  <span>Commerce & Growth</span>
                  <h3>E-Commerce Solutions</h3>
                  <p>CodeTrios is an ecommerce development company in India helping businesses build secure, scalable, and conversion-focused online stores. We design and develop ecommerce websites around your products, customers, business model, and growth objectives, with a focus on usability, performance, mobile responsiveness, and reliable ecommerce functionality.</p>
                  <span className="cardGo"><ArrowUpRight aria-hidden="true" /></span>
                </article>
                <div className={`cardContainer cardUpDown`}>
                  <article className={`card card-e`} data-reveal="up">
                    <div className="cardBg" style={{ "--img": `url(${bgApps})` }} aria-hidden="true" />
                    <span>Custom Platforms</span>
                    <h3>Web Applications</h3>
                    <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
                    <span className="cardGo"><ArrowUpRight aria-hidden="true" /></span>
                  </article>
                  <article className={`card btncard card-d`} data-reveal="zoom">
                    <Link to='/' className="btnStyle">See All Services <ArrowRight aria-hidden="true" /></Link>
                  </article>
                </div>
                <article className={`card card-f`} data-reveal="up">
                  <div className="cardBg" style={{ "--img": `url(${bgDesign})` }} aria-hidden="true" />
                  <span>UI / UX</span>
                  <h3>Design Services</h3>
                  <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
                  <span className="cardGo"><ArrowUpRight aria-hidden="true" /></span>
                </article>
              </div>
              <div className="mobService btncard">
                  <Link to='/' className="btnStyle">See All Services <ArrowRight aria-hidden="true" /></Link>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;