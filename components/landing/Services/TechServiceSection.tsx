import React from "react";
import { motion } from "framer-motion";

const TechServiceSection = ({
  data,
  noPaddingTop = false,
  noPaddingBottom = false,
}) => {
  const { imagePosition, title, paragraphs, imageSrc, altText } = data;
  const isImageLeft = imagePosition === "left";
  const paddingTopClass = noPaddingTop ? "pt-0" : "pt-24";
  const paddingBottomClass = noPaddingBottom ? "pb-0" : "pb-24";

  return (
    <section className={`bg-white ${paddingTopClass} ${paddingBottomClass}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {isImageLeft && (
          <motion.div
            className="md:w-1/2 p-8 px-0 py-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={imageSrc}
              alt={altText}
              className="rounded-lg shadow-lg object-cover w-full md:h-[600px]"
            />
          </motion.div>
        )}
        <motion.div
          className="md:w-1/2 p-8"
          initial={{ opacity: 0, x: isImageLeft ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-voodoo-600 mb-4">{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
        </motion.div>
        {!isImageLeft && (
          <motion.div
            className="md:w-1/2 p-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={imageSrc}
              alt={altText}
              className="rounded-lg shadow-lg object-cover w-full md:h-[600px]"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TechServiceSection;
