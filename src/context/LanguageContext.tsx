"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  language: string;
  changeLanguage: (lng: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

type Props = { children: ReactNode };

export const LanguageProvider = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    // Update i18next
    i18n.changeLanguage(lng);

    // Change URL locale prefix
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "hi") {
      segments[1] = lng;
    } else {
      segments.splice(1, 0, lng);
    }
    router.push(segments.join("/"));
  };

  return (
    <LanguageContext.Provider
      value={{ language: i18n.language, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
