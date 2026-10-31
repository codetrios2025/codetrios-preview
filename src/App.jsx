import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import LayoutScreen from "./Components/Common/Layout";
import ScrollTop from "./Components/Common/ScrollTop";
import HomeRouteV1 from "./Components/HomeRoute_V1/HomeRouteV1";

const AboutUs = lazy(() => import("./Components/AboutusNew/AboutUs"));
const ServicesScreen = lazy(() => import("./Components/ServicesNew/MainService"));
const WebsiteDesign = lazy(() => import("./Components/ServicesNew/AllServices/WebDesignService"));
const WebsiteDevelopment = lazy(() => import("./Components/ServicesNew/AllServices/WebDevelopmentServices"));
const WebApplication = lazy(() => import ('./Components/ServicesNew/AllServices/WebApplicationServices'));
const UIUXDesign = lazy(() => import ('./Components/ServicesNew/AllServices/DesignService'));
const EcommerceDevelopment = lazy(() => import ('./Components/ServicesNew/AllServices/EcommerceDevelopmentServices'));
const CustomSoftware = lazy(() => import ('./Components/ServicesNew/AllServices/CustomSoftwareServices'));
const DigitalStrategy = lazy(() => import ('./Components/ServicesNew/AllServices/DigitalStrategyServices'));
const WebHosting = lazy(() => import ('./Components/ServicesNew/AllServices/WebHostingServices'));
const GeoSeoServices = lazy(() => import ('./Components/ServicesNew/AllServices/GeoSeoServices'));

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     once: true,
  //   });
  // }, []);
  return (
    <>
    <ScrollTop />
    <Routes>
      <Route path="/" element={<LayoutScreen />}>
        <Route index element={<HomeRouteV1 />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/website-design-services" element={<WebsiteDesign />} />
        <Route path="/web-development-services" element={<WebsiteDevelopment />} />
        <Route path="/web-application-development" element={<WebApplication />} />
        <Route path="/ui-ux-design-services" element={<UIUXDesign />} />
        <Route path="/ecommerce-development-services" element={<EcommerceDevelopment />} />
        <Route path="/custom-software-solutions" element={<CustomSoftware />} />
        <Route path="/digital-strategy-consulting" element={<DigitalStrategy />} />
        <Route path="/web-hosting-services" element={<WebHosting />} />
        <Route path="/geo-seo-services" element={<GeoSeoServices />} />
      </Route>
    </Routes>
      {/* <ToastContainer />
      <AppRoutes />
      <WhatsAppButton />
      <Chatbot /> */}
    </>
  );
}

export default App;
