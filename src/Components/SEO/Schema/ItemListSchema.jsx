
import React from "react";

const ItemListSchema = ({
  name,
  description,
  url,
  items = [],
}) => {
  const validItems = items.filter((item) => item?.name);

  if (!validItems.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",

    ...(name && { "name": name }),
    ...(description && { "description": description }),
    ...(url && { "url": url }),

    "itemListElement": validItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,

      "item": {
        "@type": "Thing",
        "name": item.name,
        ...(item.url && { "url": item.url }),
        ...(item.description && {
          "description": item.description,
        }),
      },
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

export default ItemListSchema;
