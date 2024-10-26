import Link from "next/link";
import Layout from "../components/landing/Layout";
import HomeSection from "../components/landing/HomeSection";
import FAQSection from "../components/landing/FAQs";
import FeaturesSection from "../components/landing/Features";
import Plan from "../components/landing/Plans";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import { WorkTogether } from "../components/landing/WorkTogether";
import ClientLogosCarousel from "../components/landing/LogoCoursel";
import AnreadStats from "../components/landing/Stats";
import ServicesSection from "../components/landing/Services";
import WhyChooseUsSection from "../components/landing/WhyChooseUs";
import VideoBackgroundSection from "../components/landing/VideoBackground";
import AnreadWaySection from "../components/landing/ANREADWAY";

const technologyServicesData = {
  leftColumnHeading: "Technology Services",
  leftColumnDescription:
    "Our cutting-edge technology services are designed to help businesses stay ahead in a constantly evolving digital landscape. From cloud solutions to cybersecurity, we deliver tailored services that meet your unique needs.",
  services: [
    {
      title: "Cloud Infrastructure",
      description:
        "Leverage scalable and secure cloud solutions that enhance operational efficiency and reduce costs.",
      link: "/cloud-infrastructure",
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your organization with our advanced cybersecurity solutions, designed to safeguard your critical assets.",
      link: "/cybersecurity",
    },
    {
      title: "Data Analytics",
      description:
        "Unlock the power of your data with our analytics services that transform raw data into actionable insights.",
      link: "/data-analytics",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Integrate AI and machine learning into your processes to automate, optimize, and innovate your business.",
      link: "/ai-ml",
    },
    {
      title: "DevOps & Automation",
      description:
        "Streamline development and operations with our DevOps services that improve collaboration and speed up delivery cycles.",
      link: "/devops-automation",
    },
    {
      title: "IT Support & Maintenance",
      description:
        "Comprehensive IT support services to keep your systems running smoothly and minimize downtime.",
      link: "/it-support-maintenance",
    },
  ],
};

const IndexPage = () => (
  <div>
    <Layout title="ANREAD - Taking You Ahead">
      <Header />
      <HomeSection />
      <ClientLogosCarousel />
      <AnreadStats />
      <AnreadWaySection />
      <ServicesSection />

      {/* <WhyChooseUsSection /> */}

      <VideoBackgroundSection />
      {/* <Plan />
      <FeaturesSection />

      

      <FAQSection /> */}
      <WorkTogether />

      <footer className="bg-gradient-to-r from-voodoo-800 to-voodoo-500 text-white py-4">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </Layout>
  </div>
);

export default IndexPage;
