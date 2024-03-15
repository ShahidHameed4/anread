import Link from "next/link";
import Typed from "typed.js";

import { useEffect } from "react";

const HomeSection = () => {
  useEffect(() => {
    const textElement = document.getElementById("typewriter-text");
    if (textElement) {
      const typed = new Typed(textElement, {
        strings: [
          "Start Creating Your Personalized Assistant",
          "Empower Your Business with AI Chatbots",
          "Enhance Customer Engagement with Chatbots",
        ],
        typeSpeed: 50,
        loop: true,
        showCursor:false
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="bg-white py-10 mt-20 lg:mt-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:mr-8">
          <h1 className="text-4xl font-bold mb-8 font-pacifico" id="typewriter-text"></h1>
          <p className="text-lg mb-8">
            Create your own AI assistant tailored to your needs. Whether it's
            for customer support, scheduling appointments, or answering FAQs,
            our platform makes it easy for you to build and deploy your AI
            assistant in minutes. No coding required – just customize, train,
            and launch! Experience the power of AI today.
          </p>
          <Link href="/create">
            <div className="inline-block">
              <div className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 cursor-pointer">
                Get Started
              </div>
            </div>
          </Link>
        </div>
        <div className="lg:w-1/2 lg:ml-8">
          <img
            src="https://i.ibb.co/qYyV3n5/195.jpg"
            alt="Sample Image"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
