import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/landing/Layout";
import Header from "../components/landing/Header";

const LoginPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://i.ibb.co/Pg8VLgK/super-cute-boys-ski-suits-are-ready-hit-slopes-have-blast-winter-wonderland-generative-ai.jpg",
    "https://i.ibb.co/YhCfyzr/cutebot01.jpg",
    "https://i.ibb.co/s6Sb7Nv/Pngtree-little-cute-robot-funny-virtual-14551911.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
        <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
        <div className="max-w-md bg-white rounded-lg shadow-lg p-8 z-10">
          <h2 className="text-3xl font-semibold mb-4">Login</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email</label>
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
              <label htmlFor="password" className="block font-semibold mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-gray-600">
            Don't have an account? <Link href="/signup" className="text-teal-500">Sign up here</Link>
          </p>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden">
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
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
