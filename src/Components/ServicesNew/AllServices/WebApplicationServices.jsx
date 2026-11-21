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
  GraduationCap,
  HeartPulse,
  ArrowUpRight,
  Stethoscope,
  Hotel,
  Factory,
  Rocket,
  Monitor,
  Settings,
  Database,
  Cloud,
  AppWindow,
  Workflow,
  Building2,
  Users,
  ChartNoAxesCombined,
  Plug,
  ContactRound,
  Network,
  Kanban,
  ShoppingCart,
  UsersRound,
  CalendarCheck,
  Package,
  MousePointerClick,
  Layers,
  ShieldCheck,
  Blocks,
  Gauge,
  Headset 
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
const webAppServicesData = [
  { 
    title: "Custom Web Application Development", 
    content: "Build applications with customised features and functionality designed around your business requirements.",
    link: "/",
    icon: AppWindow 
  },
  { 
    title: "Business Process Automation", 
    content: "Automate repetitive tasks, reduce manual work and improve everyday business operations.",
    link: "/",
    icon: Workflow 
  },
  { 
    title: "Enterprise Web Application Development", 
    content: "Develop scalable applications to manage business operations, teams, workflows and organisational processes.",
    link: "/",
    icon: Building2 
  },
  { 
    title: "Customer Portal Development", 
    content: "Create secure customer portals for account management, information access and online services.",
    link: "/",
    icon: Users 
  },
  { 
    title: "Dashboard Development", 
    content: "Get interactive dashboards to monitor business activities, track performance and manage important information.",
    link: "/",
    icon: ChartNoAxesCombined 
  },
  { 
    title: "API Development & Integration", 
    content: "Connect applications with third-party platforms, payment gateways and external business systems.",
    link: "/",
    icon: Plug 
  },
];
//websiteTypes data
const websiteTypes = [
  { 
    title: "CRM Applications", 
    content: "Manage customer information, sales activities, leads and business relationships through customised CRM solutions.",
    link: "/",
    icon: ContactRound 
  },
  { 
    title: "ERP Applications", 
    content: "Manage business processes, resources, operations and organisational information from one platform.",
    link: "/",
    icon: Network 
  },
  { 
    title: "Project Management Applications", 
    content: "Organise projects, assign tasks, track progress and manage team activities efficiently.",
    link: "/",
    icon: Kanban 
  },
  { 
    title: "School Management Applications", 
    content: "Manage admissions, student records, attendance, academic information and school administration.",
    link: "/",
    icon: GraduationCap 
  },
  { 
    title: "Healthcare Applications", 
    content: "Develop appointment systems, patient management platforms and healthcare administration solutions.",
    link: "/",
    icon: HeartPulse 
  },
  { 
    title: "Ecommerce Applications", 
    content: "Build customised online shopping platforms with product management, customer accounts and order processing.",
    link: "/",
    icon: ShoppingCart 
  },
  { 
    title: "Employee Management Applications", 
    content: "Manage employee records, attendance, tasks, leave requests and organisational workflows.",
    link: "/",
    icon: UsersRound 
  },
  { 
    title: "Booking & Appointment Applications",
    content: "Create online booking platforms with appointment scheduling, availability management and customer notifications.",
    link: "/",
    icon: CalendarCheck 
  },
  { 
    title: "Inventory Management Applications",
    content: "Track stock, manage products, monitor inventory and streamline business operations.",
    link: "/",
    icon: Package 
  },
  { 
    title: "Custom Business Applications",
    content: "Develop application solutions based on your specific workflows, business goals and functional requirements.",
    link: "/",
    icon: BriefcaseBusiness 
  },
];
//whyChoose data
const whyChooseData = [
  {
    icon: BriefcaseBusiness,
    title: "Business-Focused Solutions",
    description:"Every application is planned around your business processes, users and specific functional requirements.",
  },
  {
    icon: MousePointerClick,
    title: "User-Friendly Interface",
    description:"We create intuitive, responsive interfaces that make applications easier to navigate across desktop, tablet and mobile devices.",
  }, 
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:"Our applications are built with a flexible architecture that can support new features, users and changing business needs.",
  }, 
  {
    icon: ShieldCheck,
    title: "Secure Application Development",
    description:"We implement appropriate authentication, role-based access and security practices to help protect application data.",
  }, 
  {
    icon: Blocks,
    title: "Modern Technology Stack",
    description:"We use technologies such as React.js, Node.js, PHP, MySQL and MongoDB based on project requirements.",
  }, 
  {
    icon: Plug,
    title: "Seamless API Integration",
    description:"Connect your application with payment gateways, CRM, ERP and other third-party platforms through API integrations.",
  }, 
  {
    icon: Gauge,
    title: "Performance-Focused Development",
    description:"We focus on efficient code, database optimisation and responsive application performance.",
  }, 
  {
    icon: Headset,
    title: "Ongoing Maintenance & Support",
    description:"Our support can include bug fixes, updates, performance improvements and new feature development as your application evolves.",
  }, 
];
//technology data
const technologyGroups = [
  {
    title: "Frontend Development",
    icon: Monitor,
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend Development",
    icon: Settings,
    technologies: ["Node.js", "Express.js", "PHP", "Laravel", "Drupal"],
  },
  {
    title: "Database Technologies",
    icon: Database,
    technologies: ["MongoDB", "MySQL"],
  },
  {
    title: "Integration & Infrastructure",
    icon: Cloud,
    technologies: ["REST APIs", "Payment Gateways", "Cloud Services"],
  },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "We understand your business objectives, application requirements, users and expected functionality.",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:
      "We define the application structure, technology stack, database design and development roadmap.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "We create user-friendly layouts, wireframes and interfaces for a smooth application experience.",
  },
  {
    number: "04",
    title: "Application Development",
    description:
      "We develop frontend interfaces, backend functionality, databases and required integrations.",
  },
  {
    number: "04",
    title: "Testing & Optimisation",
    description:
      "We test application functionality, security, performance and compatibility across different devices and browsers.",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "We deploy the application, configure the server and provide ongoing technical support and maintenance.",
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
      question: "What is web application development?",
      answer: "Web application development involves creating browser-based applications that allow users to access services, manage information and perform business tasks online."
  },
  {
      question: "How much does custom web application development cost in India?",
      answer: "The cost depends on features, complexity, technology, integrations and project requirements. Contact CodeTrios for a customised project estimate."
  },
  {
      question: "What types of web applications does CodeTrios develop?",
      answer: "We develop CRM systems, ERP solutions, dashboards, customer portals, school management systems, booking platforms, inventory systems and custom business applications."
  },
  {
      question: "Which technologies are used for web application development?",
      answer: "We use React.js, Node.js, Express.js, PHP, MongoDB, MySQL, JavaScript and other modern technologies depending on project requirements."
  },
  {
      question: "Can you develop web applications according to specific business requirements?",
      answer: "Yes. We develop custom web applications with features, workflows and functionality tailored to your business operations."
  },
  {
      question: "What is the difference between a website and a web application?",
      answer: "A website mainly provides information about a business, product or service, while a web application allows users to interact with data and perform tasks such as bookings, payments, account management and reporting."
  },
  {
      question: "Can a web application be accessed on mobile devices?",
      answer: "Yes. We develop responsive web applications that work across smartphones, tablets and desktop devices through a web browser."
  },
  {
      question: "Can you integrate APIs and third-party services?",
      answer: "Yes. We integrate payment gateways, CRM systems, external APIs, email services and other business tools to connect different platforms."
  },
  {
      question: "How long does it take to develop a web application?",
      answer: "Development time depends on application complexity and required features. A basic application may take a few weeks, while larger business applications may require several months."
  },
  {
      question: "Are web applications secure?",
      answer: "We follow security-conscious development practices, including authentication, access control, input validation and secure API communication, based on project requirements."
  },
  {
      question: "Do you provide web application maintenance and support?",
      answer: "Yes. We provide ongoing maintenance, bug fixes, security updates, performance optimisation and technical support."
  },
  {
      question: "Do you provide web application development services outside Delhi NCR?",
      answer: "Yes. CodeTrios works with startups, businesses and organisations across Delhi NCR and throughout India."
  },
]

