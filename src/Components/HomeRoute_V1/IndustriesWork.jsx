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
    text: "School websites, admission enquiry systems, student portals, ERP solutions, and educational platforms.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare",
    text: "Hospital websites, doctor profiles, appointment enquiry systems, and healthcare-related digital platforms.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: " Ecommerce & Retail",
    text: "Online stores, product catalogues, shopping platforms, and ecommerce integrations.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate",
    text: "Property websites, project listings, enquiry forms, and property management solutions.",
    img: estateImg,
  },
  {
    number : "05",
    icon: Hotel,
    title: "Hospitality",
    text: "Hotel and hospitality websites, service listings, booking enquiries, and customer engagement platforms.",
    img: hospitalityImg,
  },
  {
    number : "06",
    icon: Factory,
    title: "Manufacturing",
    text: "Business websites, product catalogues, enquiry systems, and custom operational software.",
    img: manufacturingImg,
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups",
    text: "Business websites, MVP development, SaaS platforms, and custom digital products.",
    img: startupsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: " Corporate & B2B",
    text: "Corporate websites, business portals, custom applications, and solutions for business operations.",
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
                  <p data-reveal="up">Digital Solutions for Different Industries. Every industry has its own requirements. We work with businesses and organizations to create websites and applications that support their day-to-day needs.</p>
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