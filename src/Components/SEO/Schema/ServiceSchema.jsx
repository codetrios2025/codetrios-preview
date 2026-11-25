
import React from "react";
import { Helmet } from "react-helmet-async";

const ServiceSchema = ({
  name,
  description,
  url,
  serviceType,
  areaServed = ["India"],
}) => {
  if (!name || !description || !url || !serviceType) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": `${url}#service`,

    "name": name,
    "description": description,
    "url": url,
    "serviceType": serviceType,

    "provider": {
      "@id": "https://www.codetrios.com/#organization",
    },

    "mainEntityOfPage": {
      "@id": `${url}#webpage`,
    },

    "areaServed": areaServed.map((country) => ({
      "@type": "Country",
      "name": country,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema).replace(/</g, "\\u003c")}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
