"use client";
// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar({ sticky = true }: { sticky?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    ["About Us", "/about-us"],
    ["MSME Growth Journey", "/msme-growth-journey"],
    ["Walmart Marketplace", "/marketplace"],
    ["Resources", "/resource-hub"],
    ["Newsroom", "/newsroom"],
    ["Success Stories", "/success-stories"],
    ["FAQs", "/faqs"],
  ];

  return (
    <header
      className={clsx(
        "bg-[#0053e2] w-full z-50 transition-all duration-300",
        sticky && "fixed top-0 left-0 shadow-lg"
      )}
    >
      <div className="mx-auto max-w-[1500px] px-4 md:px-15">
        <nav className="flex h-[64px] items-center justify-between">
          {/* Mobile logo and hamburger */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/brand_logo.png"
                alt="Brand Logo"
                width={120}
                height={30}
                className="object-contain"
                priority
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center justify-between flex-1 gap-x-[20px]">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/brand_logo.png"
                alt="Brand Logo"
                width={160}
                height={41}
                className="object-contain"
                priority
              />
            </Link>
            <ul className="flex space-x-6 text-white text-sm font-medium">
              {menuItems.map(([label, href]) => {
                const isActive = pathname === href;

                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`text-[14px] font-light transition-all pb-1 hover:text-gray-200 hover:border-b-4 hover:rounded-b-[4px] text-nowrap ${
                        isActive
                          ? "border-b-4 rounded-b-[4px] text-gray-200"
                          : ""
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <form
              className="relative ml-6"
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery) {
                  router.push(
                    `/search?query=${encodeURIComponent(searchQuery)}`
                  );
                }
              }}
            >
              <input
                type="text"
                placeholder="Search"
                className="py-4 px-8 rounded-full h-[32px] w-[200px] bg-white text-black placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fas fa-search absolute left-2 top-1/2 -translate-y-1/2 text-black/70" />
            </form>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0053e2] py-4 px-2">
            <ul className="flex flex-col space-y-4 text-white">
              {[
                ["About Us", "/about-us"],
                ["MSME Growth Journey", "/msme-growth-journey"],
                ["Walmart Marketplace", "/marketplace"],
                ["Resources", "/resource-hub"],
                ["Newsroom", "/newsroom"],
                ["Success Stories", "/success-stories"],
                ["FAQs", "/faqs"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-gray-200 text-[14px] font-light block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-1.5 rounded-full h-[32px] bg-white text-black placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-black/70" />
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
