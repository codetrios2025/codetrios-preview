
import React from "react";
import { Helmet } from "react-helmet-async";

const HomeServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": "https://www.codetrios.com/#services",

    "name": "Web Development & Digital Solutions Services",

    "description":
      "CodeTrios provides website design, web development, eCommerce development, web application development, custom software, UI/UX design, and AI automation solutions for businesses.",

    "url": "https://www.codetrios.com/",

    "provider": {
      "@id": "https://www.codetrios.com/#organization"
    },

    "serviceType": [
      "Website Design",
      "Web Development",
      "eCommerce Development",
      "Web Application Development",
      "UI/UX Design",
      "Custom Software Development",
      "SEO and GEO Services",
      "AI and Business Automation"
    ],

    "areaServed": [
        {
            "@type": "Country",
            "name": "India"
        },
        {
            "@type": "Country",
            "name": "United States"
        },
        {
            "@type": "Country",
            "name": "United Kingdom"
        },
        {
            "@type": "Country",
            "name": "Canada"
        },
        {
            "@type": "Country",
            "name": "Australia"
        },
        {
            "@type": "Country",
            "name": "United Arab Emirates"
        }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default HomeServiceSchema;