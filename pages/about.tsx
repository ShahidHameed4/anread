import React from "react";
import Layout from "../components/landing/Layout";
import Header from "../components/landing/Header";
const AboutPage = () => {
  return (
    <Layout>
      <Header />

      <section className="py-16 bg-gray-100 pt-24">
        {" "}
        {/* Added pt-24 for padding top */}
        <div className="container mx-auto mt-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-teal-600 mb-6 font-pacifico">
              Welcome to BotBakery
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We are a team of passionate developers and AI enthusiasts
              dedicated to revolutionizing how businesses engage with their
              customers through cutting-edge chatbot technology.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our mission is to empower businesses of all sizes to harness the
              power of artificial intelligence and automation to enhance
              customer experiences, streamline operations, and drive growth.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              At BotBakery, we believe in simplicity, innovation, and
              accessibility. Our platform provides intuitive tools and
              comprehensive features to help you create, deploy, and manage
              powerful AI chatbots without the need for extensive technical
              knowledge.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're a startup looking to automate customer support, an
              e-commerce store seeking to improve sales conversions, or an
              enterprise aiming to optimize business processes, BotBakery has
              you covered.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Join us on this exciting journey as we transform the way
              businesses interact with their audiences and shape the future of
              AI-driven customer engagement.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
