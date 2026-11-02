import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Aboutus.css';
import '../HomeRoute_V1/About.css';
import {Link} from 'react-router-dom';
//icon
import { Workflow } from "lucide-react";
import {
  Monitor,
  Settings,
  FileText,
  Database,
  Cloud,
  MessageCircle,
  Users,
  Code2,
  ShieldCheck,
  LockKeyhole,
  ArrowUpRight,
} from "lucide-react";
import Accordion from 'react-bootstrap/Accordion';
//compontnts
import NetworkBackground from '../UI/NetworkBackground.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
import ActionButton from '../ActionButton/ActionButton';
import Servicesslider from './Servicesslider.jsx';
import ProjectCAT from '../ActionButton/ProjectCAT.jsx';

// why choose us data
const whyChooseData = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "We keep things straightforward. You know what is being developed, what comes next, and how your project is progressing",
  },
  {
    icon: Users,
    title: "Experienced Development Team",
    description:
      "Our team brings together more than 8 years of combined experience across website development, CMS platforms, backend systems, and modern applications.",
  },
  {
    icon: Code2,
    title: "Solutions Built Around Your Needs",
    description:
      "We don't believe every business needs the same website or software. We focus on your requirements and recommend an approach that makes sense.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Development",
    description:
      "We pay attention to website performance, responsive layouts, clean code, usability, and maintainability throughout development.",
  },
  {
    icon: LockKeyhole,
    title: "Support Beyond Launch",
    description:
      "Our work doesn't have to end when your website goes live. We can help with maintenance, updates, improvements, and new functionality as your business grows.",
  },
  {
    icon: LockKeyhole,
    title: "Respect for Your Work",
    description:
      "Your ideas, business information, and project requirements matter. We approach every collaboration with professionalism and confidentiality.",
  },
];
// what we build data
const whatWeBuild = [
  {
    title: "SEO & Performance First",
    icon: Workflow,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
  },
  {
    title: "SEO & Performance First",
    icon: Workflow,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
  },
  {
    title: "SEO & Performance First",
    icon: Workflow,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
  },
  {
    title: "SEO & Performance First",
    icon: Workflow,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
  },
];

// Technology stack data
const technologyGroups = [
  {
    title: "Frontend",
    icon: Monitor,
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend & Applications",
    icon: Settings,
    technologies: ["Node.js", "Express.js", "PHP", "Laravel"],
  },
  {
    title: "CMS & Content",
    icon: FileText,
    technologies: ["WordPress", "Drupal", "Strapi"],
  },
  {
    title: "Databases MANAGEMENT",
    icon: Database,
    technologies: ["MySQL", "MongoDB"],
  },
  {
    title: "CLOUD & DEPLOYMENT",
    icon: Cloud,
    technologies: ["AWS", "Google Cloud"],
  },
];

//FAQ 
const faqs = [
  {
      question: "What does CodeTrios do?",
      answer: "CodeTrios is a web development and digital solutions company offering website design, custom web development, ecommerce development, web applications, CMS development, mobile application development, and website maintenance."
  },
  {
      question: "Does CodeTrios provide website development services in Delhi NCR?",
      answer: "Yes. CodeTrios provides website design, custom website development, ecommerce development, and web application services to businesses in Faridabad, Delhi NCR, and across India."
  },
  {
      question: "Which technologies does CodeTrios use?",
      answer: "Our development technologies include React.js, Node.js, PHP, Laravel, WordPress, Drupal, JavaScript, MySQL, and MongoDB. We select the technology stack according to each project's requirements."
  },
  {
      question: "Can CodeTrios develop a custom business website?",
      answer: "Yes. We develop custom business websites based on your brand, services, target audience, and functional requirements. Websites can include enquiry forms, CMS integration, API connections, and other business-specific features."
  },
  {
      question: "Does CodeTrios offer website redesign and maintenance?",
      answer: "Yes. We can help improve existing websites through redesign, performance optimization, bug fixing, content updates, security maintenance, and new functionality."
  },
  {
      question: "Does CodeTrios work with startups and established businesses?",
      answer: "Yes. We work with startups, small businesses, educational institutions, and established organizations that need websites, web applications, or custom digital solutions."
  },
  {
      question: "How can I start a project with CodeTrios?",
      answer: "You can contact CodeTrios through the website or email info@codetrios.com . Share your project requirements, and our team can discuss the scope, suitable technologies, and next steps."
  },
]

