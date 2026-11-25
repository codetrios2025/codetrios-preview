
import React from "react";

import OrganizationSchema from "./OrganizationSchema";
import WebsiteSchema from "./WebsiteSchema";
import WebPageSchema from "./WebPageSchema";
import ServiceSchema from "./ServiceSchema";
import BreadcrumbSchema from "./BreadcrumbSchema";
import FAQSchema from "./FAQSchema";
import ItemListSchema from "./ItemListSchema";

const SchemaGraph = ({
  pageType = "website",

  pageName,
  pageDescription,
  pageUrl,

  serviceName,
  serviceDescription,
  serviceType,

  breadcrumbs = [],
  faqs = [],

  itemListName,
  itemListDescription,
  itemListItems = [],
}) => {
  const hasWebPageData = Boolean(
    pageName && pageDescription && pageUrl
  );

  const hasServiceData =
    pageType === "service" &&
    Boolean(
      serviceName &&
      serviceDescription &&
      serviceType &&
      pageUrl
    );

  const hasBreadcrumbs =
    Array.isArray(breadcrumbs) && breadcrumbs.length > 0;

  const hasFaqs =
    Array.isArray(faqs) && faqs.length > 0;

  const hasItemList =
    Array.isArray(itemListItems) && itemListItems.length > 0;

  return (
    <>
      {/* Global identity schemas */}
      <OrganizationSchema />
      <WebsiteSchema />

      {/* Page schema */}
      {hasWebPageData && (
        <WebPageSchema
          name={pageName}
          description={pageDescription}
          url={pageUrl}
        />
      )}

      {/* Service page schema */}
      {hasServiceData && (
        <ServiceSchema
          name={serviceName}
          description={serviceDescription}
          url={pageUrl}
          serviceType={serviceType}
        />
      )}

      {/* Breadcrumb schema */}
      {hasBreadcrumbs && (
        <BreadcrumbSchema items={breadcrumbs} />
      )}

      {/* FAQ schema */}
      {hasFaqs && (
        <FAQSchema faqs={faqs} />
      )}

      {/* Item list schema */}
      {hasItemList && (
        <ItemListSchema
          name={itemListName}
          description={itemListDescription}
          url={pageUrl}
          items={itemListItems}
        />
      )}
    </>
  );
};

export default SchemaGraph;
