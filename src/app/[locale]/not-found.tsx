import { PrimaryButton } from "@/components/buttons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mx-38 py-10">
        <div className="flex-grow flex gap-x-40 justify-between items-center mx-12 mt-20">
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-[220px] font-extrabold text-[#0053e2]">404</h1>
            <p className="text-[30px] font-normal text-[#0053e2]">
              Page not found!
            </p>
          </div>
          <h2 className="text-gray-800 font-bold text-3xl w-[50vw]">
            The page you are looking for doesn&apos;t exist. You may have
            mistyped the address or the page may have been moved.
          </h2>
        </div>
        <div className="flex items-center justify-center mb-6">
          <PrimaryButton
            href="/"
            text="Go to Home Page"
            className="text-white"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
