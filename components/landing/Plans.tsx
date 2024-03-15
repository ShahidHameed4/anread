import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const features = {
  basic: [
    "Customizable Conversation Flows",
    "Basic Natural Language Understanding (NLU)",
    "Integration with One Platform",
    "Limited Analytics and Reporting",
    "Email Support",
  ],
  standard: [
    "Advanced Conversation Design Tools",
    "Enhanced Natural Language Processing (NLP)",
    "Integration with Multiple Platforms",
    "Detailed Analytics and Reporting",
    "Live Chat Support",
  ],
  premium: [
    "Advanced AI Conversation Design",
    "Advanced Natural Language Understanding",
    "Integration with Unlimited Platforms",
    "Real-time Analytics and Reporting",
    "Priority Phone Support",
  ],
};

const PricingPage = () => {
  // Define the plans with their details
  const plans = [
    {
      title: "Basic",
      description: "Perfect for getting started",
      price: "$10 /month",
      features: features.basic,
    },
    {
      title: "Standard",
      description: "Perfect for growing businesses",
      price: "$20 /month",
      features: features.standard,
    },
    {
      title: "Premium",
      description: "Perfect for enterprise solutions",
      price: "$30 /month",
      features: features.premium,
    },
  ];

  return (
    <section className="py-0 bg-white-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 font-pacifico text-teal-600">
          Choose Your Plan
        </h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {/* Map over the plans array to generate plan cards */}
          {plans.map((plan, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md border border-teal-500">
                <h3 className="text-2xl font-semibold text-center mb-4 text-teal-600 font-pacifico">
                  {plan.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {plan.description}
                </p>
                <ul className="text-gray-600 mb-4 ml-0">
                  {/* Map over the features of each plan to display them */}
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mr-2 text-teal-500"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-center mb-4 text-teal-600 font-pacifico">
                  {plan.price}
                </div>
                <button className="bg-teal-500 text-white py-2 px-4 block mx-auto rounded-md hover:bg-teal-600 transition duration-300">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
