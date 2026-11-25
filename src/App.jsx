import React, { lazy, Suspense  } from "react";
import { Routes, Route } from "react-router-dom";

import LayoutScreen from "./Components/Common/Layout";
import ScrollTop from "./Components/Common/ScrollTop";
import HomeRouteV1 from "./Components/HomeRoute_V1/HomeRouteV1";

const AboutUs = lazy(() => import("./Components/AboutusNew/AboutUs"));
const ServicesScreen = lazy(() => import("./Components/ServicesNew/MainService"));
// All Services
const WebsiteDesign = lazy(() => import("./Components/ServicesNew/AllServices/WebDesignService"));
const WebsiteDevelopment = lazy(() => import("./Components/ServicesNew/AllServices/WebDevelopmentServices"));
const WebApplication = lazy(() => import ('./Components/ServicesNew/AllServices/WebApplicationServices'));
const UIUXDesign = lazy(() => import ('./Components/ServicesNew/AllServices/DesignService'));
const EcommerceDevelopment = lazy(() => import ('./Components/ServicesNew/AllServices/EcommerceDevelopmentServices'));
const CustomSoftware = lazy(() => import ('./Components/ServicesNew/AllServices/CustomSoftwareServices'));
const DigitalStrategy = lazy(() => import ('./Components/ServicesNew/AllServices/DigitalStrategyServices'));
const WebHosting = lazy(() => import ('./Components/ServicesNew/AllServices/WebHostingServices'));
const GeoSeoServices = lazy(() => import ('./Components/ServicesNew/AllServices/GeoSeoServices'));
const WebsiteMaintenance = lazy(() => import ('./Components/ServicesNew/AllServices/WebsiteMaintenanceServices'));;
const AIAutomation = lazy(() => import ('./Components/ServicesNew/AllServices/AIAutomation'));
// Other Pages
const Technologies = lazy(() => import ('./Components/Pages/Technologies'));
const Portfolio = lazy(() => import('./Components/Pages/Portfolios'));
const ContactUsPage = lazy(() => import('./Components/Pages/ContactUs'));
const ThankyouPage = lazy(() => import('./Components/Pages/ThankYou'));
const NotFound = lazy(() => import('./Components/Pages/404'));

import WhatsAppButton from './Components/Common/WhatsAppButton';
import Chatbot from "./Chatbot";
function App() {
  return (
    <>
    <ScrollTop />
    <Suspense>
      <Routes>
          <Route path="/" element={<LayoutScreen />}>
          <Route index element={<HomeRouteV1 />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<ServicesScreen />} />

          {/* Services  route */}
          <Route path="/website-design-services" element={<WebsiteDesign />} />
          <Route path="/web-development-services" element={<WebsiteDevelopment />} />
          <Route path="/web-application-development" element={<WebApplication />} />
          <Route path="/ui-ux-design-services" element={<UIUXDesign />} />
          <Route path="/ecommerce-development-services" element={<EcommerceDevelopment />} />
          <Route path="/custom-software-solutions" element={<CustomSoftware />} />
          <Route path="/digital-strategy-consulting" element={<DigitalStrategy />} />
          <Route path="/web-hosting-services" element={<WebHosting />} />
          <Route path="/geo-seo-services" element={<GeoSeoServices />} />
          <Route path="/website-maintenance-services" element={<WebsiteMaintenance />} />
          <Route path="ai-automation-solutions" element={<AIAutomation />}/>

          {/* Other Routes */}
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/thank-you" element={<ThankyouPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
    <WhatsAppButton />
    <Suspense fallback={null}>
      <Chatbot />
    </Suspense>
    </>
  );
}

export default App;
