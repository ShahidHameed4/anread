import React from "react";
import Layout from "../components/landing/Layout";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

const ContactPage = () => {
  return (
    <Layout>
      <Header />
      <section className="py-5 pt-16 bg-gradient-to-r from-voodoo-500 to-voodoo-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4 fadeIn">Let’s Connect!</h2>
          <p className="text-lg">
            We're here to assist you with any inquiries or projects.
          </p>
        </div>
      </section>
      <section className="py-24 pt-5 bg-gray-100 ">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-semibold text-voodoo-600 text-center mb-8">
            Get in Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 fadeInLeft">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-800 font-semibold mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-voodoo-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-800 font-semibold mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-voodoo-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-800 font-semibold mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-voodoo-500"
                    placeholder="Type your message here"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-voodoo-600 text-white py-2 px-4 rounded-md hover:bg-voodoo-700 transition duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 fadeInRight">
              <h4 className="text-2xl font-semibold text-voodoo-600 mb-4">
                Contact Details
              </h4>
              <p className="text-gray-800 mb-2">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:contact@anread.io"
                  className="text-voodoo-500 hover:underline"
                >
                  contact@anread.io
                </a>
              </p>
              <p className="text-gray-800 mb-2">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+11234567890"
                  className="text-voodoo-500 hover:underline"
                >
                  +1 (123) 456-7890
                </a>
              </p>
              <p className="text-gray-800">
                <span className="font-semibold">Address:</span> 123 Anread
                Street, City, Country
              </p>
              {/* Schedule Meeting Section */}
              <h5 className="text-xl font-semibold text-voodoo-600 mb-2 mt-5">
                Schedule a Meeting
              </h5>
              <p className="text-gray-800 mb-4">
                Want to discuss something in detail? Choose a time that works
                for you!
              </p>
              <div className="flex flex-col space-y-4">
                <a
                  href="https://calendly.com/shahid-anread/30min" // Replace with your Calendly or scheduling link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-voodoo-500 text-white py-2 px-4 rounded-md text-center hover:bg-voodoo-600 transition duration-300"
                >
                  Schedule a Meeting
                </a>
                <p className="text-sm text-gray-500 text-center">
                  You can also reach out via email or phone for immediate
                  assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-voodoo-800 to-voodoo-600 text-white py-4">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </Layout>
  );
};

export default ContactPage;
