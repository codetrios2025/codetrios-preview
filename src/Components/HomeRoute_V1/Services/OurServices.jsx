
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Services.css';
import {
  FiMonitor,
  FiCode,
  FiShoppingCart,
  FiLayers,
  FiPenTool,
  FiCpu,
  FiArrowUpRight,
} from "react-icons/fi";
import Style from '../../CSS/Style.module.css';
import { Link } from "react-router-dom";
import bgWebsite from "../../../assets/svg/bg-website-design.svg";
import bgDev from "../../../assets/svg/bg-web-development.svg";
import bgEcom from "../../../assets/svg/bg-ecommerce.svg";
import bgApps from "../../../assets/svg/bg-web-applications.svg";
import bgDesign from "../../../assets/svg/bg-design-services.svg";
import bgCta from "../../../assets/svg/bg-all-services.svg";
 
const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
const SERVICES = [
  {
    key: "a",
    tag: "Design & Experience",
    title: "Website Design",
    chips: ["Responsive", "UI/UX", "SEO-friendly"],
    href: "/services/website-design",
    img: bgWebsite,
    text: "CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.",
  },
  {
    key: "b",
    tag: "Featured Service",
    title: "Web Development",
    chips: ["Scalable", "Fast", "Clean code"],
    href: "/services/web-development",
    img: bgDev,
    text: "CodeTrios is a web development company in India helping businesses, startups, organizations, and growing brands build fast, secure, and scalable websites and web applications. We combine modern frontend and backend technologies, responsive development, performance optimization, and maintainable architecture to create digital platforms designed around real business requirements.",
  },
  {
    key: "c",
    tag: "Commerce & Growth",
    title: "E-Commerce Solutions",
    href: "/services/ecommerce-solutions",
    img: bgEcom,
    text: "CodeTrios is an ecommerce development company in India helping businesses build secure, scalable, and conversion-focused online stores. We design and develop ecommerce websites around your products, customers, business model, and growth objectives, with a focus on usability, performance, mobile responsiveness, and reliable ecommerce functionality.",
  },
  {
    key: "d",
    tag: "Custom Platforms",
    title: "Web Applications",
    chips: ["Dashboards", "Portals", "SaaS"],
    href: "/services/web-applications",
    img: bgApps,
    text: "CodeTrios is a web application development company in India helping businesses and organizations build secure, scalable, and user-friendly web applications. We develop custom digital platforms that simplify business processes, connect systems, improve productivity, and provide reliable experiences for users across modern devices.",
  },
  {
    key: "e",
    tag: "UI / UX",
    title: "Design Services",
    href: "/services/design-services",
    img: bgDesign,
    text: "CodeTrios is a UI/UX design company in India creating intuitive, responsive, and user-focused experiences for websites, web applications, SaaS platforms, and digital products. Our design process combines user research, information architecture, wireframing, prototyping, visual design, and usability to create digital experiences that are easy to understand and use.",
  },
];

const OurServices = () => {
  return (
    <section className={Style.servicesSection} id="our-services">
      <Container>
        <Row>
          <Col>
            <div className={Style.ctservicesHead}>
              <div className={Style.tag}>WHAT WE DO</div>
              <h2 className={Style.newTitle}>Our <span>Services</span></h2>
              <p>Digital experiences and technology solutions built to help businesses innovate, scale, and grow.</p>
            </div>
            <div className="svc__grid">
              {SERVICES.map((s) => (
                <article key={s.key} className={`card card--${s.key}`}>
                  <div className="card__bg" style={{ "--img": `url(${s.img})` }} aria-hidden="true" />
                  <span className="card__tag">{s.tag}</span>
                  <h3 className="card__title">
                    <a className="card__link" href={s.href}>{s.title}</a>
                  </h3>
                  <p className="card__text">{s.text}</p>
                  {s.chips && (
                    <ul className="card__chips">
                      {s.chips.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                  )}
                  <span className="card__go" aria-hidden="true"><Arrow /></span>
                </article>
              ))}
    
              <article className="card card--f">
                <div className="card__bg" style={{ "--img": `url(${bgCta})` }} aria-hidden="true" />
                <p className="card__text">Web, apps, commerce and design, all under one roof.</p>
                <a className="card__cta card__link" href="/services">
                  See All Services <Arrow />
                </a>
              </article>
            </div>
            {/* <div className={Style.servicesGrid}>
              <div className={Style.cardContainer}>
                <article className={`${Style.card} ${Style.card_a}`}>
                  <span>Design & Experience</span>
                  <h3>Website Design</h3>
                  <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
                  <Link to='/'>Read More <FiArrowUpRight aria-hidden="true" /></Link>
                </article>
                <article className={Style.card}>
                  <span>Featured Service</span>
                  <h3>Web Development</h3>
                  <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
                  <Link to='/'>Read More <FiArrowUpRight aria-hidden="true" /></Link>
                </article>
              </div>
              <div className={`${Style.cardContainer} ${Style.cardColum}`}>
                <article className={Style.card}>
                  <span>Commerce & Growth</span>
                  <h3>E-Commerce Solutions</h3>
                  <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
                  <Link to='/'>Read More <FiArrowUpRight aria-hidden="true" /></Link>
                </article>
                <div className={`${Style.cardContainer} ${Style.twoColm}`}>
                  <article className={`${Style.card} ${Style.btncard}`}>
                    <Link to='/'>See All Services <FiArrowUpRight aria-hidden="true" /></Link>
                  </article>
                  <article className={Style.card}>
                    <span>Custom Platforms</span>
                    <h3>Web Applications</h3>
                    <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
                    <Link to='/'>Read More <FiArrowUpRight aria-hidden="true" /></Link>
                  </article>
                </div>
                <article className={Style.card}>
                  <span>UI / UX</span>
                  <h3>Design Services</h3>
                  <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
                  <Link to='/'>Read More <FiArrowUpRight aria-hidden="true" /></Link>
                </article>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
      {/* <div className={Style.container}>
        <div className={Style.sectionHeader}>
          <span className={Style.eyebrow}>
            <span className={Style.eyebrowDot} />
            WHAT WE DO
          </span>

          <h2>
            Our <span>Services</span>
          </h2>

          <p>
            Digital experiences and technology solutions built to help
            businesses innovate, scale, and grow.
          </p>
        </div>

        <div className={Style.bentoGrid}>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className={`${Style.bentoCard} ${Style[service.className]}`}
                key={service.id}
              >
                <div className={Style.cardTop}>
                  <div className={Style.iconWrap}>
                    <Icon aria-hidden="true" />
                  </div>

                  <span className={Style.cardNumber}>
                    {service.number}
                  </span>
                </div>

                <div className={Style.cardContent}>
                  <span className={Style.cardTag}>{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <a href={service.href} className={Style.readMore}>
                    Read More
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </div>

                <div className={Style.cardGlow} aria-hidden="true" />
              </article>
            );
          })}
        </div>

        <div className={Style.sectionFooter}>
          <a href="/services" className={Style.allServicesButton}>
            See All Services
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default OurServices;
