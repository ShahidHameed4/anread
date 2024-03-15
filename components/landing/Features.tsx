import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCode, faComments, faChartBar, faUsers, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

// Define the features with their details
const features = [
  {
    id: 1,
    title: "Customizable Conversational Flows",
    description:
      "Easily create and customize conversational flows tailored to your business needs.",
    icon: faCog,
  },
  {
    id: 2,
    title: "Multi-Platform Integration",
    description:
      "Seamlessly integrate your chatbot across various platforms including websites, mobile apps, and social media channels.",
    icon: faCode,
  },
  {
    id: 3,
    title: "Natural Language Understanding (NLU)",
    description:
      "Utilize advanced natural language processing techniques to enable your chatbot to understand and respond to user queries effectively.",
    icon: faComments,
  },
  {
    id: 4,
    title: "Analytics and Reporting",
    description:
      "Gain insights into user interactions with detailed analytics and reporting features, allowing you to optimize your chatbot performance.",
    icon: faChartBar,
  },
  {
    id: 5,
    title: "Integration with Existing Systems",
    description:
      "Integrate your chatbot with existing CRM, ERP, and other systems to streamline processes and enhance customer experiences.",
    icon: faUsers,
  },
  {
    id: 6,
    title: "Human Handoff",
    description:
      "Enable seamless transition to human agents when the chatbot is unable to address user queries, ensuring a smooth customer service experience.",
    icon: faHandsHelping,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 font-pacifico">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Map over the features array to generate feature cards */}
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center text-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="mb-4">
                <FontAwesomeIcon icon={feature.icon} className="text-teal-500 text-5xl" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
