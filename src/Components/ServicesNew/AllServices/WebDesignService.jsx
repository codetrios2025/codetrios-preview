import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from 'react-bootstrap/Accordion';
import '../mainservices.css';
//icon
import {
  BriefcaseBusiness,
  MonitorSmartphone,
  RefreshCw,
  PanelsTopLeft,
  ShoppingCart,
  PenTool,
  Building2,
  Store,
  Images,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  MousePointerClick,
  Blocks,
  ArrowUpRight,
  Stethoscope,
  Hotel,
  Factory,
  Rocket,
} from "lucide-react";
//componetnts
import NetworkBackground from '../../UI/NetworkBackground';
import SEO from '../../SEO/websiteMeta';
import SchemaGraph from '../../SEO/Schema/SchemaGraph';
import ActionButton from '../../ActionButton/ActionButton';
import ProjectCAT from '../../ActionButton/ProjectCAT';

//Images
import eduImg from '../../../assets/images/edu-img.jpg';
import healthcareImg from '../../../assets/images/healthcare-img.jpg';
import ecomImg from '../../../assets/images/ecom-img.jpg';
import estateImg from '../../../assets/images/estate-img.jpg';
import hospitalityImg from '../../../assets/images/hospitality-img.jpg';
import manufacturingImg from '../../../assets/images/manufacturing-img.jpg'; 
import startupsImg from '../../../assets/images/startups-img.jpg';
import technologyImg from '../../../assets/images/technology-img.jpg';
const Carousel = CarouselImport.default ?? CarouselImport;

//website Design Services data
const websiteDesignServices = [
  { 
    title: "Business Website Design", 
    content: "Professional websites that communicate your services, establish credibility and encourage enquiries.",
    link: "/",
    icon: BriefcaseBusiness 
  },
  { 
    title: "Responsive Website Design", 
    content: "Layouts and interactions designed to work effectively across mobile, tablet and desktop screens.",
    link: "/",
    icon: MonitorSmartphone 
  },
  { 
    title: "Website Redesign", 
    content: "Modernize an existing website with improved navigation, visual design, content hierarchy and user experience.",
    link: "/",
    icon: RefreshCw 
  },
  { 
    title: "Landing Page Design", 
    content: "Focused landing pages designed around specific campaigns, services, products or conversion goals.",
    link: "/",
    icon: PanelsTopLeft 
  },
  { 
    title: "Ecommerce Website Design", 
    content: "Customer-friendly storefront experiences with intuitive product discovery, shopping flows and responsive layouts.",
    link: "/",
    icon: ShoppingCart 
  },
  { 
    title: "UI/UX Website Design", 
    content: "Wireframes, user journeys, prototypes and interface designs that make websites easier to navigate and use.",
    link: "/",
    icon: PenTool 
  },
];
//websiteTypes data
const websiteTypes = [
  { 
    title: "Corporate Websites", 
    content: "Structured websites for established organizations and larger businesses.",
    link: "/",
    icon: Building2 
  },
  { 
    title: "Small Business Websites", 
    content: "Websites designed for companies that need a professional digital presence.",
    link: "/",
    icon: Store 
  },
  { 
    title: "Portfolio Websites", 
    content: "Websites designed for companies that need a professional digital presence.",
    link: "/",
    icon: Images 
  },
  { 
    title: "Ecommerce Websites", 
    content: "Websites designed for companies that need a professional digital presence.",
    link: "/",
    icon: ShoppingBag 
  },
  { 
    title: "Educational Websites", 
    content: "Websites designed for companies that need a professional digital presence.",
    link: "/",
    icon: GraduationCap 
  },
  { 
    title: "Healthcare Websites", 
    content: "Websites designed for companies that need a professional digital presence.",
    link: "/",
    icon: HeartPulse 
  },
  { 
    title: "Landing Pages", 
    content: "Websites designed for companies that need a professional digital presence.",
    link: "/",
    icon: MousePointerClick 
  },
  { 
    title: "CMS-Based Websites",
    content: "Websites designed for companies that need a professional digital presence.",
    link: "/",
    icon: Blocks 
  },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business goals, audience, and requirements to create a clear project roadmap.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "We design intuitive interfaces and develop scalable, high-performance digital solutions.",
  },
  {
    number: "03",
    title: "Review & Launch",
    description:
      "We test, refine, and launch your solution to ensure quality, performance, and reliability.",
  },
  {
    number: "04",
    title: "Support & Maintenance",
    description:
      "We provide ongoing technical support, updates, security monitoring, and performance optimization to keep your digital solutions running smoothly.",
  },
];
//industries Data
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
//FAQ data
const faqs = [
  {
      question: "How much does website design cost in India?",
      answer: "Website design costs in India vary depending on the number of pages, design complexity, functionality, content requirements, integrations, and customization involved. A simple business website generally requires a smaller design scope than an ecommerce website or a complex digital platform. CodeTrios evaluates your requirements and recommends a website design approach based on your business goals and project scope."
  },
  {
      question: "How long does it take to design a website?",
      answer: "Website design timelines depend on the website's size, number of pages, design complexity, functionality, content requirements, and feedback cycles. A straightforward business website usually requires less design time than a large ecommerce website or custom digital product. CodeTrios determines the expected timeline during the project planning stage."
  },
  {
      question: "Does CodeTrios provide responsive website design?",
      answer: "Yes. CodeTrios designs responsive websites that work across desktops, tablets, and smartphones. Our design process considers mobile usability, navigation, content hierarchy, readability, and consistent user experiences across different screen sizes."
  },
  {
      question: "Can CodeTrios redesign an existing website?",
      answer: "Yes. CodeTrios provides website redesign and revamp services for businesses with outdated, difficult-to-use, or poorly performing websites. A redesign can improve visual design, information architecture, usability, responsive behavior, accessibility, performance, and conversion-focused layouts."
  },
  {
      question: "Does CodeTrios design WordPress websites?",
      answer: "Yes. CodeTrios provides WordPress website design for businesses, organizations, and projects that need a flexible content management system. WordPress websites can be designed with responsive layouts, user-friendly content management, SEO-friendly architecture, and requirements specific to the business."
  },
  {
      question: "Does CodeTrios provide ecommerce website design?",
      answer: "Yes. CodeTrios provides ecommerce website design for online stores, including Shopify, WooCommerce, and custom ecommerce requirements. The design focuses on product discovery, navigation, mobile usability, checkout experiences, customer trust, and conversion."
  }
];

