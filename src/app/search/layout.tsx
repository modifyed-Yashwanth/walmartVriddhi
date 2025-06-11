import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/types";
import { Suspense } from "react";

function layout({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-[51px] my-6 sm:my-8 md:my-[40px] pt-[60px]">
          <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default layout;
