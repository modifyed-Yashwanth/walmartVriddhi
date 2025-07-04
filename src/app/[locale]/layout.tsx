import { Providers } from "./providers/providers";
import { ReactNode } from "react";
import "../globals.css";

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
