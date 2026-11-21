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
  PanelsTopLeft,
  ShoppingCart,
  Building2,
  GraduationCap,
  HeartPulse,
  MousePointerClick,
  ArrowUpRight,
  Stethoscope,
  Hotel,
  Factory,
  Rocket,
  Users,
  Smartphone,
  Workflow,
  LayoutDashboard,
  Cloud,
  ChartNoAxesCombined,
  ContactRound,
  UserRoundCheck,
  Route,
  Component,
  Accessibility,
  Target,
  WandSparkles,
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
import {
  FigmaIcon,
  PhotoshopIcon,
  IllustratorIcon,
  AIToolsIcon,
  DesignSystemIcon,
} from "../SVGIcon";
//UI/UX Services data
const UIUXServicesData = [
  { 
    title: "User Interface (UI) Design", 
    content: "Create clean, modern and visually appealing interfaces that reflect your brand identity.",
    link: "/",
    icon: PanelsTopLeft 
  },
  { 
    title: "User Experience (UX) Design", 
    content: "Improve how users interact with your website or application through simple and intuitive experiences.",
    link: "/",
    icon: Users 
  },
  { 
    title: "Website UI/UX Design", 
    content: "Design engaging website layouts with clear navigation, organised content and user-friendly interactions.",
    link: "/",
    icon: MonitorSmartphone 
  },
  { 
    title: "Mobile App UI/UX Design", 
    content: "Create intuitive mobile app experiences with easy navigation and consistent interface elements.",
    link: "/",
    icon: Smartphone 
  },
  { 
    title: "Wireframing & Prototyping", 
    content: "Plan page structures and create interactive prototypes before the development process begins.",
    link: "/",
    icon: FigmaIcon 
  },
  { 
    title: "Dashboard & Web Application Design", 
    content: "Design organised dashboards and application interfaces that make complex tasks easier to manage.",
    link: "/",
    icon: LayoutDashboard 
  },
];
//UI/UX Types data
const UiUxTypes = [
  { 
    title: "Business Websites", 
    content: "Professional website interfaces that help visitors understand your services and take action.",
    link: "/",
    icon: BriefcaseBusiness 
  },
  { 
    title: "E-commerce Platforms", 
    content: "Easy-to-use shopping experiences with clear product layouts and smooth navigation.",
    link: "/",
    icon: ShoppingCart 
  },
  { 
    title: "Mobile Applications", 
    content: "User-friendly interfaces designed for mobile screens and everyday interactions.",
    link: "/",
    icon: Smartphone 
  },
  { 
    title: "Educational Platforms", 
    content: "Simple interfaces for school websites, learning platforms and student portals.",
    link: "/",
    icon: GraduationCap 
  },
  { 
    title: "Healthcare Platforms", 
    content: "Clear and accessible designs for hospital websites, appointment systems and patient portals.",
    link: "/",
    icon: HeartPulse 
  },
  { 
    title: "SaaS Applications", 
    content: "Intuitive interfaces for software products, subscription platforms and online tools.",
    link: "/",
    icon: Cloud 
  },
  { 
    title: "Admin Dashboards", 
    content: "Well-organised dashboards for managing data, users and business activities.",
    link: "/",
    icon: ChartNoAxesCombined 
  },
  { 
    title: "Customer Portals",
    content: "Easy-to-navigate interfaces that help customers access services and information.",
    link: "/",
    icon: ContactRound 
  },
];
//whyChoose data
const whyChooseData = [
  {
    icon: UserRoundCheck,
    title: "User-Centered Design",
    description:"Design decisions based on user needs, behaviour and project objectives.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive & Mobile-First Design",
    description:"Interfaces designed to provide consistent experiences across different screen sizes.",
  },
  {
    icon: Route,
    title: "Intuitive User Journeys",
    description:"Clear navigation and structured interactions that help users complete tasks.",
  },
  {
    icon: Component,
    title: "Consistent Design Systems",
    description:"Reusable interface components, typography, colours and design guidelines.",
  },
  {
    icon: Accessibility,
    title: "Accessibility-Focused Interfaces",
    description:"Design considerations that help make digital experiences more inclusive.",
  },
  {
    icon: MousePointerClick,
    title: "Interactive Prototyping",
    description:"Interactive prototypes to review layouts, navigation and user interactions.",
  },
  {
    icon: Target,
    title: "Business-Focused Design",
    description:"Interface decisions aligned with business goals and intended user actions.",
  },
  {
    icon: WandSparkles,
    title: "Design Refinement",
    description:"Design improvements based on feedback, reviews and usability considerations.",
  },
 
];
// Tools we use
const toolsData = [
  {
    icon: FigmaIcon ,
    title: "Figma",
    description: "UI design, wireframing and interactive prototyping.",
  },
  {
    icon: PhotoshopIcon ,
    title: "Adobe Photoshop",
    description: "Image editing and visual assets.",
  },
  {
    icon: IllustratorIcon ,
    title: "Adobe Illustrator",
    description: "Icons, illustrations and vector graphics.",
  },
  {
    icon: AIToolsIcon ,
    title: "AI",
    description: "Using multiple ai tool .",
  },
  {
    icon: DesignSystemIcon ,
    title: "Design Systems",
    description: "Consistent colours, typography and reusable interface components.",
  },
  // {
  //   icon: RichResultsIcon ,
  //   title: "Responsive Design",
  //   description: "Interfaces adapted for mobile, tablet and desktop screens.",
  // },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Understanding Requirements",
    description:"We understand your business goals, target audience and project requirements.",
  },
  {
    number: "02",
    title: "User Research & Planning",
    description:"We study user needs and plan the website or application structure.",
  },
  {
    number: "03",
    title: "Wireframing",
    description:"We create basic layouts to organise content, navigation and key features.",
  },
  {
    number: "04",
    title: "UI Design",
    description:"We develop attractive interfaces using suitable colours, typography, layouts and design elements.",
  },
  {
    number: "05",
    title: "Prototyping & Review",
    description:"We create interactive prototypes and collect feedback to improve the design.",
  },
  {
    number: "06",
    title: "Final Design & Handover",
    description:"We prepare and deliver the approved design assets and specifications for development.",
  },
];
//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education",
    text: "School websites, student portals and learning platforms.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare",
    text: "Hospital websites, doctor profiles and patient interfaces.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce",
    text: "Online stores and product shopping experiences.",
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
    icon: Rocket,
    title: "Startups",
    text: "MVP designs, product interfaces and prototypes.",
    img: startupsImg,
  },
  {
    number : "07",
    icon: BriefcaseBusiness,
    title: "Corporate & Technology",
    text: "Business websites, dashboards and software interfaces.",
    img: technologyImg,
  },
  {
    number : "08",
    icon: Factory,
    title: "Finance & Consulting",
    text: "Client portals, reporting dashboards and business applications.",
    img: manufacturingImg,
  },
]
//FAQ data
const faqs = [
  {
      question: "What is UI/UX design?",
      answer: "UI design focuses on the visual appearance of a website or application, while UX design focuses on how users interact with it."
  },
  {
      question: "Why is UI/UX design important for a business?",
      answer: "Good UI/UX design improves usability, makes navigation easier and helps visitors interact with your digital products."
  },
  {
      question: "What is the difference between UI and UX design?",
      answer: "UI focuses on visual elements such as colours, buttons and layouts. UX focuses on the overall user journey and ease of use."
  },
  {
      question: "Does CodeTrios provide website UI/UX design?",
      answer: "Yes. We design user-friendly interfaces for business websites, corporate websites, ecommerce platforms and other digital products."
  },
  {
      question: "Do you design mobile application interfaces?",
      answer: "Yes. We create mobile app UI/UX designs with responsive layouts and intuitive navigation."
  },
  {
      question: "What tools do you use for UI/UX design?",
      answer: "We primarily use Figma, along with Adobe Photoshop, Illustrator and other design tools based on project needs."
  },
  {
      question: "Do you provide wireframes and prototypes?",
      answer: "Yes. We create wireframes and interactive prototypes to help plan and review the user experience before development."
  },
  {
      question: "Can you redesign an existing website or application?",
      answer: "Yes. We can improve existing interfaces with modern layouts, better navigation and a more consistent user experience."
  },
  {
      question: "How long does a UI/UX design project take?",
      answer: "The timeline depends on the number of screens, features and project complexity. We define the schedule after understanding your requirements."
  },
  {
      question: "Do you provide UI/UX design services outside Delhi NCR?",
      answer: "Yes. CodeTrios works with businesses across Delhi NCR and other locations in India."
  },
  
]

