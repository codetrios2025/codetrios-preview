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
  ShoppingCart,
  Building2,
  GraduationCap,
  ArrowUpRight,
  Stethoscope,
  Hotel,
  Factory,
  Rocket,
  Database,
  Monitor,
  Settings,
  FileText,
  Cloud,
  Server,
  Layers,
  Code2,
  AppWindow,
  Workflow,
  Hospital,
  Users,
  LayoutDashboard,
  Cpu,
  Smartphone,
  Gauge,
  SearchCheck,
  ShieldCheck,
  Plug,
  Wrench,Truck 
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
import logisticsImg from '../../../assets/images/logistics-transportation.webp';

const Carousel = CarouselImport.default ?? CarouselImport;

//website Design Services data
const webDevelopmentServicesData = [
  { 
    title: "Frontend Development", 
    content: "Build responsive and interactive user interfaces using React.js, JavaScript, HTML5, CSS3 and modern frontend technologies.",
    icon: Monitor 
  },
  { 
    title: "Backend Development", 
    content: "Develop secure server-side applications, business logic, databases and custom backend functionality.",
    icon: Server 
  },
  { 
    title: "Full Stack Development", 
    content: "Get complete web development solutions covering frontend, backend, database management and API integration.",
    icon: Layers 
  },
  { 
    title: "Custom Web Development", 
    content: "Develop tailored websites and web solutions designed around your specific business requirements.",
    icon: Code2 
  },
  { 
    title: "Web Application Development", 
    content: "Build feature-rich web applications that simplify business operations and improve productivity.",
    icon: AppWindow 
  },
  { 
    title: "API Development & Integration", 
    content: "Connect websites and applications with third-party services, payment gateways and external systems.",
    icon: Workflow 
  },
];
//websiteTypes data
const websiteTypes = [
  { 
    title: "Corporate Websites", 
    content: "Scalable corporate websites with structured content, business information and custom functionality.",
    icon: Building2 
  },
  { 
    title: "Business Websites", 
    content: "Professional websites that showcase services, generate enquiries and support business growth.",
    icon: BriefcaseBusiness 
  },
  { 
    title: "Ecommerce Platforms", 
    content: "Online shopping platforms with product management, payment integration and order management.",
    icon: ShoppingCart 
  },
  { 
    title: "Educational Portals", 
    content: "School and college websites, admission systems, student portals and educational management platforms.",
    icon: GraduationCap 
  },
  { 
    title: "Healthcare Platforms", 
    content: "Hospital websites, doctor profiles, appointment booking systems and healthcare applications.",
    icon: Hospital 
  },
  { 
    title: "Customer Portals", 
    content: "Secure platforms where customers can access information, manage accounts and interact with your business.",
    icon: Users 
  },
  { 
    title: "Web-Based Management Systems", 
    content: "Custom applications for managing projects, employees, operations, records and business workflows.",
    icon: LayoutDashboard 
  },
  { 
    title: "CMS-Based Websites",
    content: "Content management solutions using WordPress, Drupal and custom CMS platforms for easy website management.",
    icon: FileText 
  },
];
//whyChoose data
const whyChooseData = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "We build websites to your business requirements, brand identity, workflows and specific functional needs.",
  },
  {
    icon: Cpu,
    title: "Modern Technology & Frameworks",
    description:
      "Our development expertise includes AI, React.js, Node.js, PHP, WordPress, Drupal, MySQL and MongoDB to deliver solutions suited to different project requirements.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-Friendly Websites",
    description:
      "We develop websites that adapt smoothly to different screen sizes, providing a consistent experience across desktops, tablets and smartphones.",
  },
  {
    icon: Gauge,
    title: "Performance-Focused Development",
    description:
      "We focus on clean code, efficient database operations and optimised website resources to improve loading speed and overall performance.",
  },
  {
    icon: SearchCheck,
    title: "SEO-Friendly Development",
    description:
      "We follow SEO-friendly development practices, including clean URL structures, proper heading hierarchy, mobile responsiveness and technical optimisation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable Solutions",
    description:
      "We implement appropriate security practices and flexible architecture to support changing business requirements and future expansion.",
  },
  {
    icon: Plug,
    title: "API & Third-Party Integration",
    description:
      "We connect websites with payment gateways, CRM systems, ERP platforms and other external services to improve functionality and business efficiency.",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance & Technical Support",
    description:
      "Our support includes bug fixes, website updates, performance improvements, security updates and new feature development as your business grows.",
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
    title: "Frontend Technologies",
    icon: Monitor,
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend Technologies",
    icon: Settings,
    technologies: ["Node.js", "Express.js", "PHP", "Laravel"],
  },
  {
    title: "CMS Technologies",
    icon: FileText,
    technologies: ["WordPress", "Elementor", "Drupal", "Custom CMS", "Strapi"],
  },
  {
    title: "Database Technologies",
    icon: Database,
    technologies: ["MySQL", "MongoDB"],
  },
  {
    title: "APIs & Integrations",
    icon: Cloud,
    technologies: ["REST APIs", "Payment Gateway APIs"],
  },
  {
    title: "Cross-Platform Development",
    icon: Smartphone,
    technologies: [
      "React Native",
    ],
  },
];
//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education & E-Learning",
    text: "School websites, educational portals, online admission systems and learning platforms.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare & Medical",
    text: "Hospital websites, doctor directories, appointment booking systems and healthcare portals.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    text: "Online stores, product catalogues, shopping cart systems and payment gateway integrations.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate & Construction",
    text: "Property listing platforms, real estate websites, project showcases and enquiry management systems.",
    img: estateImg,
  },
  {
    number : "05",
    icon: Hotel,
    title: "Hospitality & Tourism",
    text: "Hotel websites, travel platforms, booking systems and customer enquiry solutions.",
    img: hospitalityImg,
  },
  {
    number : "06",
    icon: Factory,
    title: "Manufacturing & Industrial",
    text: "Company websites, product catalogues, dealer portals and business enquiry platforms.",
    img: manufacturingImg,
  },
  {
    number : "07",
    icon: Truck,
    title: "Logistics & Transportation",
    text: "Logistics websites, shipment tracking platforms and transport management solutions.",
    img: logisticsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: "Corporate & Technology",
    text: "Business websites, service platforms, company portals and technology-based web solutions.",
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
          pageDescription="CodeTrios provides web development services in India, including custom website development, frontend and backend development, ecommerce platforms, web applications, CMS development and API integration for businesses."
          pageUrl="https://www.codetrios.com/web-development-services"
          serviceName="Web Development Services"
          serviceDescription="Professional web development services for businesses in India, covering responsive websites, custom web solutions, web applications, ecommerce development, CMS platforms and third-party integrations."
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
        <div className="innerHeroBanner" aria-labelledby="webdev-hero-title">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">Our Web Development Services</div>
                  <h1 id="webdev-hero-title">Web Development <br/>Company in <span>India</span></h1>
                  <p>At CodeTrios, we provide professional web development services to help businesses build powerful, secure and scalable digital solutions. We develop business websites, web applications, ecommerce platforms and custom software to your requirements. Our development approach focuses on performance, functionality, responsive experiences, secure coding and SEO ,GEO & AEO  friendly architecture. We work with modern technologies to create websites and applications that support your business today and grow with your future needs with help of AI Technology.</p>
                  <div className='actionRow'>
                    <ActionButton />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='weAreBlock blockPadding' aria-labelledby="webdev-services-title">
          <Container>
            <Row>
              <Col>
                <div className='weAreContent'>
                  <div className='sectionHead'>
                    <div className="tag">WHAT WE DEVELOP</div>
                    <h2 id='webdev-services-title'>Web Development Services Built Around Your <span>Business Goals</span></h2>
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
                        <h3>{item.title}</h3>
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
        <div className='service-block-2 border-block blockPadding' aria-labelledby="webdev-types-title">
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">Types of Websites We Develop</div>
                    <h2 id="webdev-types-title">Web Development Solutions <br/>for <span>Every Business</span></h2>
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="webdev-why-choose-title">
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">WHY CHOOSE CODETRIOS</div>
                        <h2 id="webdev-why-choose-title">Why Choose CodeTrios for <span>Web Development</span> Services?</h2>
                        <p>At CodeTrios, we develop websites and web solutions that help businesses build a strong digital presence and stream line their operations. We combine modern technologies, practical functionality and user-focused development to create solutions that support your business growth.</p>
                      </div>
                      <div className="why_features">
                        {whyChooseData.map(({ icon: Icon, title, description }) => (
                          <div className="features_box" key={title}>
                            <div className="features_icon" aria-hidden="true">
                              <Icon size={25} strokeWidth={1.7} />
                            </div>
                            <div className="feature_content">
                              <h3>{title}</h3>
                              <p>{description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Our Process */}
        <div className='services_process blockPadding' aria-labelledby="webdev-process-title"> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">Our Process</div>
                      <h2 id="webdev-process-title">Our Web Development <span>Process</span></h2>
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
        <div className='technologyStack block-mg-top' aria-labelledby="webdev-technology-title">
          <Container>
            <Row>
              <Col>
                <div className="technology-layout">
                  <div className='sectionHead'>
                    <div className="tag">Technology Expertise</div>
                    <h2 id="webdev-technology-title">Modern Technologies We Use for <span>Web Development</span></h2>
                    <p>We use modern development technologies and frameworks to build reliable and scalable web solutions. We select the right technologies based on project requirements, performance, scalability and long-term maintenance.</p>
                    
                      <Link to="/technologies" className="ct-primery-btn ctBtn">Explore Our Technology Expertise <ArrowUpRight className="icon" aria-hidden="true" /></Link>
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
        <div className='services_industries blockPadding block-mg-top' aria-labelledby="webdev-industries-title">
          <Container>
            <Row>
              <Col>
                <div className='services_industries_bg'>
                  <div className='sectionHead'>
                      <div className="tag">WHO WE WORK WITH</div>
                      <h2 id="webdev-industries-title">Industries <span>We Serve</span></h2>
                      <p>Different industries have different digital requirements. CodeTrios provides custom web development services to help businesses build functional, responsive and scalable websites that support their day-to-day operations and business objectives.</p>
                  </div>
                  <div className="industries-section">
                    <Carousel
                        autoPlaySpeed={3000}
                        transitionDuration={600}
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
        <div className='related-services blockPadding' aria-labelledby="webdev-related-services-title">
          <Container>
            <Row>
              <Col>
                <div className=''>
                  <div className="sectionHead">
                    <div className="tag">Related Services</div>
                    <h2 id="webdev-related-services-title">Explore Our Other <span>Digital Services</span></h2>
                    <p>CodeTrios offers a range of digital solutions to help businesses develop, manage and improve their online presence.</p>
                  </div>
                  <div className="benefitGrid">
                    {relatedServices.map((item, index) =>{
                      return(
                        <div className="benefitCard" key={index} data-reveal="up">
                          <h3><Link to={item.link}>{item.title}</Link></h3>
                          <p>{item.content}</p>
                          <Link to={item.link} title={item.linkTitle} aria-label={item.linkTitle} className='benefitGo'><ArrowUpRight /></Link>
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="webdev-faq-title">
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">Frequently Asked Questions</div>
                          <h2 id="webdev-faq-title">Questions About Our Web <span>Development & Digital</span> Services</h2>
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
        <ProjectCAT sectionId="webdev-cta-title" tagId="webdev-cta-title" />
      </div>
    </>
  )
}