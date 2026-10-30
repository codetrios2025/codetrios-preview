import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AppRoutes from "./AppRoutes";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import WhatsAppButton from "./Components/Common/WhatsAppButton";
// import Chatbot from "./Chatbot";

import LayoutScreen from "./Components/Common/Layout";
import HomeRouteV1 from "./Components/HomeRoute_V1/HomeRouteV1";
// Lazy load pages
const AboutUs = lazy(() => import("./Components/AboutPageV1/AboutusPage"));

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
    <Routes>
      <Route path="/" element={<LayoutScreen />}>
        <Route index element={<HomeRouteV1 />} />
        <Route path="/about-us" element={<AboutUs />} />
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