//related Services data
const relatedServices = [
  {
    title: "Website Design",
    content:"Creative UI/UX, graphic and interface design that strengthens your brand identity.",
    link: "/website-design-services",
    linkTitle: "Explore Website Design Services",
  },
  {
    title: "Web Development",
    content:"Custom, responsive and scalable websites built with modern frontend and backend technologies.",
    link: "/web-development-services",
    linkTitle: "Explore Web Development Services",
  },
  {
    title: "Web Applications",
    content:"Powerful web applications designed to simplify business operations and improve productivity.",
    link: "/web-application-development",
    linkTitle: "Explore Web Application Development",
  },
    {
    title: "eCommerce Solutions",
    content:"Feature-rich online stores with product management, secure payments and seamless shopping experiences.",
    link: "/ecommerce-development-services",
    linkTitle: "Explore Ecommerce Development Services",
  },  
  {
    title: "Custom Software Development",
    content:"Custom software, API integrations and technology solutions tailored to business needs.",
    link: "/custom-software-solutions",
    linkTitle: "Explore Custom Software Solutions",
  },
  {
    title: "Digital Strategy",
    content:"Strategic digital solutions that help businesses improve their online presence and achieve growth.",
    link: "/digital-strategy-consulting",
    linkTitle: "Explore Digital Strategy",
  },       
];



