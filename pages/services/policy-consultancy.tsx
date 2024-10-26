import React from "react";
import Layout from "../../components/landing/Layout";
import Header from "../../components/landing/Header";
import { motion } from "framer-motion";
import Footer from "../../components/landing/Footer";
import ServicesSection from "../../components/landing/Services";
import RotatingSVG from "../../components/landing/RotateProcess";
import TechServiceSection from "../../components/landing/Services/TechServiceSection";
import { WorkTogether } from "../../components/landing/WorkTogether";
import WorkingOptionsSection from "../../components/landing/Services/WorkingOptions";
import HeroSection from "../../components/landing/Services/HeroSection";

import {
  technologyServicesData,
  ServiceData,
  workingOptionsData,
  heroData,
} from "../../data/data/PolicyConsulting";

const TechServicesPage = () => {
  return (
    <Layout>
      <Header />
      <HeroSection data={heroData} />

      {ServiceData.map((section, index) => (
        <div key={index}>
          {index === 0 && (
            <div className="block md:hidden">
              <TechServiceSection
                data={section}
                noPaddingTop={section.noPaddingTop}
                noPaddingBottom={section.noPaddingBottom}
              />
            </div>
          )}
          <div className="hidden md:block">
            <TechServiceSection
              data={section}
              noPaddingTop={section.noPaddingTop}
              noPaddingBottom={section.noPaddingBottom}
            />
          </div>
        </div>
      ))}
      <ServicesSection
        leftColumnHeading={technologyServicesData.leftColumnHeading}
        leftColumnDescription={technologyServicesData.leftColumnDescription}
        services={technologyServicesData.services}
      />
      <RotatingSVG />

      <WorkingOptionsSection options={workingOptionsData} />

      <WorkTogether />
      <footer className="bg-gradient-to-r from-voodoo-800 to-voodoo-500 text-white py-4">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </Layout>
  );
};

export default TechServicesPage;