export default function Aboutus(){
  return(
    <>
      <SEO page="about" />
        <SchemaGraph
            pageType="about"
            pageName="About CodeTrios"
            pageDescription="CodeTrios is a web development and digital solutions company in India providing website design, web development, ecommerce development, web application development, UI/UX design, custom software development, digital strategy consulting, web hosting, and SEO & GEO services."
            pageUrl="https://www.codetrios.com/about-us"
            breadcrumbs={[
                {
                    name: "Home",
                    url: "https://www.codetrios.com/"
                },
                {
                    name: "About Us",
                    url: "https://www.codetrios.com/about-us"
                }
            ]}
        />
      <section className='aboutScreen innerPageBg'>
        <div className="innerHeroBanner">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">About CodeTrios</div>
                  <h1>Technology That Makes Your Business Move Forward To New Level</h1>
                  <p>Looking for a reliable web development company in Delhi NCR? CodeTrios helps businesses turn ideas into digital solutions with new technology.</p>
                  <p>We design and develop websites, web applications, ecommerce platforms, and custom software that help businesses work smarter and grow online. From the first discussion to development and ongoing support, we focus on building technology that serves a real purpose with your dream.</p>
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
                      <div className="tag">Our Story</div>
                      <h2>Good Ideas Deserve Better <span>Technology & Digital</span> Layout</h2>
                    </div>
                    <div className='secDetail'>
                      <p>Every business has different goals, challenges and ways of working. We believe its technology should reflect that in to real.</p>
                      <p>CodeTrios was built around a simple idea: make quality web development and digital solutions accessible to businesses that want to grow.</p>
                      <p>We are a team of developers with more than 12 years of combined industry experience in website development, custom applications, CMS platforms, and modern web technologies.</p>
                      <p>We take time to understand what a business actually needs before recommending a solution. Whether it's building a website from scratch, improving an existing platform, or developing a custom application, our focus stays on usability, performance, and long-term value.</p>
                      <p>Based in Delhi NCR, CodeTrios works with businesses looking for dependable web development and technology services in India and beyond.</p>
                      <p>We can maintain your current website also with new ideas and security. </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
        <Servicesslider />
        <div className='technologyStack' aria-labelledby="technology-expertise-title">
          <Container>
            <Row>
              <Col>
                <div className="technology-layout">
                  <div className='sectionHead'>
                    <div className="tag">Technology Expertise</div>
                    <h2>The Right Technology for the <span>Project Solution.</span></h2>
                    <p>Every project has different requirements. We choose technologies based on what your business needs today and what it may need in the future.</p>
                    <p>Our development experience covers modern JavaScript frameworks, backend programming, content management systems, databases, and cloud platforms.</p>
                    <p>We also work with API integrations, third-party services, website performance optimization, and deployment workflows to deliver complete digital solutions.</p>
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
        
        <div className='whyChooseUs'>
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">THE CODETRIOS APPROACH</div>
                          <h2 id="ct-why-heading">A Development <span>Partner</span> Who Understands Your <span>Business</span>.</h2>
                          <p>Choosing a development company is not just about finding someone who can write code or just post your business online. It's about working with a team that understands your requirements and takes responsibility for building the right solution.</p>
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

        {/* Frequently Asked Questions */}
        <div className='whyChooseUs block-top-space-none'>
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
      </section>
    </>
  )
}