export default function UiUxDesignService(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="ui-ux-design-services" />
      <SchemaGraph
          pageType="service"
          pageName="UI UX Design Services"
          pageDescription="CodeTrios provides UI UX design services focused on intuitive, responsive and user-friendly digital experiences for websites and web applications."
          pageUrl="https://www.codetrios.com/ui-ux-design-services"
          serviceName="UI UX Design Services"
          serviceDescription="Professional UI/UX design services in India for websites, web applications and digital products."
          serviceType="UI UX Design"
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
                  name: "UI UX Design Services",
                  url: "https://www.codetrios.com/ui-ux-design-services"
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
                  <div className="tag">UI/UX DESIGN SERVICES</div>
                  <h1>Professional UI/UX Design Services in India</h1>
                  <p>At CodeTrios, we create user-friendly and visually engaging digital experiences that make websites and applications easy to use. Our UI/UX design services focus on understanding user needs, improving navigation and creating interfaces that support your business goals. From website interfaces to mobile applications, we design digital experiences that are simple, consistent and effective.</p>
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
                    <div className="tag">OUR UI/UX DESIGN SERVICES</div>
                    <h2>UI/UX Design Services Built Around Your Business</h2>
                  </div>
                  <div className='secDetail'>
                    <p>Content Missing</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {UIUXServicesData.map((item, index) =>{
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
                    <div className="tag">DIGITAL PRODUCTS WE DESIGN</div>
                    <h2>UI/UX Design Solutions for <span>Every Business</span></h2>
                    <p className='halfWidth'>Content missing</p>
                  </div>
                  <div className="benefitGrid">
                    {UiUxTypes.map((item, index) =>{
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
                        <h2>Why Businesses Choose CodeTrios for <span>UI/UX Design</span></h2>
                        <p>CodeTrios combines user experience strategy, interface design, responsive layouts, design systems, and business objectives to create digital experiences that are intuitive, consistent, accessible, and aligned with measurable business goals.</p>
                        <p>User-centered design approach, Mobile-first and responsive layouts, Conversion-focused user journeys, Consistent design systems, Wireframes and interactive prototypes, Modern and scalable UI components, Performance-aware design decisions, Designs aligned with business goals</p>
                      </div>
                      <div className="why_features">
                        Content missing
                        {/* {whyChooseData.map(({ icon: Icon, title, description }) => (
                          <div className="features_box" key={title}>
                            <div className="features_icon" aria-hidden="true">
                              <Icon size={25} strokeWidth={1.7} />
                            </div>
                            <div className="feature_content">
                              <h3>{title}</h3>
                              <p>{description}</p>
                            </div>
                          </div>
                        ))} */}
                      </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Tools we work */}
        <div className='whyChooseUs'>
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">OUR DESIGN TOOLKIT</div>
                          <h2>UI/UX Design <span>Tools & Technologies</span> We Use</h2>
                          <p>Content missing</p>
                        </div>
                        <div className="why_features">
                          {toolsData.map(({ icon: Icon, title, description }) => (
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
        <div className='services_process blockPadding'> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">Our Process</div>
                      <h2>Our UI/UX Design <span>Process</span></h2>
                      <p>Content missing</p>
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
                      <p>Content missing</p>
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
                          
                          <h3><Link to={item.link}>{item.title}</Link></h3>
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
                          <h2>Questions About Our <span>UI/UX Design</span> Services</h2>
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