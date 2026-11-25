import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from 'react-bootstrap/Accordion';
import '../mainservices.css';
//icon
import {BriefcaseBusiness,ShoppingCart,Building2,GraduationCap,ArrowUpRight,Stethoscope,Hotel,Factory,Monitor,Settings,
  Rocket,Database,FileText,CloudUpload,Bot,Plug,Headset,Workflow,MessageSquareText,TrendingUp,Users,
  BarChart3,Target,Sparkles,
  Cpu,
  Zap,
  Code2,
  Smile,
  LifeBuoy,BrainCircuit,FilePenLine, Network,Layers,UtensilsCrossed,MonitorCog,Truck,Wallet} from "lucide-react";
//componetnts
import NetworkBackground from '../../UI/NetworkBackground';
import SEO from '../../SEO/websiteMeta';
import SchemaGraph from '../../SEO/Schema/SchemaGraph';
import ActionButton from '../../ActionButton/ActionButton';
import ProjectCAT from '../../ActionButton/ProjectCAT';

//Images
import EducationImg from '../../../assets/images/edu-ai-img.webp';
import HealthcareImg from '../../../assets/images/health-ai-img.webp';
import EcommerceImg from '../../../assets/images/ecom-ai-img.webp';
import RealEstateImg from '../../../assets/images/realEstate-ai-img.webp';
import HospitalityImg from '../../../assets/images/travel-ai-img.webp';
import ManufacturingImg from '../../../assets/images/manufactur-ai-img.webp';
import StartupsImg from '../../../assets/images/startup-ai-img.webp';
import CorporateImg from '../../../assets/images/corporate-ai-img.webp';
import FinanceImg from '../../../assets/images/finance-ai-img.webp';
import LogisticsImg from '../../../assets/images/logistics-ai-img.webp';
import ITImg from '../../../assets/images/it-ai-img.webp';
import FoodImg from '../../../assets/images/food-ai-img.webp';

const Carousel = CarouselImport.default ?? CarouselImport;

