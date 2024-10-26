import React from "react";
import { motion } from "framer-motion";

export const WorkTogether = () => {
  return (
    <section className="py-32 bg-white text-center">
      <motion.h2
        className="text-3xl font-bold text-voodoo-600 mb-3"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        How Can We Help You?
      </motion.h2>
      <motion.p
        className="text-2xl text-gray-700 mb-10 px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Are you ready to push boundaries and explore new frontiers of
        innovation?
      </motion.p>
      {/* <motion.p
            className="text-2xl text-gray-700 mb-16 px-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's work together.
          </motion.p> */}
      <button className="bg-voodoo-500 text-white py-3 px-10 text-xl rounded hover:bg-voodoo-600 hover:scale-105 transition duration-300 transform">
        Let's work together.
      </button>
    </section>
  );
};
