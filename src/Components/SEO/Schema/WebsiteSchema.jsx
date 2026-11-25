import React from "react";

const WebsiteSchema = () => {

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",

        "@id": "https://www.codetrios.com/#website",

        "url": "https://www.codetrios.com/",

        "name": "CodeTrios",

        "description":
            "CodeTrios provides website design, web development, eCommerce development, web applications, custom software, UI/UX design, and AI automation solutions for businesses.",

        "publisher": {
            "@id": "https://www.codetrios.com/#organization"
        },

        "inLanguage": "en-IN"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema)
            }}
        />
    );
};

export default WebsiteSchema;