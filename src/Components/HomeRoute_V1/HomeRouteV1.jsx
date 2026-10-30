import { lazy, Suspense, useEffect, useRef, useState } from "react";
import HeroBanner from "./HeroBanner";
import AboutUs from "./AboutUs";
// import OurServices from "./Services/OurServices";
import OurServices from "./OurServices";
import IndustriesWork from "./IndustriesWork";
import ScrollFX from "./AnimationScreen/Scrollfx";
import SEO from "../SEO/websiteMeta";
import SchemaGraph from "../SEO/Schema/SchemaGraph";
import HomeServiceSchema from "../SEO/HomeServiceSchema";
import SeoData from "../SEO/Seo.json";

const Idea = lazy(() => import("./Idea"));
const homeSeo = SeoData.home;

const HomeRouteV1 = () => {
  const ideaRef = useRef(null);
  const [shouldLoadIdea, setShouldLoadIdea] = useState(false);

  useEffect(() => {
    const element = ideaRef.current;
    if (!element) return undefined;

    let loaded = false;
    let idleCallbackId;
    let timeoutId;
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) loadIdea();
            },
            { rootMargin: "1000px 0px" }
          )
        : null;

    const loadIdea = () => {
      if (loaded) return;
      loaded = true;
      observer?.disconnect();
      setShouldLoadIdea(true);
    };

    observer?.observe(element);

    if (typeof window.requestIdleCallback === "function") {
      idleCallbackId = window.requestIdleCallback(loadIdea, { timeout: 2000 });
    } else {
      timeoutId = window.setTimeout(loadIdea, 1500);
    }

    return () => {
      observer?.disconnect();
      if (
        idleCallbackId !== undefined &&
        typeof window.cancelIdleCallback === "function"
      ) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      <SEO page="home" />
      <SchemaGraph
        pageName={homeSeo.title}
        pageDescription={homeSeo.description}
        pageUrl={homeSeo.canonical}
      />
      <HomeServiceSchema />
      <ScrollFX />
      <HeroBanner />
      <AboutUs />
      <OurServices />
      <IndustriesWork />
      <div ref={ideaRef}>
        {shouldLoadIdea && (
          <Suspense fallback={null}>
            <Idea />
          </Suspense>
        )}
      </div>
    </>
  );
};


export default HomeRouteV1;