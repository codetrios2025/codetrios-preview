import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './IndustriesWork.css';

import {
  GraduationCap,
  Stethoscope,
  ShoppingCart,
  Building2,
  Hotel,
  Factory,
  Rocket,
  BriefcaseBusiness,
  Cpu,
} from "lucide-react";

import eduImg from '../../assets/images/edu-img.jpg';
import healthcareImg from '../../assets/images/healthcare-img.jpg';
import ecomImg from '../../assets/images/ecom-img.jpg';
import estateImg from '../../assets/images/estate-img.jpg';
import hospitalityImg from '../../assets/images/hospitality-img.jpg';
import manufacturingImg from '../../assets/images/manufacturing-img.jpg';
import startupsImg from '../../assets/images/startups-img.jpg';
import technologyImg from '../../assets/images/technology-img.jpg';

const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education",
    text: "Learning platforms, school and college websites, student portals.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare",
    text: "Hospital websites, appointment systems, patient management solutions.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce",
    text: "Online stores, secure payments, product catalogs and shopping experiences.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate",
    text: "Property websites, listing portals, lead generation and virtual experiences.",
    img: estateImg,
  },
  {
    number : "05",
    icon: Hotel,
    title: "Hospitality",
    text: "Hotel websites, online booking, guest services and reservation systems.",
    img: hospitalityImg,
  },
  {
    number : "06",
    icon: Factory,
    title: "Manufacturing",
    text: "Business websites, production workflows, automation and operational software.",
    img: manufacturingImg,
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups",
    text: "MVP development, scalable platforms and digital products for growing businesses.",
    img: startupsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: "Corporate & Technology",
    text: "Corporate websites, custom software, web applications and digital transformation.",
    img: technologyImg,
  },
]

export default function IndustriesWork(){
  return(
    <div className="ourIndustries blockPadding" id="Industries">
      <Container>
        <Row>
          <Col>
            <div className="industrie-grid">
              <div className="content">
                <div className='sectionHead'>
                  <div className="tag" data-reveal="up">WHO WE WORK WITH</div>
                  <h2 data-reveal="up">Industries We Serve</h2>
                  <p data-reveal="up">CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
                </div>
              </div>
              <div className="industrie-card">
                {industriesData.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article className="du-card" key={item.number} data-reveal="zoom">
                      <span className="du-number">{item.number}</span>
                      <div className="du-cardView">
                        <img
                          className="du-card-img"
                          src={item.img}
                          alt={`${item.title} website and digital solutions`}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="du-card-overlay" />
                        <span className="du-icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <div className="du-card-content">
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}