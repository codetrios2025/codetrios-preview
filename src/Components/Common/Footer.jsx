import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/codetrios_logo.svg";
import Style from "../CSS/Header.module.css";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin   } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../ServicesNew/SVGIcon";
const Footer = () => {
  return (
    <footer className={Style.footer}>
      <Container>
        <Row>
          <Col md={3}>
            <div className={Style.info}>
              <div className={Style.footerlogo}>
              <img
                src={Logo}
                alt="CodeTrios Software Development Company"
                loading="lazy"
                decoding="async"
                width="180"
                height="30"
              />
              </div>
              <p>
                Custom Web Development, Mobile App Development, MERN Stack, SaaS
                Products, AI Automation, and Ongoing Maintenance Services.
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61581161434863"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CodeTrios Facebook"
                  >
                    <FacebookIcon  />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/codetrios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CodeTrios Instagram"
                  >
                    <InstagramIcon  />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/code-trio-90ba31385/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CodeTrios LinkedinIn"
                  >
                    <LinkedinIcon  />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={9}>
            <div className={Style.footerBox}>
              <div className={Style.box}>
                <h4>Quick Link</h4>
                <nav aria-label="Footer Navigation">
                  <ul>
                    {/* <li><Link to="/" title="Home">Home</Link></li> */}
                    <li><Link to="/about-us" title="About">About</Link></li>
                    <li><Link to="/services" title="Services">Services</Link></li>
                    <li><Link to="/technologies" title="Technologies">Technologies</Link></li>
                    <li><Link to="/portfolio" title="Portfolio">Portfolio</Link></li>
                    <li><Link to="/contact-us" title="Contact Us">Contact</Link></li>
                  </ul>
                </nav>
              </div>
              <div className={Style.box}>
                <h4>Design & Experience</h4>
                <ul className={Style.boxSpace}>
                  <li><Link to="/website-design-services" title="website design services">Website Design Services</Link></li>
                  <li><Link to="/ui-ux-design-services" title="ui ux design services">UI/UX Design Services</Link></li>
                </ul>
                <h4>Development & Software</h4>
                <ul>
                  <li><Link to="/web-development-services" title="web-development-services">Web Development Services</Link></li>
                  <li><Link to="/web-application-development" title="web application development">Web Application Development</Link></li>
                  <li><Link to="/ecommerce-development-services" title="ecommerce development services">eCommerce Development</Link></li>
                  <li><Link to="/custom-software-solutions" title="custom software solutions">Custom Software Solutions</Link></li>
                  <li><Link to="/ai-automation-solutions" title="AI & Automation Solutions">AI & Automation Solutions</Link></li>
                </ul>
              </div>
              <div className={`${Style.box} ${Style.multiBox}`}>
                <div className={Style.inbox}>
                  <h4>Growth & Support</h4>
                  <ul className={Style.boxSpace}>
                    <li><Link to="/geo-seo-services" title="Geo & SEO Services">SEO, GEO & AEO Services</Link></li>
                    <li><Link to="/digital-strategy-consulting" title="digital strategy consulting">Digital Strategy & Consulting</Link></li>
                    <li><Link to="/website-maintenance-services" title="Website Maintenance Services">Website Maintenance Services</Link></li>
                    <li><Link to="/web-hosting-services" title="web hosting services">Web Hosting Services</Link></li>
                  </ul>
                </div>
                <div className={Style.inbox}>
                  <h4>Contact Info</h4>
                  <address className={Style.address}>
                    <p>
                      <Mail className={Style.icon} />
                      <a href="mailto:info@codetrios.com">info@codetrios.com</a>
                    </p>
                    <p>
                      <Phone className={Style.icon} />{" "}
                      <a href="tel:8882309150">+91 8882309150</a>
                    </p>
                    <p>
                      <MapPin className={Style.icon} />{" "}
                      <span>
                        Codetrios 711 Sector -31, Faridabad,
                        <br /> Haryana, India - 121003
                      </span>
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={Style.copyRight}>
        <small>
          ©{new Date().getFullYear()} Codetrios. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
