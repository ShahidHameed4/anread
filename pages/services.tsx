import React from "react";
import Layout from "../components/landing/Layout";
import "../styles/index.css";
import Header from "../components/landing/Header";

const ServicesPage = () => {
  return (
    <Layout>
      <Header />
      <section className="py-24 bg-gray-100 pt-24">
        <div className="container mx-auto mt-2">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-teal-600 mb-6 font-pacifico">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At <a className="font-pacifico">BotBakery</a>, we offer a range of services tailored to meet the
              diverse needs of businesses seeking to leverage AI-driven chatbot
              technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                  Chatbot Development
                </h3>
                <p className="text-gray-700 mb-4">
                  Harness the power of AI with our custom chatbot development
                  services. From design to deployment, we'll create chatbots
                  tailored to your business needs.
                </p>
                <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300">
                  Learn More
                </button>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                  Chatbot Integration
                </h3>
                <p className="text-gray-700 mb-4">
                  Seamlessly integrate chatbots into your existing platforms and
                  systems. Enhance user experiences and streamline operations
                  with our integration services.
                </p>
                <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300">
                  Learn More
                </button>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                  Chatbot Analytics
                </h3>
                <p className="text-gray-700 mb-4">
                  Gain valuable insights into user interactions and chatbot
                  performance with our advanced analytics solutions. Optimize
                  your chatbots for better results.
                </p>
                <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
