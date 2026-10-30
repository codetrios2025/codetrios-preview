import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SeoData from "./Seo.json";
import GeoKeywords from "./GeoKeywords.json";
import logoImage from "../../assets/images/codetrios_logo.webp";

export default function SEO({ page }) {
    const seo = SeoData[page];

    useEffect(() => {
        document.head
            .querySelectorAll("[data-static-seo]")
            .forEach((tag) => tag.remove());
    }, []);

    if (!seo) return null;

    const siteName = "CodeTrios";

    const title = seo.title;
    const description = seo.description;
    const canonical = seo.canonical;

    const image = new URL(
        seo.image || logoImage,
        "https://www.codetrios.com"
    ).href;

    // Page-specific GEO keywords
    const pageGeoKeywords =
        GeoKeywords.pages?.[page] || [];

    // SEO keywords from Seo.json
    const seoKeywords = seo.keywords
        ? seo.keywords
            .split(",")
            .map(keyword => keyword.trim())
        : [];

    // Remove duplicate keywords
    const keywords = [
        ...new Set([
            ...seoKeywords,
            ...pageGeoKeywords
        ])
    ].join(", ");

    return (
        <Helmet>

            {/* BASIC SEO */}

            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

            <meta
                name="robots"
                content="index, follow, max-image-preview:large"
            />

            {/* CANONICAL */}

            <link
                rel="canonical"
                href={canonical}
            />

            {/* OPEN GRAPH */}

            <meta
                property="og:type"
                content="website"
            />

            <meta
                property="og:site_name"
                content={siteName}
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:url"
                content={canonical}
            />

            <meta
                property="og:image"
                content={image}
            />
            <meta
                property="og:image:alt"
                content={`${siteName} - ${title}`}
            />

            {/* TWITTER */}

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={image}
            />

        </Helmet>
    );
}