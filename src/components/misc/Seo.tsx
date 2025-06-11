// components/Seo.tsx
"use client";

import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  url: string;
  image: string;
  structuredData?: object;
}

const Seo = ({ title, description, url, image, structuredData }: SeoProps) => {
  useEffect(() => {
    const head = document.head;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let tag = head.querySelector(
        `meta[${attr}="${name}"]`
      ) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    document.title = title;

    setMeta("description", description);
    setMeta("robots", "index,follow");
    setMeta("og:locale", "en", true);
    setMeta("og:type", "website", true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", url, true);
    setMeta("og:site_name", title, true);
    setMeta("og:image", image, true);
    setMeta("twitter:card", "summary_large_image");

    if (structuredData) {
      let script = document.getElementById(
        "json-ld"
      ) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script") as HTMLScriptElement;
        script.type = "application/ld+json";
        script.id = "json-ld";
        document.head.appendChild(script);
      }
      script.innerHTML = JSON.stringify(structuredData);
    }
  }, [title, description, url, image, structuredData]);

  return null;
};

export default Seo;
