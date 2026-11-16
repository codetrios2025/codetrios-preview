import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from 'react-bootstrap/Accordion';
import '../mainservices.css';
import '../../AboutusNew/Aboutus.css';
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
  Database,
  Monitor,
  Settings,
  FileText,
  Cloud
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
const webDevelopmentServicesData = [
  { 
    title: "Frontend Development", 
    content: "Build responsive and interactive user interfaces using React.js, JavaScript, HTML5, CSS3 and modern frontend technologies.",
    link: "/",
    icon: BriefcaseBusiness 
  },
  { 
    title: "Backend Development", 
    content: "Develop secure server-side applications, business logic, databases and custom backend functionality.",
    link: "/",
    icon: MonitorSmartphone 
  },
  { 
    title: "Full Stack Development", 
    content: "Get complete web development solutions covering frontend, backend, database management and API integration.",
    link: "/",
    icon: RefreshCw 
  },
  { 
    title: "Custom Web Development", 
    content: "Develop tailored websites and web solutions designed around your specific business requirements.",
    link: "/",
    icon: PanelsTopLeft 
  },
  { 
    title: "Web Application Development", 
    content: "Build feature-rich web applications that simplify business operations and improve productivity.",
    link: "/",
    icon: ShoppingCart 
  },
  { 
    title: "API Development & Integration", 
    content: "Connect websites and applications with third-party services, payment gateways and external systems.",
    link: "/",
    icon: PenTool 
  },
];
//websiteTypes data
const websiteTypes = [
  { 
    title: "Corporate Websites", 
    content: "Scalable corporate websites with structured content, business information and custom functionality.",
    link: "/",
    icon: Building2 
  },
  { 
    title: "Business Websites", 
    content: "Professional websites that showcase services, generate enquiries and support business growth.",
    link: "/",
    icon: Store 
  },
  { 
    title: "Ecommerce Platforms", 
    content: "Online shopping platforms with product management, payment integration and order management.",
    link: "/",
    icon: Images 
  },
  { 
    title: "Educational Portals", 
    content: "School and college websites, admission systems, student portals and educational management platforms.",
    link: "/",
    icon: ShoppingBag 
  },
  { 
    title: "Healthcare Platforms", 
    content: "Hospital websites, doctor profiles, appointment booking systems and healthcare applications.",
    link: "/",
    icon: GraduationCap 
  },
  { 
    title: "Customer Portals", 
    content: "Secure platforms where customers can access information, manage accounts and interact with your business.",
    link: "/",
    icon: HeartPulse 
  },
  { 
    title: "Web-Based Management Systems", 
    content: "Custom applications for managing projects, employees, operations, records and business workflows.",
    link: "/",
    icon: MousePointerClick 
  },
  { 
    title: "CMS-Based Websites",
    content: "Content management solutions using WordPress, Drupal and custom CMS platforms for easy website management.",
    link: "/",
    icon: Blocks 
  },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "We understand your business objectives, technical requirements, target audience and project functionality.",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:
      "We define the project structure, technology stack, database architecture and development roadmap.",
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "We develop responsive interfaces with smooth navigation and interactive user experiences.",
  },
  {
    number: "04",
    title: "Backend & Database Development",
    description:
      "We build server-side functionality, database structures, APIs and required integrations.",
  },
  {
    number: "05",
    title: "Testing & Optimisation",
    description:
      "We test functionality, security, responsiveness, browser compatibility and website performance.",
  },
  {
    number: "06",
    title: "Deployment & Support",
    description:
      "We deploy your application, configure the server and provide ongoing maintenance and technical support.",
  },
];
// Our technology Data
const technologyGroups = [
  {
    title: "Frontend",
    icon: Monitor,
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Settings,
    technologies: ["Node.js", "Express.js", "PHP", "Laravel"],
  },
  {
    title: "CMS",
    icon: FileText,
    technologies: ["WordPress", "Drupal", "Strapi"],
  },
  {
    title: "Databases",
    icon: Database,
    technologies: ["MySQL", "MongoDB"],
  },
  {
    title: "API Integration",
    icon: Cloud,
    technologies: ["REST APIs", "Payment Gateway APIs"],
  }
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
      question: "How much does web development cost in India?",
      answer: "Web development costs depend on project complexity, features, technology, integrations and development requirements. Contact CodeTrios for a project-specific quotation."
  },
  {
      question: "How long does it take to develop a website?",
      answer: "A basic business website may take around 1–3 weeks. Custom web applications and complex platforms may require more development time."
  },
  {
      question: "Which technologies do you use for web development?",
      answer: "We work with React.js, Node.js, Express.js, PHP, MySQL, MongoDB, WordPress, Drupal and other modern web technologies."
  },
  {
      question: "Do you provide custom web application development?",
      answer: "Yes. We develop custom web applications based on business requirements, including dashboards, management systems, customer portals and workflow solutions."
  },
  {
      question: "Can you develop an existing website further?",
      answer: "Yes. We can upgrade existing websites, add new functionality, integrate APIs, improve performance and resolve technical issues."
  },
  {
      question: "Do you provide ecommerce website development?",
      answer: "Yes. We develop ecommerce solutions with product catalogues, shopping cart functionality, payment gateway integration and order management."
  },
  {
      question: "Will my website be responsive and SEO-friendly?",
      answer: "Yes. We follow responsive development practices and SEO-friendly technical structures to support usability, accessibility and search engine visibility."
  },
  {
      question: "Do you provide website maintenance and support?",
      answer: "Yes. We provide ongoing technical support, bug fixes, security updates, functionality improvements and website maintenance."
  },
  {
      question: "Do you provide web development services outside Delhi NCR?",
      answer: "Yes. CodeTrios provides web development services to businesses, startups and organisations across Delhi NCR and other locations in India."
  },
]

