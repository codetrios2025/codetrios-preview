import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from 'react-bootstrap/Accordion';
import '../mainservices.css';
//icon
import {BriefcaseBusiness,RefreshCw,ShoppingCart,Building2,GraduationCap,ArrowUpRight,Stethoscope,Hotel,Factory,Monitor,Settings,
  Rocket,Compass,Globe,Cpu,Workflow,Layers,Gauge,Bot,Code2,Database,Target,Wrench,Map,TrendingUp,ChartNoAxesCombined,SearchCheck,
FileText } from "lucide-react";
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

//Digital Strategy Services data
const digitalServicesData = [
  {
    title: "Digital Transformation Consulting",
    content: "Plan and implement digital solutions that improve business operations, reduce manual work and support organisational growth.",
    icon: Compass,
    offer: [
      "Digital transformation planning",
      "Business process analysis",
      "Technology adoption strategy",
      "Digital workflow improvement",
      "Existing system modernisation",
    ],
  },
  {
    title: "Website & Digital Presence Strategy",
    content: "Plan an effective online presence with the right website structure, content strategy, user experience and digital platforms.",
    icon: Globe,
    offer: [
      "Website planning and consultation",
      "Website structure and navigation strategy",
      "Website redesign recommendations",
      "Content organisation",
      "Digital presence improvement",
    ],
  },
  {
    title: "Technology Consulting",
    content: "Choose suitable technologies and development approaches based on your business goals, application requirements and technical needs.",
    icon: Cpu,
    offer: [
      "Technology stack recommendations",
      "Software architecture planning",
      "CMS selection and consultation",
      "Frontend and backend technology planning",
      "Database and API integration strategy",
    ],
  },
  {
    title: "Business Process Automation Consulting",
    content: "Identify repetitive business activities and plan software solutions that improve efficiency and reduce manual effort.",
    icon: Workflow,
    offer: [
      "Workflow analysis",
      "Automation opportunities",
      "Business software planning",
      "System integration recommendations",
      "Custom application planning",
    ],
  },
  {
    title: "SEO, GEO & AI Search Strategy",
    content: "Improve your digital visibility by creating strategies for traditional search engines, local search and AI-powered search experiences.",
    icon: SearchCheck,
    offer: [
      "SEO strategy and keyword research",
      "Website content planning",
      "Local SEO recommendations",
      "Generative Engine Optimisation (GEO)",
      "Answer Engine Optimisation (AEO)",
      "AI search visibility planning",
    ],
  },
  {
    title: "Digital Product & Application Consulting",
    content: "Plan websites, mobile applications and custom software products according to your business requirements and target users.",
    icon: Layers,
    offer: [
      "Digital product planning",
      "Application feature planning",
      "MVP development consultation",
      "User journey planning",
      "Software requirement analysis",
    ],
  },
  {
    title: "Website Performance & Optimisation Consulting",
    content: "Identify opportunities to improve website speed, usability, accessibility and technical performance.",
    icon: Gauge,
    offer: [
      "Website performance analysis",
      "Page speed recommendations",
      "Mobile usability improvements",
      "Technical SEO recommendations",
      "Website improvement planning",
    ],
  },
  {
    title: "AI & Business Technology Consulting",
    content: "Explore practical ways to use AI and modern technologies to improve customer interactions and business processes.",
    icon: Bot,
    offer: [
      "AI integration planning",
      "Chatbot and conversational AI consultation",
      "Business automation opportunities",
      "AI-powered application planning",
      "Third-party tool integration strategy",
    ],
  },
];
//Digital Consulting data
const DigitalConsultingTypes = [
  {
    title: "Business Digital Transformation",
    content: "Plan digital improvements that help businesses modernise operations and adopt suitable technologies.",
    icon: Building2,
  },
  {
    title: "Website & Online Presence Planning",
    content: "Develop a clear website strategy to improve brand visibility, customer engagement and online enquiries.",
    icon: Globe,
  },
  {
    title: "Software & Application Planning",
    content: "Identify the right software features, technologies and architecture before starting development.",
    icon: Code2,
  },
  {
    title: "SEO & AI Search Strategy",
    content: "Improve online discoverability through search optimisation, useful content and AI search visibility planning.",
    icon: SearchCheck,
  },
  {
    title: "Business Automation Strategy",
    content: "Identify manual workflows that can be improved through custom applications, integrations and automation.",
    icon: Workflow,
  },
  {
    title: "Digital Product Development Planning",
    content: "Turn business ideas into structured digital products with defined features, user journeys and development roadmaps.",
    icon: Rocket,
  },
  {
    title: "Technology Modernisation",
    content: "Review existing websites and applications and plan practical upgrades to improve performance, usability and maintainability.",
    icon: RefreshCw,
  },
  {
    title: "AI Adoption Strategy",
    content: "Identify suitable opportunities to integrate AI tools, chatbots and automation into business operations.",
    icon: Bot,
  },
];
//whyChoose data
const whyChooseData = [
  {
    icon: Target,
    title: "Business-Focused Recommendations",
    description:
      "We understand your business objectives before recommending websites, applications or technology solutions.",
  },
  {
    icon: Wrench,
    title: "Practical Technical Expertise",
    description:
      "Our experience across frontend, backend, CMS and database technologies helps us recommend suitable development approaches.",
  },
  {
    icon: Compass,
    title: "Complete Digital Perspective",
    description:
      "We consider website design, development, user experience, SEO, GEO and technology integration together.",
  },
  {
    icon: Map,
    title: "Customised Digital Roadmaps",
    description:
      "We recommend solutions based on your business requirements rather than generic technology plans.",
  },
  {
    icon: Cpu,
    title: "Modern Technology & AI Awareness",
    description:
      "We help businesses explore useful AI tools, automation and emerging digital technologies.",
  },
  {
    icon: Layers,
    title: "Strategy with Implementation Understanding",
    description:
      "Our development background helps us connect planning with practical implementation requirements.",
  },
  {
    icon: TrendingUp,
    title: "Support for Growing Businesses",
    description:
      "We help startups, small businesses and established organisations plan their next digital improvements.",
  },
];
// technologies we work data
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
    title: "Analytics & Search Platforms",
    icon: ChartNoAxesCombined,
    technologies: ["Google Analytics 4", "Google Search Console", "Google Business Profile"],
  },
  {
    title: "SEO, GEO & AI Tools",
    icon: SearchCheck,
    technologies: ["Keyword research", "website auditing", "search optimisation", "AI-assisted workflows"],
  },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Understanding Your Business",
    description:
      "We understand your business model, objectives, target audience and current digital challenges.",
  },
  {
    number: "02",
    title: "Digital & Technical Assessment",
    description:
      "We review your existing websites, applications, technology infrastructure and online presence.",
  },
  {
    number: "03",
    title: "Opportunity & Requirement Analysis",
    description:
      "We identify areas for improvement, technology opportunities and potential digital solutions.",
  },
  {
    number: "04",
    title: "Strategy & Roadmap Planning",
    description:
      "We prepare a practical roadmap covering recommended solutions, priorities, technologies and implementation steps.",
  },
  {
    number: "05",
    title: "Implementation Planning",
    description:
      "We define the development requirements, integrations, resources and timelines needed to execute the strategy.",
  },
  {
    number: "06",
    title: "Monitoring & Improvement",
    description:
      "We review results and recommend improvements based on business goals, user feedback and performance.",
  },
];
//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education",
    text: "Digital school platforms, admission systems and learning solutions.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare",
    text: "Hospital websites, patient platforms and appointment systems.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    text: "Online store strategy, ecommerce platforms and customer experience.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate",
    text: "Property portals, lead generation and digital marketing strategy.",
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
    text: "Business process automation and operational software planning.",
    img: manufacturingImg,
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups",
    text: "Digital product strategy, MVP planning and technology selection.",
    img: startupsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: "Corporate & Technology",
    text: "Digital transformation, business applications and software planning.",
    img: technologyImg,
  },
]
//FAQ data
const faqs = [
  {
    question: "What is digital strategy consulting?",
    answer:
      "Digital strategy consulting helps businesses plan how to use websites, software, digital platforms and modern technologies to achieve their business goals.",
  },
  {
    question: "Why does my business need a digital strategy?",
    answer:
      "A digital strategy helps businesses identify the right technology investments, improve online visibility, streamline processes and plan digital growth.",
  },
  {
    question: "What digital consulting services does CodeTrios provide?",
    answer:
      "CodeTrios provides website strategy, technology consulting, digital transformation planning, business automation consulting, SEO and GEO strategy, and digital product planning.",
  },
  {
    question: "Does CodeTrios provide digital transformation consulting in India?",
    answer:
      "Yes. CodeTrios helps businesses in India identify digital opportunities, modernise existing systems and plan technology-driven improvements.",
  },
  {
    question: "Can CodeTrios help plan a new website or web application?",
    answer:
      "Yes. We help define project requirements, website structure, application features, technology selection and development roadmaps.",
  },
  {
    question: "Does digital strategy include SEO and GEO?",
    answer:
      "Yes. Digital strategy can include search engine optimisation, local SEO, content planning, generative engine optimisation and answer engine optimisation.",
  },
  {
    question: "Can you recommend the right technology for my business?",
    answer:
      "Yes. We evaluate your requirements and recommend suitable technologies, platforms, databases and integrations.",
  },
  {
    question: "Does CodeTrios provide AI consulting?",
    answer:
      "We help businesses identify practical AI opportunities, including chatbot integration, AI-powered applications and business process automation.",
  },
  {
    question: "Can you improve an existing website or software application?",
    answer:
      "Yes. We can review existing digital platforms and recommend improvements to design, usability, performance, technology and search visibility.",
  },
  {
    question: "Does CodeTrios provide digital consulting services outside Delhi NCR?",
    answer:
      "Yes. We work with businesses across Delhi NCR and other locations in India.",
  },
];
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



