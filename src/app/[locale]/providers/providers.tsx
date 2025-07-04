// app/providers.tsx
"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ChildrenProps } from "@/types/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import i18n from "../../../lib/i18next";
import { I18nextProvider } from "react-i18next";

export function Providers({ children }: ChildrenProps) {
  const [client] = useState(() => new QueryClient());

  return (
    <LanguageProvider>
      <QueryClientProvider client={client}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </LanguageProvider>
  );
}