//related Services data
const relatedServices = [
  {
    title: "Website Design",
    content:"Create professional, responsive and conversion-focused websites with modern UI design and intuitive user experiences.",
    link: "/website-design-services",
    linkTitle: "Explore Website Design Services",
  },
  {
    title: "Ecommerce Development",
    content:"Build high-performing online stores with responsive design, secure payments and ecommerce integrations.",
    link: "/ecommerce-development-services",
    linkTitle: "Explore Ecommerce Development Services",
  },
  {
    title: "Web Application Development",
    content:"Develop secure and scalable web applications that streamline business processes and improve digital experiences.",
    link: "/web-application-development",
    linkTitle: "Explore Web Application Development",
  },  
  {
    title: "UI/UX Design",
    content:"Design intuitive, accessible and user-focused interfaces that improve usability, engagement and conversions.",
    link: "/ui-ux-design-services",
    linkTitle: "Explore UI/UX Design Services",
  },
  {
    title: "Custom Software Development",
    content:"Develop custom software solutions that automate workflows, solve business challenges and support long-term growth.",
    link: "/custom-software-solutions",
    linkTitle: "Explore Custom Software Solutions",
  },
];


export default function WebApplicationService(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO  page="web-application-development" />
      <SchemaGraph
          pageType="service"
          pageName="Web Application Development Services"
          pageDescription="CodeTrios provides custom web application development services in India for businesses that need scalable, secure and high-performance web applications."
          pageUrl="https://www.codetrios.com/web-application-development"
          serviceName="Web Application Development"
          serviceDescription="Custom web application development services for businesses and organizations."
          serviceType="Web Application Development"
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
                  name: "Web Application Development",
                  url: "https://www.codetrios.com/web-application-development"
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
                  <div className="tag">WEB APPLICATION DEVELOPMENT SERVICES</div>
                  <h1>Web Application Development Company in India</h1>
                  <p>At CodeTrios, we develop custom web applications that help businesses streamline operations, automate workflows and improve productivity. We build secure, responsive and scalable applications tailored to your business requirements. from customer portals and management dashboards to enterprise applications and custom business software, we create solutions that simplify complex processes and support business growth.</p>
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
                    <div className="tag">OUR WEB APPLICATION DEVELOPMENT SERVICES</div>
                    <h2>Web Application Development Services Built Around Your <span>Business Goals</span></h2>
                  </div>
                  <div className='secDetail'>
                    <p>Every business has unique operational needs. At CodeTrios, we develop custom web applications that solve business challenges, improve efficiency and deliver better digital experiences.</p>
                    <p>Our solutions combine modern frontend technologies, powerful backend systems, database management and API integrations.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {webAppServicesData.map((item, index) =>{
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
        <div className='service-block-2 border-block blockPadding'>
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">APPLICATIONS WE BUILD</div>
                    <h2>Web Application Solutions <br/>for <span>Every Business</span></h2>
                    <p className='halfWidth'>We develop web applications for different business requirements, industries and operational needs.</p>
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
                        <div className="tag">WHY CHOOSE CODETRIOS</div>
                        <h2>Why Choose CodeTrios for <span>Web Application</span> Development?</h2>
                        <p>At CodeTrios, we build web applications around your business goals, user requirements and workflows. From custom dashboards and customer portals to complex business applications, we focus on creating solutions that are easy to use, secure, scalable and ready to grow with your business.</p>
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
        {/* website design Technologies & Tools  */}
        <div className='technologyStack' aria-labelledby="technology-expertise-title">
          <Container>
            <Row>
              <Col>
                <div className="technology-layout">
                  <div className='sectionHead'>
                    <div className="tag">Technologies & Tools</div>
                    <h2>Technologies & Tools We Work With</h2>
                    <p>We use modern technologies and frameworks to develop powerful, reliable and scalable web applications.</p>
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
        {/* Our Process */}
        <div className='services_process blockPadding block-mg-top'> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">Our Process</div>
                      <h2>Our Web Application Development <span>Process</span></h2>
                      <p>We follow a structured development process to deliver reliable, secure and scalable web applications.</p>
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
                      <h2>Section missing Industries <span>We Serve</span></h2>
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
        {/* Related Services */}
        <div className='related-services blockPadding'>
          <Container>
            <Row>
              <Col>
                <div className=''>
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
                          <h2>Questions About Our <span>Web Application</span> Services</h2>
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