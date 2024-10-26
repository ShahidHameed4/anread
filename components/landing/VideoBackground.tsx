import React from "react";
import Link from "next/link";

const VideoBackgroundSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source
          src="https://systemsltd.com/sites/default/files/2023-02/home-careers.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Your Next Starts Right Here
        </h1>
        <Link href="/join-us">
          <div className="inline-block border border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300">
            JOIN US
          </div>
        </Link>
      </div>
    </section>
  );
};

export default VideoBackgroundSection;
