import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "../CSS/Style.module.css";
//Icon
import NetworkBackground from '../UI/NetworkBackground.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
import ActionButton from '../ActionButton/ActionButton.jsx';
import ProjectCAT from '../ActionButton/ProjectCAT.jsx';
//Components
import portfolio1 from "../../assets/images/portfolio01.webp";
import portfolio2 from "../../assets/images/portfolio02.webp";
import portfolio3 from "../../assets/images/portfolio03.webp";
import portfolio4 from "../../assets/images/portfolio04.webp";
import cretecent from "../../assets/images/portfolio05.webp";
import nhdc from "../../assets/images/namokar_hospital.webp";

const portfolioData = [
  {
    id: 11,
    title: "Namokar Hospital & Diagnostic Centre",
    tag:"Website Design & Development",
    content:"React.js, Node.js",
    image: nhdc,
    link: "",
  },
  {
    id: 1,
    title: "Cretecent",
    tag:"Website Design & Development",
    content:"WordPress",
    image: cretecent,
    link: "",
  },
  {
    id: 2,
    title: "Elite GYM",
    tag:"Website Design & Development",
    content:"React.js , Node.js",
    image: portfolio1,
    link: "",
  },
  {
    id: 3,
    title: "Prime Estate",
    tag:"Website Design & Development",
    content:"React.js , Node.js",
    image: portfolio2,
    link: "",
  },
  {
    id: 4,
    title: "XOPA",
    tag:"Website Design & Development",
    content:"PHP, HTML, CSS, JavaScript",
    image: portfolio3,
    link: "",
  },
  {
    id: 5,
    title: "Anjum Jewels",
    tag:"Website Design & Development",
    content:"PHP, HTML, CSS, JavaScript",
    image: portfolio4,
    link: "",
  },
];


const PortfolioPage = () => {
  return (
    <>
      <SEO page="portfolio" />
      <SchemaGraph
        pageType="portfolio"
        pageName="Web Development Portfolio & Projects | CodeTrios"
        pageDescription="Explore CodeTrios portfolio of websites, web applications, ecommerce platforms, CMS solutions, UI/UX projects, and custom software developed for businesses across different industries."
        pageUrl="https://www.codetrios.com/portfolio"
        breadcrumbs={[
            {
                name: "Home",
                url: "https://www.codetrios.com/"
            },
            {
                name: "Portfolio",
                url: "https://www.codetrios.com/portfolio"
            }
        ]}
        
    />
      <div className='servicesPage innerPageBg portfolioPage'>
        <div className="innerHeroBanner">
            <NetworkBackground />
            <Container>
                <Row>
                <Col>
                    <div className='innerBannerContent'>
                    <div className="tag">Our Portfolio</div>
                    {/* <h1>Web Design, Development & <span>Digital Solutions</span></h1> */}
                    <h1>Web Development Portfolio</h1>
                    <p>Explore selected web design, web development, ecommerce, web application, UI/UX, CMS and custom software projects delivered by CodeTrios for businesses in India and beyond.</p>
                    <div className='actionRow'>
                        <ActionButton />
                    </div>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
        <ProjectCAT />
      </div>
    </>
  );
};

export default PortfolioPage;
