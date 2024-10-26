import Link from "next/link";
import { useState, useEffect } from "react";

const HomeSection = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFloating((prevIsFloating) => !prevIsFloating);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white pt-10 pb-2 mt-10 lg:mt-10">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover filter blur-xs"
          src="/videos/globe1.mp4"
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 filter blur-none"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-20 text-white py-40">
        <div className="lg:w-1/2 lg:mr-8 text-center lg:text-left ">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 fadeInLeft"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            EMPOWER YOUR BUSINESS WITH INNOVATIVE TECHNOLOGY AND STRATEGIC
            INSIGHTS
          </h1>

          <p
            className="text-sm md:text-base lg:text-lg mb-8 fadeIn"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Transform your organization with our tailored technology solutions
            and strategic insights that drive growth and efficiency.
          </p>

          <Link href="/get-started">
            <div className="inline-block mb-8 fadeIn">
              <div className="bg-voodoo-500 text-white py-3 px-12 rounded hover:bg-voodoo-600 cursor-pointer">
                Consult
              </div>
            </div>
          </Link>

          <div
            className="flex justify-center lg:justify-start space-x-4 text-voodoo-600 text-sm md:text-base lg:text-lg fadeIn text-white"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <span>RESULTS-ORIENTED</span>
            <span className="border-l border-white h-6"></span>
            <span>CUSTOMER-CENTRIC</span>
            <span className="border-l border-white h-6"></span>
            <span>TECHNOLOGY-DRIVEN</span>
          </div>
        </div>

        {/* <div
          className="lg:w-1/2 lg:ml-8"
          style={{
            transform: isFloating ? "translateY(-10px)" : "translateY(10px)",
            transition: "transform 1s ease-in-out",
          }}
        >
          <img
            src="https://i.ibb.co/stffQvj/195-ai-brush-removebg-7bsa0s7q.png"
            alt="Anread Solutions"
            className="w-full rounded-lg opacity-0"
          />
        </div> */}
      </div>
    </section>
  );
};

export default HomeSection;
