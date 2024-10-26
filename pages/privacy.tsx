import React from "react";
import Layout from "../components/landing/Layout";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Header />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-9xl">
          <h1 className="text-4xl font-bold mb-8 text-voodoo-900">
            Privacy Policy for Anread
          </h1>

          <p className="mb-6 text-voodoo-700 font-semibold text-lg">
            Welcome to Anread! We are dedicated to protecting your personal data
            and respecting your privacy. This privacy policy will inform you
            about how we manage your personal data when you visit our website
            and provide insight into your privacy rights and how the law
            safeguards your personal information.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-voodoo-900">
            Important Information and Who We Are
          </h2>

          <h3 className="text-xl font-medium mb-2 text-voodoo-800">
            Purpose of This Privacy Policy
          </h3>
          <p className="mb-6 text-voodoo-700 ">
            This privacy policy outlines how Anread collects, processes, and
            protects your personal data when you use our website, including any
            data you may provide when signing up for newsletters or contacting
            us.
          </p>

          <h3 className="text-xl font-medium mb-2 text-voodoo-800">
            Controller
          </h3>
          <p className="mb-6 text-voodoo-700">
            Anread is the controller and responsible for your personal data
            (referred to as "Anread", "we", "us", or "our" in this privacy
            policy).
          </p>

          <h3 className="text-xl font-medium mb-2 text-voodoo-800">
            Contact Details
          </h3>
          <p className="mb-6 text-voodoo-700">
            Full name of legal entity: Anread Inc. <br />
            Email address: hello@anread.io <br />
            Postal address: Regional Office: Plot no. 123, St 10, I-8/2,
            Islamabad
          </p>
          <p className="mb-6 text-voodoo-700">
            You have the right to make a complaint at any time to the relevant
            supervisory authority for data protection issues.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-voodoo-900">
            The Data We Collect About You
          </h2>
          <p className="mb-6 text-voodoo-700">
            Personal data means any information about an individual from which
            that person can be identified. It does not include data where the
            identity has been removed (anonymous data).
          </p>
          <p className="mb-6 text-voodoo-700">
            We may collect, use, store, and transfer different kinds of personal
            data about you, including:
          </p>
          <ul className="list-disc pl-5 mb-6 text-voodoo-700">
            <li className="mb-2">
              <strong>Identity Data</strong>: First name, last name, username,
              or similar identifier.
            </li>
            <li className="mb-2">
              <strong>Contact Data</strong>: Email address, phone number.
            </li>
            <li className="mb-2">
              <strong>Usage Data</strong>: Information on how you use our
              website, products, and services.
            </li>
            <li className="mb-2">
              <strong>Marketing and Communications Data</strong>: Your
              preferences in receiving marketing materials from us and your
              communication preferences.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-voodoo-900">
            How We Use Your Personal Data
          </h2>
          <p className="mb-6 text-voodoo-700">
            We will only use your personal data where the law allows us to. Most
            commonly, we will use your data in the following scenarios:
          </p>
          <ul className="list-disc pl-5 mb-6 text-voodoo-700">
            <li className="mb-2">
              Where we need to perform a contract we are about to enter into or
              have entered into with you.
            </li>
            <li className="mb-2">
              Where it is necessary for our legitimate interests (or those of a
              third party) and your rights do not override those interests.
            </li>
            <li className="mb-2">
              Where we need to comply with a legal obligation.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-voodoo-900">
            Data Security
          </h2>
          <p className="mb-6 text-voodoo-700">
            We have implemented appropriate security measures to prevent your
            personal data from being accidentally lost, used, accessed in an
            unauthorized way, altered, or disclosed. We also limit access to
            your personal data to employees, contractors, and other third
            parties who have a business need to know and who are under a duty of
            confidentiality.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-voodoo-900">
            Data Retention
          </h2>
          <p className="mb-6 text-voodoo-700">
            We will only retain your personal data for as long as necessary to
            fulfill the purposes we collected it for, including for legal,
            accounting, or reporting requirements.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-voodoo-900">
            Your Legal Rights
          </h2>
          <p className="mb-6 text-voodoo-700 text-bold">
            Under certain circumstances, you have rights under data protection
            laws regarding your personal data, such as the right to request
            access, correction, erasure, restriction, or transfer, to object to
            processing, and to withdraw consent where applicable.
          </p>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-voodoo-800 to-voodoo-500 text-white py-4">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </Layout>
  );
};

export default PrivacyPolicy;
