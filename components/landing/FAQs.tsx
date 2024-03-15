import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQs = [
  {
    question: "What is a chatbot?",
    answer:
      "A chatbot is an AI-powered software application designed to simulate conversation with human users, typically over the internet. Chatbots are used in various applications, including customer service, sales, and automation.",
  },
  {
    question: "How does a chatbot work?",
    answer:
      "Chatbots work by using natural language processing (NLP) algorithms to interpret and respond to user inputs. They analyze the text input from users, understand their intent, and generate appropriate responses based on predefined rules or machine learning models.",
  },
  {
    question: "What can I use a chatbot for?",
    answer:
      "You can use a chatbot for various purposes, such as answering frequently asked questions, providing customer support, automating tasks, collecting feedback, and even driving sales through conversational marketing.",
  },
  {
    question: "Is it easy to create a chatbot?",
    answer:
      "With modern chatbot platforms and tools, creating a chatbot has become much easier than before. Many platforms offer intuitive interfaces, drag-and-drop builders, and pre-built templates, allowing users to create chatbots without coding knowledge.",
  },
  {
    question: "Do I need coding skills to build a chatbot?",
    answer:
      "No, you don't necessarily need coding skills to build a chatbot. Many chatbot platforms offer visual builders and drag-and-drop interfaces that allow users to create and customize chatbots without writing any code. However, having coding skills can be beneficial for advanced customization and integration.",
  },
  {
    question: "Can I integrate a chatbot with my website or app?",
    answer:
      "Yes, most chatbot platforms provide integration options to embed chatbots into websites, mobile apps, messaging platforms, and other digital channels. You can typically generate an embeddable code snippet or use APIs to integrate chatbots seamlessly with your existing systems.",
  },
  {
    question: "How can I improve my chatbot's performance?",
    answer:
      "To improve your chatbot's performance, you can continuously analyze user interactions, gather feedback, and iterate on your chatbot's design and responses. Additionally, leveraging machine learning algorithms and natural language understanding can enhance your chatbot's ability to understand and respond to user queries.",
  },
  {
    question: "Is it important to train my chatbot?",
    answer:
      "Yes, training your chatbot is crucial for ensuring accurate and relevant responses to user queries. You can train your chatbot by providing it with a diverse set of training data, refining its responses based on user feedback, and continuously monitoring its performance to identify areas for improvement.",
  },
];  

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white-100 py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8 font-pacifico">We give you knowledge with ease</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{ height: openIndex === index ? "auto" : "min-content" }}
            >
              <div
                className="flex justify-between items-center cursor-pointer p-6"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <FontAwesomeIcon
                  icon={openIndex === index ? faMinus : faPlus}
                  className="text-gray-600"
                />
              </div>
              {openIndex === index && (
                <div className="px-6 pb-6 mt-0">
                  <p className="text-teal-800 mt-0 font-mullish">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