//AI & Automation Services data
const AiServicesData = [
  {
    title: "AI Chatbot Development",
    content:
      "Build intelligent chatbots that interact with website visitors, answer common questions, share information and help manage customer enquiries. We develop chatbot solutions based on your business requirements and available AI technologies.",
    icon: Bot,
  },
  {
    title: "Business Process Automation",
    content:
      "Automate repetitive business activities such as data entry, enquiry management, notifications, report generation and routine administrative tasks. Our solutions help reduce manual work and make everyday processes more efficient.",
    icon: Workflow,
  },
  {
    title: "AI Integration Services",
    content:
      "Integrate suitable AI tools, models and APIs into your existing websites, web applications and business software. Add AI-powered features without necessarily rebuilding your entire digital platform.",
    icon: Plug,
  },
  {
    title: "Automated Customer Support",
    content:
      "Improve customer communication with automated responses, enquiry routing, support workflows and chatbot-based assistance. Help customers access relevant information while reducing repetitive support tasks.",
    icon: Headset,
  },
  {
    title: "Data Processing & Automation",
    content:
      "Simplify data collection, extraction, organisation and processing using automation tools and suitable AI capabilities. Reduce repetitive data-handling work and make information easier to manage.",
    icon: Database,
  },
  {
    title: "AI-Powered Web Application Development",
    content:
      "Develop custom web applications with AI-powered features tailored to your business needs. These may include intelligent search, automated recommendations, document processing and other application-specific capabilities.",
    icon: BrainCircuit,
  },
  {
    title: "Workflow & API Automation",
    content:
      "Connect websites, applications, databases and third-party platforms through API integrations and automated workflows. Make it easier for different systems to exchange information and perform tasks with less manual involvement.",
    icon: Network,
  },
  {
    title: "AI Content & Productivity Solutions",
    content:
      "Use suitable AI tools to support content creation, summarisation, research, document processing and everyday business activities. We help identify practical use cases that can improve team productivity.",
    icon: FilePenLine,
  },
];
//Website Maintenance Types data
const AutomationTypeData = [
  {
    title: "Customer Enquiry Management",
    content:
      "Automate enquiry collection, categorisation and response workflows.",
    icon: MessageSquareText,
  },
  {
    title: "Sales & Lead Management",
    content:
      "Organise incoming leads, automate follow-ups and connect enquiry forms with CRM systems.",
    icon: TrendingUp,
  },
  {
    title: "Employee & HR Operations",
    content:
      "Simplify routine employee-related processes, notifications and internal workflows.",
    icon: Users,
  },
  {
    title: "Document Management",
    content:
      "Automate document extraction, classification, summarisation and information processing.",
    icon: FileText,
  },
  {
    title: "Business Reporting",
    content:
      "Reduce manual reporting tasks by automating data collection and report generation.",
    icon: BarChart3,
  },
  {
    title: "Customer Service",
    content:
      "Provide automated assistance through chatbots and support workflows.",
    icon: Headset,
  },
  {
    title: "E-commerce Operations",
    content:
      "Support product information management, order notifications and customer communication.",
    icon: ShoppingCart,
  },
  {
    title: "Website & Application Automation",
    content:
      "Add intelligent features and connect different digital systems.",
    icon: Workflow,
  },
];
//whyChoose data
const whyChooseData = [
  {
    icon: Target,
    title: "Solutions Based on Business Needs",
    description:
      "We understand your existing processes and recommend AI or automation features that address real business challenges.",
  },
  {
    icon: Cpu,
    title: "Practical AI Integration",
    description:
      "We help integrate suitable AI tools and APIs into websites, applications and existing business systems.",
  },
  {
    icon: Zap,
    title: "Reduced Manual Work",
    description:
      "Automate repetitive tasks and routine workflows to help your team save time and focus on important activities.",
  },
  {
    icon: Code2,
    title: "Custom Development Approach",
    description:
      "We develop solutions based on your business requirements instead of relying only on ready-made tools or generic features.",
  },
  {
    icon: Plug,
    title: "Seamless API Integration",
    description:
      "Connect different applications, databases and platforms to improve information sharing and workflow efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Technology Solutions",
    description:
      "Build solutions that can be extended with additional features as your business processes and requirements grow.",
  },
  {
    icon: Smile,
    title: "User-Friendly Applications",
    description:
      "We focus on simple interfaces and practical functionality so that your team can use the solutions effectively.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Technical Support",
    description:
      "Get assistance with maintenance, troubleshooting, integrations and future improvements as your requirements change.",
  },
];
// technologies we work data
const technologyGroups = [
  {
    title: "AI & Generative AI",
    icon: BrainCircuit,
    technologies: ["OpenAI APIs","Claude APIs","Google Gemini","Language Models","AI Chatbot Integration"],
  },
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
    title: "AI Integration & Automation",
    icon: Workflow,
    technologies: ["REST APIs","Webhooks","Third-party Integrations","Custom Workflows","API Automation"],
  },
  {
    title: "Database & Data Management",
    icon: Database,
    technologies: ["MySQL","MongoDB","SQL Server","Data Processing"],
  },
  {
    title: "CMS & Application Platforms",
    icon: Layers,
    technologies: ["WordPress","Drupal","Custom CMS","Strapi"],
  },
  {
    title: "Development & Deployment",
    icon: CloudUpload,
    technologies: ["Server Configuration","Application Deployment","Maintenance & Support"],
  },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Business & Requirement Analysis",
    description:
      "We understand your business operations, existing systems, challenges and repetitive tasks to identify suitable opportunities for automation.",
  },
  {
    number: "02",
    title: "Solution Planning & Strategy",
    description:
      "We define the project scope, select suitable AI tools or technologies and plan how the solution will fit into your existing business processes.",
  },
  {
    number: "03",
    title: "Technology & Architecture",
    description:
      "We plan the application architecture, data flow, API connections and integration requirements to create a suitable technical foundation.",
  },
  {
    number: "04",
    title: "AI & Automation Development",
    description:
      "We develop the required chatbot, automated workflow, AI feature or custom application based on the approved project requirements.",
  },
  {
    number: "05",
    title: "Integration & Testing",
    description:
      "We connect the solution with relevant websites, applications, databases or third-party platforms and test its functionality, accuracy and reliability.",
  },
  {
    number: "06",
    title: "Deployment & Support",
    description:
      "We help deploy the solution and provide technical support, maintenance and improvements as your business requirements evolve.",
  },
];
//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education & Schools",
    text: "Admission enquiries, student information workflows, automated notifications and administrative processes.",
    img: EducationImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare & Hospitals",
    text: "Appointment enquiries, patient communication workflows, document processing and administrative automation.",
    img: HealthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    text: "Customer support, product information assistance, order notifications and sales workflows.",
    img: EcommerceImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate & Construction",
    text: "Property enquiries, lead organisation, follow-up workflows and project-related information management.",
    img: RealEstateImg,
  },
  {
    number : "05",
    icon: Hotel,
    title: "Travel & Hospitality",
    text: "Booking enquiries, customer communication and automated information services.",
    img: HospitalityImg,
  },
  {
    number : "06",
    icon: Factory,
    title: "Manufacturing & Industrial",
    text: "Routine data processing, reporting and operational workflow automation.",
    img: ManufacturingImg,
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups & Small Businesses",
    text: "Affordable, practical automation opportunities that help reduce repetitive tasks and support business growth.",
    img: StartupsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: "Corporate & Professional Services",
    text: "Lead management, document processing, reporting and internal workflow automation.",
    img: CorporateImg,
  },
  {
    number : "09",
    icon: Wallet,
    title: "Finance & Accounting",
    text: "Document handling, data organisation and routine administrative processes, subject to appropriate security and compliance requirements.",
    img: FinanceImg,
  },
  {
    number : "10",
    icon: Truck,
    title: "Logistics & Transportation",
    text: "Shipment updates, information processing and notification workflows.",
    img: LogisticsImg,
  },
  {
    number : "11",
    icon: MonitorCog,
    title: "IT & Technology",
    text: "AI integration, API automation, intelligent applications and software workflow improvements.",
    img: ITImg,
  },
  {
    number : "12",
    icon: UtensilsCrossed,
    title: "Food & Restaurant Businesses",
    text: "Customer enquiries, reservation workflows, order communication and feedback management.",
    img: FoodImg,
  },
]
//FAQ data
const faqs = [
  {
    question: "What are AI and automation services?",
    answer:
      "AI and automation services use artificial intelligence and software technologies to simplify business processes, handle repetitive tasks, improve customer interactions and support better decision-making.",
  },
  {
    question: "How can AI help my business?",
    answer:
      "AI can help businesses automate customer enquiries, process information, support content creation, organise data and improve workflows. The right use cases depend on your business requirements.",
  },
  {
    question: "What is business process automation?",
    answer:
      "Business process automation uses software and integrations to perform repetitive tasks with less manual involvement. Examples include automated notifications, enquiry management, data entry and report generation.",
  },
  {
    question: "Can you integrate AI into my existing website?",
    answer:
      "Yes. We can integrate suitable AI tools, APIs and chatbot functionality into existing websites and web applications, depending on the platform and technical requirements.",
  },
  {
    question: "Can you develop a custom AI chatbot for my business?",
    answer:
      "Yes. We can develop chatbot solutions based on your business information, customer queries and support requirements. Features and integrations depend on the selected AI technology and project scope.",
  },
  {
    question: "Which business processes can be automated?",
    answer:
      "Common examples include lead management, customer communication, appointment enquiries, document processing, data entry, notifications and report generation.",
  },
  {
    question: "Do you provide custom AI application development?",
    answer:
      "Yes. We can develop custom web applications with AI-powered features such as intelligent search, document processing, chatbot assistance and other business-specific functionality.",
  },
  {
    question: "Are AI and automation solutions suitable for small businesses?",
    answer:
      "Yes. Small businesses can start with simple automation, such as enquiry management, customer notifications and chatbot assistance, and expand their solutions as their needs grow.",
  },
  {
    question: "How much do AI and automation services cost?",
    answer:
      "The cost depends on project complexity, required AI capabilities, third-party services, integrations and development time. Contact CodeTrios to discuss your requirements and get a suitable project estimate.",
  },
  {
    question: "Does CodeTrios provide ongoing AI maintenance and support?",
    answer:
      "Yes. We provide technical assistance for developed solutions, including troubleshooting, integration updates, feature improvements and maintenance.",
  },
];
//related Services data
const relatedServices = [
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
  {
    title: "GEO & SEO Services",
    content:"Improve Google rankings and AI search visibility through SEO, content optimisation and Generative Engine Optimisation.",
    link: "/geo-seo-services",
    linkTitle: "Explore GEO & SEO Services",
  },            
];



