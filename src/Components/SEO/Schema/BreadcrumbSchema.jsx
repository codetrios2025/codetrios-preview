
import React from "react";

const BreadcrumbSchema = ({ items = [] }) => {
  const validItems = items.filter((item) => item?.name);

  if (!validItems.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    "itemListElement": validItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url ? { "item": item.url } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

export default BreadcrumbSchema;
