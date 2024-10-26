import React from "react";
import { motion } from "framer-motion";

const WorkingOptionsSection = ({ options }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-voodoo-600 mb-10 text-left sm:mx-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Working Options
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-voodoo-600 mb-4">
                {option.title}
              </h3>
              <p className="text-gray-700 mb-4">{option.description}</p>
              <ul className="list-disc list-inside text-gray-600">
                {option.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingOptionsSection;
