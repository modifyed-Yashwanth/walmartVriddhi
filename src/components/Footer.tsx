// components/Footer.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import PartnersSection from "./PartnersSection";
import { PhoneCall } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { disclaimer } from "@/data/data";

const Footer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);
  return (
    <>
      <AnimatedSection delay={0.4}>
        <footer className="bg-white">
          <PartnersSection />
          <div className="bg-white text-black border-t border-gray-300 text-[14px] font-light font-everyday">
            <div className="mx-auto my-[35px] max-w-[1500px] px-4 md:px-15 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 text-sm">
              {/* Logo */}
              <div className="col-span-3">
                <Image
                  src="/images/Walmart_Vriddhi_Horizontal_True_Blue_rgb.svg"
                  alt="Walmart Vriddhi Logo"
                  width={185}
                  height={50}
                  className="mt-2"
                />
              </div>

              {/* Quick Links */}
              <div className="col-span-3">
                <h4 className="font-bold mb-3 text-lg">Quick Links</h4>
                <ul className="flex flex-col gap-3">
                  <li className="m-0">
                    <Link href={"/about-us"} className="hover:text-[#0053E2]">
                      About Us
                    </Link>
                  </li>
                  <li className="m-0">
                    <Link
                      href={"/msme-growth-journey"}
                      className="hover:text-[#0053E2]"
                    >
                      MSME Growth Journey
                    </Link>
                  </li>
                  <li className="m-0">
                    <Link
                      href={"/walmart-vriddhi-msme-summit-2024"}
                      className="hover:text-[#0053E2]"
                    >
                      MSME Summit 2024
                    </Link>
                  </li>
                  <li className="m-0">
                    <Link
                      href={"/walmart-vriddhi-msme-summit-2025"}
                      className="hover:text-[#0053E2]"
                    >
                      MSME Summit 2025
                    </Link>
                  </li>
                  <li className="m-0">
                    <Link href={"/contact-us"} className="hover:text-[#0053E2]">
                      Contact Us
                    </Link>
                  </li>
                  <li className="m-0">
                    <Link href={"/faqs"} className="hover:text-[#0053E2]">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-3">
                <h4 className="font-bold mb-3 text-lg">Contact Us</h4>
                <div className="flex flex-col gap-4">
                  <p>
                    <span className="block mb-2 font-medium">
                      For more information:{" "}
                    </span>
                    <a
                      href="mailto:contactus@walmartvriddhi.org"
                      className="hover:text-[#0053e2]"
                    >
                      contactus@walmartvriddhi.org
                    </a>
                  </p>
                  <p>
                    <span className="block mb-2 font-medium">
                      For program related queries:{" "}
                    </span>
                    <a
                      href="mailto:info@i2ifoundation.org"
                      className="hover:text-[#0053e2]"
                    >
                      info@i2ifoundation.org
                    </a>
                  </p>
                  <p>
                    <span className="block mb-2 font-medium">
                      For any media queries:{" "}
                    </span>
                    <a
                      href="mailto:wmintmediainquiry@wal-mart.com"
                      className="hover:text-[#0053e2]"
                    >
                      wmintmediainquiry@wal-mart.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-span-3">
                <h4 className="font-bold mb-3 text-lg">Call Us</h4>
                <div className="flex flex-col gap-4">
                  <p>
                    <a
                      href="tel:918448122399"
                      className="hover:text-[#0053e2] inline-flex items-center gap-2"
                    >
                      <PhoneCall size={16} strokeWidth={2} color="#0053e2" />{" "}
                      +91 8448-122399
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:918448122499"
                      className="hover:text-[#0053e2] inline-flex items-center gap-2"
                    >
                      <PhoneCall size={16} strokeWidth={2} color="#0053e2" />{" "}
                      +91 8448-122499
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 py-4 px-4 md:px-15 text-sm flex flex-col md:flex-row items-center justify-between mx-auto max-w-[1500px]">
            <p className="text-center md:text-left">
              ©2025 Walmart Vriddhi. All rights reserved.
            </p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a
                href="/privacy-policy"
                className="hover:text-[#0053e2] text-[12px] md:text-[16px]"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="hover:text-[#0053e2] text-[12px] md:text-[16px]"
              >
                Terms of Service
              </a>
              <a onClick={() => setShowDisclaimer(true)}></a>
              <Dialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
                <DialogTrigger>
                  <h1 className="hover:text-[#0053e2] text-[12px] md:text-[16px]">
                    Disclaimer
                  </h1>
                </DialogTrigger>
                <DialogContent className="w-[80%]">
                  <DialogTitle>Disclaimer</DialogTitle>
                  <div className="whitespace-pre-line leading-relaxed text-gray-700">
                    {disclaimer}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex gap-4 mt-2 md:mt-0 text-xl">
              <Link
                href="https://www.linkedin.com/company/walmart/posts/?feedView=all"
                target="_blank"
                className="hover:text-[#0071dc]"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                href="https://www.youtube.com/@Walmart"
                className="hover:text-[#FF0000]"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </>
  );
};

export default Footer;
