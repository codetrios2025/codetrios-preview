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
    <section className="servicesSection blockPadding" id="our-services">
      <Container>
        <Row>
          <Col>
            <div className='sectionHead'>
              <div className="tag" data-reveal="up">WHAT WE DO</div>
              <h2 data-reveal="up">Our <span>Services</span></h2>
              <p className="halfWidth" data-reveal="up">At CodeTrios, we keep your website running smoothly with regular updates, security checks, and performance improvements. Our website maintenance services help your business stay secure, fast, and up to date. </p>
            </div>
            <div className="servicesGrid">
              <div className={`cardContainer cardRowTop`}>
                <article className={`card card-a`} data-reveal="up">
                  <div className="cardBg" style={{ "--img": `url(${bgWebsite})` }} aria-hidden="true" />
                  <span>Design & Experience</span>
                  <h3><Link to='/'>Website Design</Link></h3>
                  <p>CodeTrios is a website design company in Delhi NCR helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites with new and elegant designs. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals in one solution .</p>
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
                  <p>Codetrios  provide custom website development that automate your business tasks, work smoothly on any device, and help your team save time and work faster, helping businesses, startups, organizations, and growing brands build fast, secure and scalable websites and web applications.  </p>
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
                  <p>CodeTrios is an ecommerce development company in Delhi NCR helping businesses build secure, scalable, and conversion-focused online stores. We design and develop ecommerce websites around your products, where user can easily view your offers ,product , new launch ,easily order where payment will be secure . we will give you best platform for your product or business .</p>
                  <span className="cardGo"><ArrowUpRight aria-hidden="true" /></span>
                </article>
                <article className={`card card-f`} data-reveal="up">
                  <div className="cardBg" style={{ "--img": `url(${bgDesign})` }} aria-hidden="true" />
                  <span>UI / UX</span>
                  <h3>Design Services</h3>
                  <p>CodeTrios is a UI/UX design company in Delhi NCR creating unique, responsive, and user-focused experiences for websites, web applications, SaaS platforms, and digital products. Our design process combines user research, information architecture, wireframing, visual design, and usability to create digital experiences that are easy to understand and use.</p>
                  <span className="cardGo"><ArrowUpRight aria-hidden="true" /></span>
                </article>
                <article className={`card card-e`} data-reveal="up">
                  <div className="cardBg" style={{ "--img": `url(${bgApps})` }} aria-hidden="true" />
                  <span>Custom Platforms</span>
                  <h3>GEO & SEO Services</h3>
                  <p>CodeTrios helps businesses increase their ranks across all search engines and AI-powered platforms through  LLM Optimization ,AI SEO & GEO Services. We optimize your website, content, and digital authority so your business becomes the trusted answer in Google Search, AI Overviews, ChatGPT, Gemini, Claude, Perplexity, and all AI-driven search experiences. </p>
                  <span className="cardGo"><ArrowUpRight aria-hidden="true" /></span>
                </article>
              </div>
              <div className="btncard">
                  <Link to='/' className="ctBtn ct-primery-btn">See All Services <ArrowUpRight aria-hidden="true" /></Link>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;