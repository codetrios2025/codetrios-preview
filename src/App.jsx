import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import LayoutScreen from "./Components/Common/Layout";
import ScrollTop from "./Components/Common/ScrollTop";
import HomeRouteV1 from "./Components/HomeRoute_V1/HomeRouteV1";

const AboutUs = lazy(() => import("./Components/AboutusNew/AboutUs"));
const ServicesScreen = lazy(() => import("./Components/ServicesNew/MainService"));
const WebsiteDesign = lazy(() => import("./Components/ServicesNew/AllServices/WebDesignService"));
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