//related Services data
const relatedServices = [
  {
    title: "Website Design",
    content:"Create modern, responsive and user-friendly websites that reflect your brand and business identity.",
    link: "/website-design-services",
    linkTitle: "Explore Website Design Services",
  },
  {
    title: "Ecommerce Development",
    content:"Build scalable online stores with product management, secure payments and shopping integrations.",
    link: "/ecommerce-development-services",
    linkTitle: "Explore Ecommerce Development Services",
  },
  {
    title: "Web Application Development",
    content:"Develop custom web applications to automate workflows and simplify business operations.",
    link: "/web-application-development",
    linkTitle: "Explore Web Application Development",
  },  
  {
    title: "UI/UX Design",
    content:"Improve digital experiences with creative UI/UX, interface and graphic design solutions.",
    link: "/ui-ux-design-services",
    linkTitle: "Explore UI/UX Design Services",
  },
  {
    title: "Custom Software Development",
    content:"Get custom software, API integrations and business technology solutions.",
    link: "/custom-software-solutions",
    linkTitle: "Explore Custom Software Solutions",
  },
  {
    title: "GEO & SEO Services",
    content:"Improve search visibility and AI discoverability through technical SEO, content optimisation and GEO strategies.",
    link: "/geo-seo-services",
    linkTitle: "Explore Geo Seo Services",
  },
];


export default function WebDevelopmentService(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="web-development-services" />
      <SchemaGraph
          pageType="service"
          pageName="Web Development Services"
          pageDescription="CodeTrios provides professional web development services in India, building scalable, responsive and high-performance websites and web solutions for businesses."
          pageUrl="https://www.codetrios.com/web-development-services"
          serviceName="Web Development Services"
          serviceDescription="Professional web development services in India for businesses and organizations."
          serviceType="Web Development"
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
                  name: "Web Development Services",
                  url: "https://www.codetrios.com/web-development-services"
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
                  <h1>Web Development Company in <span>India</span></h1>
                  <p>At CodeTrios, we provide professional web development services to help businesses build powerful, secure and scalable digital solutions. We develop business websites, web applications, ecommerce platforms and custom software to your requirements. Our development approach focuses on performance, functionality, responsive experiences, secure coding and SEO ,GEO & AEO  friendly architecture. We work with modern technologies to create websites and applications that support your business today and grow with your future needs with help of AI Technology.</p>
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
                    <div className="tag">WHAT WE DEVELOP</div>
                    <h2>Web Development Services Built Around Your <span>Business Goals</span></h2>
                  </div>
                  <div className='secDetail'>
                    <p>Every business needs reliable technology to operate and grow online. At CodeTrios, we develop websites and web applications that combine functionality, performance and scalability.</p>
                    <p>From frontend development to backend systems and API integrations, we handle different aspects of the development process to deliver solutions that match your business requirements.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {webDevelopmentServicesData.map((item, index) =>{
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
                    <div className="tag">Types of Websites We Develop</div>
                    <h2>Web Development Solutions <br/>for <span>Every Business</span></h2>
                    <p className='halfWidth'>Different businesses require different digital solutions. CodeTrios develops websites and applications based on business goals, industry requirements and technical needs.</p>
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
        {/* Our Process */}
        <div className='services_process blockPadding'> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">Our Process</div>
                      <h2>Our Web Development Process</h2>
                      <p>We follow a structured development process to build reliable, functional and scalable digital solutions.</p>
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
        <div className='technologyStack block-mg-top' aria-labelledby="technology-expertise-title">
          <Container>
            <Row>
              <Col>
                <div className="technology-layout">
                  <div className='sectionHead'>
                    <div className="tag">Technology Expertise</div>
                    <h2>Technologies & Tools We Use for <span>Web Development</span></h2>
                    <p>We use modern development technologies and frameworks to build reliable and scalable web solutions.</p>
                    
                      <Link to="/" className="ct-primery-btn ctBtn">Explore Our Technology Expertise <ArrowUpRight className="icon" aria-hidden="true" /></Link>
                  </div>
                  <div className="technology-grid">
                    <ul className="technology-expertise__groups">
                      {technologyGroups.map(({ title, icon: Icon, technologies }) => (
                        <li className="technology-expertise__group" key={title}>
                          <Icon
                            className="technology-expertise__icon"
                            size={44}
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />

                          <div className="technology-expertise__group-content">
                            <h3 className="technology-expertise__group-title">
                              {title}
                            </h3>

                            <ul className="technology-expertise__tags">
                              {technologies.map((technology) => (
                                <li
                                  className="technology-expertise__tag"
                                  key={technology}
                                >
                                  {technology}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>

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
                              <img src={item.img} alt={`${item.title} web development solutions by CodeTrios`} loading="lazy" decoding="async" width="400" height="480"/>
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
        {/* Related Services */}
        <div className='related-services blockPadding'>
          <Container>
            <Row>
              <Col>
                <div className=''>
                  <div className="sectionHead">
                    <div className="tag">Related Services</div>
                    <h2>Explore Our Other Digital Services</h2>
                    <p>CodeTrios offers a range of digital solutions to help businesses develop, manage and improve their online presence.</p>
                  </div>
                  <div className="benefitGrid">
                    {relatedServices.map((item, index) =>{
                      return(
                        <div className="benefitCard" key={index} data-reveal="up">
                          
                          <h3><Link to={item.link} title={item.linkTitle}>{item.title}</Link></h3>
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