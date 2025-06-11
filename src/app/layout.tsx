import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers/providers";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className={`${everydaySans.className} bg-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
