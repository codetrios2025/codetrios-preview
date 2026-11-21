import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from 'react-bootstrap/Accordion';
import '../mainservices.css';
//icon
import {
  ShoppingBag,
  ArrowUpRight,
  Atom,
  Server,
  Code,
  Database,
  CodeXml,
  Webhook,
  Store,
  PanelsTopLeft,
  CreditCard,
  ShoppingCart,
  Plug,
  UserRound,
  Building2,
  ShoppingBasket,
  Shirt,
  Sofa,
  Repeat,
  Settings2,
  Smile,
  ShieldCheck,
  SearchCheck,
  LayoutDashboard,
  PlugZap,
  MonitorSmartphone,
  Headset,
  ChartNoAxesCombined,
  Laptop,
  Utensils,
  HeartPulse,
  Armchair,
  Sparkles,
  Factory,
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

//E-commerce Development Services data
const commerceServicesData = [
  { 
    title: "Custom E-commerce Website Development", 
    content: "We develop customised ecommerce websites with features and functionality tailored to your products, customers and business requirements.",
    link: "/",
    icon: ShoppingBag 
  },
  { 
    title: "Online Store Development", 
    content: "Launch your online store with organised product categories, attractive product pages, shopping carts and easy checkout.",
    link: "/",
    icon: Store 
  },
  { 
    title: "E-commerce UI/UX Design", 
    content: "Create engaging shopping experiences with intuitive navigation, responsive layouts and user-friendly interfaces.",
    link: "/",
    icon: PanelsTopLeft 
  },
  { 
    title: "Payment Gateway Integration", 
    content: "Enable convenient online payments by integrating suitable payment gateways into your ecommerce website.",
    link: "/",
    icon: CreditCard 
  },
  { 
    title: "Shopping Cart & Checkout Development", 
    content: "Make purchasing easier with streamlined shopping carts, secure checkout flows and simplified order placement.",
    link: "/",
    icon: ShoppingCart 
  },
  { 
    title: "E-commerce API Integration", 
    content: "Connect your online store with payment services, shipping providers, inventory systems and other business applications.",
    link: "/",
    icon: Plug 
  },
];
//E-commerce Solutions Type data
const websiteTypes = [
  { 
    title: "B2C E-commerce Websites", 
    content: "Online shopping platforms that allow businesses to sell products directly to customers.",
    link: "/",
    icon: UserRound 
  },
  { 
    title: "B2B E-commerce Platforms", 
    content: "Business-to-business ecommerce solutions with customer accounts, bulk orders and customised pricing.",
    link: "/",
    icon: Building2 
  },
  { 
    title: "Multi-Vendor Marketplace Development", 
    content: "Online marketplaces where multiple sellers can list and manage their products.",
    link: "/",
    icon: Store 
  },
  { 
    title: "Retail & Wholesale Ecommerce Websites", 
    content: "Digital storefronts for retail and wholesale businesses with product catalogues and order management.",
    link: "/",
    icon: ShoppingBasket 
  },
  { 
    title: "Fashion & Apparel Ecommerce Stores", 
    content: "Online stores for clothing, footwear, accessories and fashion products.",
    link: "/",
    icon: Shirt 
  },
  { 
    title: "Electronics & Furniture Ecommerce Stores", 
    content: "Product-focused ecommerce websites with organised categories, product details and enquiry or purchase options.",
    link: "/",
    icon: Sofa 
  },
  { 
    title: "Grocery & Food Ecommerce Stores", 
    content: "Online ordering platforms for grocery stores, food retailers and local businesses.",
    link: "/",
    icon: ShoppingBasket 
  },
  { 
    title: "Subscription-Based Ecommerce Stores", 
    content: "Ecommerce solutions for recurring products, subscription plans and repeat customer orders.",
    link: "/",
    icon: Repeat 
  },
];
//whyChoose data
const whyChooseData = [
  {
    icon: Settings2,
    title: "Customised E-commerce Solutions",
    description:"We build ecommerce websites around your products, business model and specific requirements.",
  },
  {
    icon: Smile,
    title: "User-Friendly Shopping Experience",
    description:"We create simple navigation, organised product pages, mobile-friendly layouts and smooth checkout experiences to make online shopping easier for customers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment Integration",
    description:"We integrate suitable payment gateways and configure secure payment workflows to help customers complete online transactions with confidence.",
  },
  {
    icon: SearchCheck,
    title: "SEO-Friendly Development",
    description:"We follow SEO-friendly development practices, including clean URLs, mobile responsiveness, metadata support, structured content and performance optimisation to support search visibility.",
  },
  {
    icon: LayoutDashboard,
    title: "Easy Store Management",
    description:"We can provide user-friendly administration features to manage products, categories, prices, inventory, customers and orders.",
  },
  {
    icon: PlugZap,
    title: "Third-Party API Integration",
    description:"We can connect your ecommerce website with payment gateways, shipping services, inventory systems, CRM platforms and other business tools.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design Across Devices",
    description:"We ensure your online store works smoothly across smartphones, tablets, laptops and desktop computers.",
  },
  {
    icon: Headset,
    title: "Ongoing Maintenance & Technical Support",
    description:"We provide website updates, bug fixes, technical assistance and maintenance to help keep your ecommerce platform running smoothly.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Business-Focused Development",
    description:"We focus on practical features that support your business goals, improve customer experience and make online store management more efficient.",
  },
 
];
// technologies we work data
const technologiesData = [
  {
    icon: Atom ,
    title: "React.js",
    description: "Interactive and modern shopping interfaces with custom theme & design.",
  },
  {
    icon: Server ,
    title: "Node.js & Express.js",
    description: "Backend development and ecommerce functionality.",
  },
  {
    icon: Code ,
    title: "PHP",
    description: "Custom ecommerce website and backend development.",
  },
  {
    icon: ShoppingBag ,
    title: "WordPress & WooCommerce",
    description: "Flexible ecommerce websites and product management..",
  },
  {
    icon: Database ,
    title: "MySQL & MongoDB",
    description: "Database management for products, customers and orders.",
  },
  {
    icon: CodeXml ,
    title: "HTML5, CSS3 & JavaScript",
    description: "Website structure, styling and interactive features.",
  },
  {
    icon: PanelsTopLeft ,
    title: "Bootstrap",
    description: "Responsive layouts for different screen sizes.",
  },
  {
    icon: Webhook ,
    title: "REST APIs",
    description: "Payment, shipping and third-party service integrations.",
  },
];
// E-commerce Development Process Data
const processData = [
  {
    number: "01",
    title: "Business & Requirement Analysis",
    description:"Understand your products, customers, business model and ecommerce requirements.",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:"Plan website structure, product categories, shopping features and technical architecture.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:"Create attractive and user-friendly shopping interfaces for desktop and mobile devices.",
  },
  {
    number: "04",
    title: "Frontend & Backend Development",
    description:"Develop website interfaces, product management, customer accounts, shopping carts and backend functionality.",
  },
  {
    number: "05",
    title: "Payment Integration & Testing",
    description:"Integrate payment gateways and test checkout, orders, website performance and functionality.",
  },
  {
    number: "06",
    title: "Launch & Ongoing Support",
    description:"Deploy your ecommerce website and provide maintenance and technical support.",
  },
];
//industries Data
const industriesData = [
  {
    number : "01",
    icon: Shirt,
    title: "Fashion & Apparel",
    text: "Online clothing, footwear and accessories stores.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Laptop,
    title: "Electronics & Technology",
    text: "Electronics and gadget ecommerce platforms.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: Utensils,
    title: "Food & Grocery",
    text: "Online grocery stores and food ordering platforms.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    text: "Healthcare product and wellness ecommerce websites.",
    img: healthcareImg,
  },
  {
    number : "05",
    icon: Armchair,
    title: "Home & Furniture",
    text: "Furniture, home decor and lifestyle product stores.",
    img: estateImg,
  },
  {
    number : "06",
    icon: Sparkles,
    title: "Beauty & Personal Care",
    text: "Cosmetics, skincare and personal care stores.",
    img: manufacturingImg,
  },
  {
    number : "07",
    icon: Store,
    title: "Retail & Wholesale",
    text: "Product catalogues, retail stores and bulk ordering platforms.",
    img: startupsImg,
  },
  {
    number : "08",
    icon: Factory,
    title: "Manufacturing",
    text: "Industrial product catalogues and B2B ecommerce solutions.",
    img: manufacturingImg,
  },
]
//FAQ data
const faqs = [
  {
      question: "What is ecommerce website development?",
      answer: "Ecommerce website development is the process of creating an online store where businesses can display products, accept orders and receive payments online."
  },
  {
      question: "How much does ecommerce website development cost in India?",
      answer: "The cost depends on website features, product quantity, design requirements, integrations and custom functionality. Contact CodeTrios for a project estimate."
  },
  {
      question: "Does CodeTrios develop custom ecommerce websites?",
      answer: "Yes. We develop custom ecommerce websites based on business requirements, product types and desired shopping features."
  },
  {
      question: "Can you develop an ecommerce website using WooCommerce?",
      answer: "Yes. We develop WordPress ecommerce websites using WooCommerce, including product setup, payment integration and store customisation."
  },
  {
      question: "Can you integrate online payment gateways?",
      answer: "Yes. We can integrate suitable payment gateways to enable online transactions through your ecommerce website."
  },
  {
      question: "Can you develop a multi-vendor ecommerce marketplace?",
      answer: "Yes. We can develop marketplace solutions that support multiple sellers, product listings and order management."
  },
  {
      question: "Will my ecommerce website work on mobile devices?",
      answer: "Yes. We develop responsive ecommerce websites that adapt to smartphones, tablets and desktop screens."
  },
  {
      question: "Can I manage products and orders myself?",
      answer: "Yes. We can provide an administration panel to manage products, categories, customers and orders."
  },
  {
      question: "Is ecommerce website development SEO-friendly?",
      answer: "We follow SEO-friendly development practices, including responsive layouts, clean URLs, structured content, metadata support and performance optimisation."
  },
  {
      question: "Can you redesign my existing ecommerce website?",
      answer: "Yes. We can redesign existing online stores to improve their appearance, navigation, usability and shopping experience."
  },
  {
      question: "How long does it take to develop an ecommerce website?",
      answer: "The timeline depends on the number of products, features, integrations and design complexity. We provide an estimated timeline after reviewing your requirements."
  },
  {
      question: "Does CodeTrios provide ecommerce website maintenance?",
      answer: "Yes. We provide website maintenance, technical support, updates and ongoing improvements based on your requirements."
  },
  {
      question: "Does CodeTrios provide ecommerce development services outside Delhi NCR?",
      answer: "Yes. We work with businesses across Delhi NCR and other locations in India."
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
    title: "UI/UX Design",
    content:"Design intuitive, accessible and user-focused interfaces that improve usability, engagement and conversions.",
    link: "/ui-ux-design-services",
    linkTitle: "Explore UI/UX Design Services",
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
  {
    title: "Web Hosting Service",
    content:"Reliable hosting, server setup, website deployment and ongoing technical support.",
    link: "/web-hosting-services",
    linkTitle: "Explore Web Hosting Service",
  },
  {
    title: "GEO & SEO Services",
    content:"Improve Google rankings and AI search visibility through SEO, content optimisation and Generative Engine Optimisation.",
    link: "/geo-seo-services",
    linkTitle: "Explore GEO & SEO Services",
  },        
];



export default function EcommerceDevelopmentService(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="ecommerce-development-services" />
      <SchemaGraph
          pageType="service"
          pageName="Ecommerce Development Company in India"
          pageDescription="CodeTrios provides ecommerce development services in India for businesses that need scalable online stores, ecommerce platforms, custom functionality, integrations, and conversion-focused shopping experiences."
          pageUrl="https://www.codetrios.com/ecommerce-development-services"
          serviceName="Ecommerce Development Services"
          serviceDescription="Ecommerce development services for Shopify, WooCommerce, and custom online stores, including ecommerce functionality, integrations, payments, and performance optimization."
          serviceType="Ecommerce Development"
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
                  name: "Ecommerce Development Services",
                  url: "https://www.codetrios.com/ecommerce-development-services"
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
                  <div className="tag">ECOMMERCE DEVELOPMENT SERVICES</div>
                  <h1>E-commerce Development Company in India</h1>
                  <p>CodeTrios provides professional & user friendly ecommerce website development services to help businesses sell products online and grow their digital presence. We build user-friendly, responsive and scalable online stores with features that make shopping simple and convenient.From small business ecommerce websites to custom online shopping platforms, we develop solutions with product management, shopping carts, payment gateway integration and order management to support your business needs.</p>
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
                    <div className="tag">OUR ECOMMERCE DEVELOPMENT SERVICES</div>
                    <h2>E-commerce Development Services Built Around Your <span>Business Goals</span></h2>
                  </div>
                  <div className='secDetail'>
                    <p>Content missing</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {commerceServicesData.map((item, index) =>{
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
                    <div className="tag">TYPES OF ECOMMERCE PLATFORMS</div>
                    <h2>E-commerce Solutions for <span>Every Business</span></h2>
                    <p className='halfWidth'>Content missing</p>
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
                        <h2>Why Choose CodeTrios for <span>E-commerce</span> Development?</h2>
                        <p>Choosing the right ecommerce development partner is important for building a successful online business. At CodeTrios, we combine modern technology, thoughtful design and practical business solutions to create online stores that are easy to manage, convenient to shop from and ready to grow.</p>
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
        {/* Technologies we work */}
        <div className='whyChooseUs'>
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">OUR ECOMMERCE TECHNOLOGIES</div>
                          <h2>E-commerce <span>Technologies</span> We Use</h2>
                          <p>Content missing</p>
                        </div>
                        <div className="why_features">
                          {technologiesData.map(({ icon: Icon, title, description }) => (
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
                      <h2>Our E-commerce Development Process</h2>
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
        <div className='related-services blockPadding  '>
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
                          <h2>Questions About Our <span>E-commerce Website</span> Development</h2>
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