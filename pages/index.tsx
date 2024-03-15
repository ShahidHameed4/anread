import Link from "next/link";
import Layout from "../components/landing/Layout";
import "../styles/index.css";
import HomeSection from "../components/landing/HomeSection";
import FAQSection from "../components/landing/FAQs";
import FeaturesSection from "../components/landing/Features";
import Plan from "../components/landing/Plans";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
const IndexPage = () => (
  <div>
    <Layout title="Home | Next.js + TypeScript Example">
      <Header />
      <HomeSection />
      <Plan />
      <FeaturesSection />

      <FAQSection />
      <footer className="bg-gradient-to-r from-teal-800 to-teal-500 text-white py-4">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </Layout>
  </div>
);

export default IndexPage;
