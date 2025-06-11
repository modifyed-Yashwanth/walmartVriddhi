import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/types";
import React from "react";

function layout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      <div className="px-4 md:px-15 pt-14">{children}</div>
      <Footer />
    </>
  );
}

export default layout;