export default function AIAutomationServices(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="ai-automation-solutions" />
      <SchemaGraph
          pageType="service"
          pageName="AI & Automation Solutions"
          pageDescription="CodeTrios provides AI and automation solutions including AI chatbot development, business process automation, AI integrations, intelligent data processing and custom AI-powered web applications."
          pageUrl="https://www.codetrios.com/ai-automation-solutions"
          serviceName="AI & Automation Solutions"
          serviceDescription="AI chatbot development, business process automation, workflow automation, AI integrations and custom AI-powered application development."
          serviceType="AI Integration and Business Process Automation"
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
                  name: "AI & Automation Solutions",
                  url: "https://www.codetrios.com/ai-automation-solutions"
              }
          ]}
          faqs={faqs}
      />
      <div className='servicesPage innerPageBg allService'>
        {/* AI & Automation Hero banner */}
        <div className="innerHeroBanner" aria-labelledby="ai-automation-heading">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">AI & AUTOMATION SOLUTIONS</div>
                  <h1 id='ai-automation-heading'>AI & Automation Solutions to Make Your <span>Business Smarter</span></h1>
                  <p>At CodeTrios, we provide AI and automation services that help businesses simplify operations, reduce repetitive work and improve productivity. We help businesses identify opportunities to use artificial intelligence, automate routine tasks and connect different systems through smart technology solutions.</p>
                  <div className='actionRow'>
                    <ActionButton />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* AI & Automation Services */}
        <div className='weAreBlock blockPadding' aria-labelledby="ai-services-heading">
          <Container>
            <Row>
              <Col>
                <div className='weAreContent'>
                  <div className='sectionHead'>
                    <div className="tag">INTELLIGENT BUSINESS SOLUTIONS</div>
                    <h2 id='ai-services-heading'>AI & Automation Services for <span>Smarter Business</span> Operations</h2>
                  </div>
                  <div className='secDetail'>
                    <p>At CodeTrios, we provide AI and automation services that help businesses work smarter, simplify daily operations and make better use of technology. We understand that many businesses spend valuable time managing repetitive tasks, handling customer enquiries and working across multiple systems. Our solutions use suitable AI tools, custom development and system integrations to make these processes easier and more efficient. From AI-powered chatbots and automated workflows to intelligent data processing and custom AI integrations, we develop solutions tailored to your business requirements. Whether you want to improve customer communication, reduce manual work or modernise existing business processes, we help you find practical ways to bring AI and automation into your everyday operations.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {AiServicesData.map((item, index) =>{
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
        {/* Types of AI & Automation Business */}
        <div className='service-block-2 border-block blockPadding' aria-labelledby="ai-automation-types-heading">
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">BUSINESS WORKFLOW AUTOMATION</div>
                    <h2 id="ai-automation-types-heading">AI & Automation Solutions for <br/><span>Different Business</span> Needs</h2>
                    <p className='halfWidth'>Every business has different processes, challenges and opportunities for automation. At CodeTrios, we help businesses identify the right AI and automation solutions based on their daily operations and goals.</p>
                  </div>
                  <div className="benefitGrid">
                    {AutomationTypeData.map((item, index) =>{
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="ai-why-choose-heading">
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">WHY CHOOSE CODETRIOS</div>
                        <h2 id="ai-why-choose-heading">Why Choose CodeTrios for <span>AI & Automation</span> Services?</h2>
                        <p>Choosing the right technology partner helps ensure that AI and automation solve actual business problems rather than adding unnecessary complexity. At CodeTrios, we focus on practical implementation, suitable technologies and solutions designed around your business needs.</p>
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
        <div className='technologyStack' aria-labelledby="ai-technology-heading">
            <Container>
              <Row>
                <Col>
                  <div className="technology-layout">
                    <div className='sectionHead'>
                      <div className="tag">TECHNOLOGY & INTEGRATIONS</div>
                      <h2 id="ai-technology-heading">AI Technologies & Integration Platforms We Work With</h2>
                      <p>We select technologies based on the project requirements, existing infrastructure and the type of AI or automation solution needed.</p>
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
        <div className='services_process blockPadding block-mg-top' aria-labelledby="ai-process-heading"> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">Our Process</div>
                      <h2 id="ai-process-heading">Our AI & Automation <br/>Development <span>Process</span></h2>
                      <p>At CodeTrios, we follow a structured approach to understand your business requirements and identify where AI or automation can provide real value. From planning the solution to integration, testing and ongoing improvements, we focus on building practical and reliable solutions.</p>
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
        <div className='services_industries blockPadding' aria-labelledby="ai-industries-heading">
          <Container>
            <Row>
              <Col>
                <div className='services_industries_bg'>
                  <div className='sectionHead'>
                      <div className="tag">AI FOR DIFFERENT INDUSTRIES</div>
                      <h2 id="ai-industries-heading">AI & Automation Solutions <br/>for <span>Different Industries</span></h2>
                      <p>We provide AI and automation services for businesses and organisations across different industries. Our solutions are planned around each industry's workflows, customer interactions and operational requirements.</p>
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
        <div className='related-services blockPadding' aria-labelledby="ai-related-services-heading">
          <Container>
            <Row>
              <Col>
                <div className=''>
                  <div className="sectionHead">
                    <div className="tag">Related Services</div>
                    <h2 id="ai-related-services-heading">Explore Our Other <span>Digital Services</span></h2>
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="ai-faq-heading">
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">Frequently Asked Questions</div>
                          <h2 id="ai-faq-heading">Questions About Our <span>AI & Automation</span> Services</h2>
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

      {/* AI & Automation CTA */}
      <section className="ai-automation-cta border-block" aria-labelledby="ai-cta-heading">
        <Container>
          <div className="ai-cta-inner">
            <div className="ai-cta-glow" aria-hidden="true" />
            <div className="sectionHead">
              <div className="tag">LET'S BUILD SOMETHING SMARTER</div>
              <h2 id="ai-cta-heading">Let's Make Your Business <span> Smarter with AI & Automation</span></h2>
              <p>Looking to automate repetitive tasks, improve customer communication or integrate AI into your existing business systems? CodeTrios can help you identify the right opportunities and build practical technology solutions.</p>
              <p><strong>Contact CodeTrios</strong> to discuss your AI and automation requirements.</p>
              <div className="ai-cta-actions">
                <ActionButton />
                {/* <span className="ai-cta-note">
                  Let's discuss your AI project.
                </span> */}
              </div>

            </div>

            <div className="ai-cta-visual" aria-hidden="true">
              <div className="ai-visual-orbit orbit-one" />
              <div className="ai-visual-orbit orbit-two" />

              <div className="ai-core">
                <BrainCircuit size={64} strokeWidth={1.3} />
                <span>AI</span>
              </div>
            </div>

          </div>
        </Container>
      </section>        
       
      </div>
    </>
  )
}