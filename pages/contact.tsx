import React from "react";
import Layout from "../components/landing/Layout";
import Header from "../components/landing/Header";

const ContactPage = () => {
  return (
    <Layout>
      <Header />
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-teal-600 mb-6 font-pacifico">
              Contact Us
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Have questions or want to learn more about our services? Get in
              touch with us!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                  Send us a Message
                </h3>
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
                      className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
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
                      className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
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
                      className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              {/* Contact Information */}
              <div className="bg-white rounded-lg text-left shadow-md p-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                  Reach Out Directly
                </h3>
                <div className="text-gray-800">
                  <p className="mb-2">
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:contact@botbakery.com">contact@botbakery.com</a>
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href="tel:+11234567890">+1 (123) 456-7890</a>
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Address:</span> 123
                    BotBakery Street, City, Country
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
