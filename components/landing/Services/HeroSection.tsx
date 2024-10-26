import React from "react";
import { HeroSectionData } from "../../../data/dtos/ServicesPage.dto";

interface Props {
  data: HeroSectionData;
}

const HeroSection: React.FC<Props> = ({ data }) => {
  const { title, description, buttonText, buttonLink, features } = data;

  return (
    <section className="relative bg-white pt-10 pb-2 mt-10 lg:mt-10">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover filter blur-xs"
          src="/videos/lines.mp4"
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-20 text-white py-40">
        <div className="lg:w-1/2 lg:mr-8 text-center lg:text-left">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 fadeInLeft"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {title}
          </h1>

          <p
            className="text-sm md:text-base lg:text-lg mb-8 fadeIn"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {description}
          </p>

          <a href={buttonLink}>
            <div className="inline-block mb-8 fadeIn">
              <div className="bg-voodoo-500 text-white py-3 px-12 rounded hover:bg-voodoo-600 cursor-pointer">
                {buttonText}
              </div>
            </div>
          </a>

          <div
            className="flex justify-center lg:justify-start space-x-4 text-voodoo-600 text-sm md:text-base lg:text-lg fadeIn text-white"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <span>{feature}</span>
                {index < features.length - 1 && (
                  <span className="border-l border-white h-6"></span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