//related Services data
const relatedServices = [
  { 
    title: "Web Development", 
    content: "Build fast, secure and scalable websites with modern frontend, backend and API development.",
    link: "/",
  },
  { 
    title: "Ecommerce Development", 
    content: "Build high-performing online stores with responsive design, secure payments and ecommerce integrations.",
    link: "/",
  },
  { 
    title: "UI/UX Design", 
    content: "Design intuitive, accessible and user-focused interfaces that improve usability, engagement and conversions.",
    link: "/",
  },
  { 
    title: "SEO & GEO Services", 
    content: "Improve search engine visibility and AI search discoverability with technical SEO, content optimization and GEO strategies.",
    link: "/",
  },
];


export default function WebsiteDesignService(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="website-design-services" />
      <SchemaGraph
          pageType="service"
          pageName="Website Design Company in India"
          pageDescription="CodeTrios provides website design services in India, creating responsive, user-friendly, SEO-friendly, and conversion-focused websites for businesses, startups, organizations, and growing brands."
          pageUrl="https://www.codetrios.com/website-design-services"
          serviceName="Website Design Services"
          serviceDescription="Website design services in India for businesses, startups, organizations, and growing brands."
          serviceType="Website Design"
          breadcrumbs={[
              {
                  name: "Home",
                  url: "https://www.codetrios.com/"
              },
              {
                  name: "Services",
                  url: "https://www.codetrios.com/services"
              },
              {
                  name: "Website Design Services",
                  url: "https://www.codetrios.com/website-design-services"
              }
          ]}
          faqs={faqs}
      />
      <div className='servicesPage innerPageBg allService'>
        <div className="innerHeroBanner">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">Our Services</div>
                  <h1>Website Design Company in <span>India</span></h1>
                  <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands create modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to build websites around real business goals.</p>
                  <div className='actionRow'>
                    <ActionButton />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='weAreBlock blockPadding'>
          <Container>
            <Row>
              <Col>
                <div className='weAreContent'>
                  <div className='sectionHead'>
                    <div className="tag">WHAT WE DESIGN</div>
                    <h2>Website Design Services Built Around Your <span>Business Goals</span></h2>
                  </div>
                  <div className='secDetail'>
                    <p>Our website design services cover the complete design journey, from understanding your business and audience to creating the visual interface and preparing a scalable design system for development. We design websites for companies, startups, institutions, professional organizations, and growing brands.</p>
                    <p>Our approach focuses on responsive UI/UX, clear information architecture, mobile-first experiences, fast-loading pages, accessibility, SEO-friendly structure, and conversion-focused layouts. The result is a website that is easier for visitors to navigate and easier for businesses to manage and grow.</p>
                    <p>Depending on your requirements, CodeTrios can design corporate websites, business websites, ecommerce stores, landing pages, WordPress websites, and redesigned digital experiences. Once the design is finalized, our web development services can turn the approved designs into fast, responsive, and scalable websites.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {websiteDesignServices.map((item, index) =>{
                    const IconComponent = item.icon;
                    return(
                      <div className="benefitCard" key={index} data-reveal="up">
                        <div className="cardTop">
                          <div className="iconWrap">
                            <IconComponent aria-hidden="true" />
                          </div>
                        </div>
                        <h3><Link to={item.link}>{item.title}</Link></h3>
                        <p>{item.content}</p>
                        <span className='benefitGo'><ArrowUpRight /></span>
                      </div>
                    )
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='service-block-2 border-block blockPadding'>
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">Types of Websites We Design</div>
                    <h2>Website Design for Every <span>Business Need</span></h2>
                    <p className='halfWidth'>Different businesses need different website experiences. CodeTrios designs websites around their purpose, content, audience and functionality.</p>
                  </div>
                  <div className="benefitGrid">
                    {websiteTypes.map((item, index) =>{
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
                  </div>
                </Col>
              </Row>
            </Container>
        </div>

        {/* Our Process */}
        <div className='services_process blockPadding'> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">Our Process</div>
                      <h2>A clear path from <span>idea to launch</span></h2>
                      <p>CodeTrios designs and develops digital solutions for businesses and organizations across multiple industries. From education portals and healthcare websites to ecommerce platforms and business management systems, we tailor our approach to industry-specific requirements.</p>
                  </div>
                  <div className='services_process_grid'>
                    {processData.map((item) => {
                      return (
                        <div className="process_box box-icon-hover" key={item.number}>
                          <span className="number">
                              {item.number}
                          </span>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Industries Section */}
        <div className='services_industries blockPadding' aria-labelledby="industries-heading">
          <Container>
            <Row>
              <Col>
                <div className='services_industries_bg'>
                  <div className='sectionHead'>
                      <div className="tag">WHO WE WORK WITH</div>
                      <h2>Industries <span>We Serve</span></h2>
                      <p>CodeTrios designs and develops digital solutions for businesses and organizations across multiple industries. From education portals and healthcare websites to ecommerce platforms and business management systems, we tailor our approach to industry-specific requirements.</p>
                  </div>
                  <div className="industries-section">
                    <Carousel
                        autoPlaySpeed={1500}
                        transitionDuration={500}
                        responsive={RelatedServicesSlide}
                        arrows={false}
                        autoPlay={true}
                        pauseOnHover={true}
                        infinite
                        itemClass="industries-carousel-item"
                    >
                      {industriesData.map((item) => {
                        const Icon = item.icon;
                        return (
                          <article className="industry-card" key={item.number}>
                            <div className="industry-card-image">
                              <img src={item.img} alt={`${item.title} industry`} loading="lazy" decoding="async" width="400" height="480"/>
                            </div>
                            <div className="industry-card-overlay" />
                            {/* <span className="industry-card-number">{item.number}</span> */}
                            <div className="industry-card-content">
                              <div className="industry-card-icon"><Icon size={24} strokeWidth={1.7} /></div>
                              <h3>{item.title}</h3>
                              <p>{item.text}</p>
                            </div>
                          </article>
                        );
                      })}
                    </Carousel>
                </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Why businesses choose */}
        <div className='whyChooseUs block-mg-top'>
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">Why businesses choose CodeTrios</div>
                        <h2>Digital Solutions Built Around Your {" "}<span>Goals</span></h2>
                        <p>CodeTrios combines strategy, design, development, deployment, hosting, optimization, and technical support to help businesses build and improve their digital presence. Our solutions are planned around your goals, users, technology requirements, and long-term growth.</p>
                      </div>
                      <div className="why_features">
                        
                      </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Related Services */}
        <div className='related-services'>
          <Container>
            <Row>
              <Col>
                <div className='inner-bg'>
                  <div className="sectionHead">
                    <div className="tag">Related Services</div>
                    <h2>Explore Our Other Digital Services</h2>
                  </div>
                  <div className="benefitGrid">
                    {relatedServices.map((item, index) =>{
                      return(
                        <div className="benefitCard" key={index} data-reveal="up">
                          
                          <h3><Link to={item.link} title={item.link}>{item.title}</Link></h3>
                          <p>{item.content}</p>
                          <span className='benefitGo'><ArrowUpRight /></span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Frequently Asked Questions */}
        <div className='whyChooseUs block-mg-top'>
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">Frequently Asked Questions</div>
                          <h2>Questions About Our Web <span>Development & Digital</span> Services</h2>
                        </div>
                        <div className="why_features">
                          <Accordion defaultActiveKey="0" className='faqStyle'>
                              {faqs.map((item, index) =>{
                                  return(
                                      <Accordion.Item eventKey={index.toString()} key={index}>
                                          <Accordion.Header>{item.question}</Accordion.Header>
                                          <Accordion.Body>
                                              <p>{item.answer}</p>
                                          </Accordion.Body>
                                      </Accordion.Item>
                                  )
                              })}
                          </Accordion>
                        </div>
                    </div>
                </Col>
              </Row>
            </Container>
        </div>
        <ProjectCAT />
      </div>
    </>
  )
}