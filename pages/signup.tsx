import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/landing/Layout";
import Header from "../components/landing/Header";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your_stripe_publishable_key");

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [vision, setVision] = useState("");
  const [bio, setBio] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [packageType, setPackageType] = useState("basic"); // Default package type
  const images = [
    "https://i.ibb.co/Pg8VLgK/super-cute-boys-ski-suits-are-ready-hit-slopes-have-blast-winter-wonderland-generative-ai.jpg",

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call your backend to create a customer and subscribe to a plan
  };

  return (
    <Layout>
      <Header />
      <div className="min-h-screen relative overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-75" />
        <div className="py-24 top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="max-w-lg bg-white rounded-lg shadow-lg p-8 z-10">
            <h2 className="text-3xl font-semibold mb-4 ">Sign Up</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block font-semibold mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-semibold mb-1  ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold mb-1  ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block font-semibold mb-1  ">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block font-semibold mb-1  ">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="vision" className="block font-semibold mb-1  ">
                    Vision
                  </label>
                  <input
                    type="text"
                    id="vision"
                    name="vision"
                    value={vision}
                    onChange={(e) => setVision(e.target.value)}
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
                    placeholder="Enter your vision"
                    required
                  />
                </div>
                {/* <div>
                  <label htmlFor="bio" className="block font-semibold mb-1  ">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows="4"
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
                    placeholder="Enter your bio"
                    required
                  />
                </div> */}
                 <div>
                  <label htmlFor="packageType" className="block font-semibold mb-1 ">
                    Package Type
                  </label>
                  <select
                    id="packageType"
                    name="packageType"
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
                    required
                  >
                    <option value="basic">Basic</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
              </div>
              <div>
                  <label htmlFor="card" className="block font-semibold mb-1 ">
                    Card Details
                  </label>
                  <Elements stripe={stripePromise}>
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                              color: "#aab7c4",
                            },
                          },
                          invalid: {
                            color: "#9e2146",
                          },
                        },
                      }}
                    />
                  </Elements>
                </div>
              <button
                type="submit"
                className="bg-teal-500   py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300 text-white"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-teal-500">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
