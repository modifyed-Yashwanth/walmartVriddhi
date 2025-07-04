// src/app/layout.tsx
import localFont from "next/font/local";
import { ReactNode } from "react";

// Load the font
const everydaySans = localFont({
  src: [
    {
      path: "../../public/fonts/EverydaySans-Light-Web.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/EverydaySans-Regular-Web.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/EverydaySans-Medium-Web.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/EverydaySans-Bold-Web.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-everyday",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  // Set default lang to 'en'. Locale will be set by [locale] segment for locale-prefixed routes.
  return (
    <html lang="en">
      <body className={`${everydaySans.className} bg-white`}>{children}</body>
    </html>
  );
}