export default function DigitalStrategyService(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="digital-strategy-consulting" />
      <SchemaGraph
          pageType="service"
          pageName="Digital Strategy Consulting Services"
          pageDescription="CodeTrios provides digital strategy consulting services in India, helping businesses plan digital transformation, select suitable technologies, improve business processes and develop practical roadmaps for websites, software applications, SEO, GEO and AI integration."
          pageUrl="https://www.codetrios.com/digital-strategy-consulting"
          serviceName="Digital Strategy Consulting Services"
          serviceDescription="Digital strategy consulting covering digital transformation planning, website strategy, technology consulting, business process automation, digital product planning, SEO and GEO strategy, website optimisation and AI integration."
          serviceType="Digital Strategy Consulting"
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
                  name: "Digital Strategy Consulting",
                  url: "https://www.codetrios.com/digital-strategy-consulting"
              }
          ]}
          faqs={faqs}
      />
      <div className='servicesPage innerPageBg allService'>
        <div className="innerHeroBanner" aria-labelledby="digital-strategy-heading">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">Digital Strategy Consulting Services</div>
                  <h1 id='digital-strategy-heading'>Digital Strategy & Consulting Services in <span>India</span></h1>
                  <p>CodeTrios provides digital strategy and consulting services to help businesses make better technology decisions, improve their online presence and achieve their digital goals.From digital transformation and business automation to SEO, GEO and AI integration, we develop practical strategies aligned with your business requirements.</p>
                  <div className='actionRow'>
                    <ActionButton />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='weAreBlock blockPadding' aria-labelledby="digital-services-heading">
          <Container>
            <Row>
              <Col>
                <div className='weAreContent'>
                  <div className='sectionHead'>
                    <div className="tag">OUR CONSULTING SERVICES</div>
                    <h2 id='digital-services-heading'>Our Digital <span>Strategy & Consulting</span> Services</h2>
                  </div>
                  <div className='secDetail'>
                    <p>We provide digital consulting and technology planning services to help businesses build a strong digital foundation.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {digitalServicesData.map((item, index) =>{
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
                        <h4>What we offer:</h4>
                        <ul>
                          {item.offer.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='service-block-2 border-block blockPadding' aria-labelledby="business-challenges-heading">
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">WHEN YOUR BUSINESS NEEDS A DIGITAL STRATEGY</div>
                    <h2 id="business-challenges-heading">Digital Consulting Solutions for <br/>Different <span>Business Requirement</span> </h2>
                    <p className='halfWidth'>Content missing</p>
                  </div>
                  <div className="benefitGrid">
                    {DigitalConsultingTypes.map((item, index) =>{
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="why-choose-heading">
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">WHY CHOOSE CODETRIOS</div>
                        <h2 id="why-choose-heading">Why Choose CodeTrios for <span>Digital Strategy & Consulting?</span></h2>
                        <p>Choosing the right digital strategy helps businesses invest in technology with a clear purpose. CodeTrios combines practical development experience with technology planning to help businesses make informed digital decisions.</p>
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
        <div className='technologyStack' aria-labelledby="technology-heading">
            <Container>
              <Row>
                <Col>
                  <div className="technology-layout">
                    <div className='sectionHead'>
                      <div className="tag">TECHNOLOGY & DIGITAL PLATFORMS </div>
                      <h2 id="technology-heading">Technologies & <span>Digital Platforms</span> We Work With</h2>
                      <p>Our recommendations are based on business requirements and the technologies suitable for each project.</p>
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
        <div className='services_process blockPadding block-mg-top' aria-labelledby="strategy-process-heading"> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">Our Process</div>
                      <h2 id="strategy-process-heading">Our Digital Strategy <br/>Consulting <span>Process</span></h2>
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
                      <h2 id="industries-heading">Digital Strategy Consulting <br/>for <span>Different Industries</span></h2>
                      <p>We provide digital strategy and technology consulting for businesses across different industries.</p>
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
        <div className='related-services blockPadding' aria-labelledby="related-services-heading">
          <Container>
            <Row>
              <Col>
                <div className=''>
                  <div className="sectionHead">
                    <div className="tag">Related Services</div>
                    <h2 id="related-services-heading">Explore Our Other <span>Digital Services</span></h2>
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="digital-strategy-faq-heading">
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">Frequently Asked Questions</div>
                          <h2 id="digital-strategy-faq-heading">Questions About Our <span>Digital Strategy Consulting</span></h2>
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
        <ProjectCAT sectionId="digital-strategy-cta-heading" tagId="digital-strategy-cta-heading" />
      </div>
    </>
  )
}