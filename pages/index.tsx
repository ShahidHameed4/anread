import Link from "next/link";
import Layout from "../components/landing/Layout";
import "../styles/index.css";
import HomeSection from "../components/landing/HomeSection";
import FAQSection from "../components/landing/FAQs";
const IndexPage = () => (
  <div>
    <Layout title="Home | Next.js + TypeScript Example">
      <HomeSection />
      <FAQSection />
    </Layout>
  </div>
);

export default IndexPage;
