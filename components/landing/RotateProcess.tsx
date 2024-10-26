import React, { useEffect, useState } from "react";

const RotatingSVGWithSections = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationDegree = scrollY * 0.2; // Adjust rotation speed
      setRotation(rotationDegree);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-10">
      <div className="flex justify-center items-center">
        {" "}
        <div className="text-center text-4xl font-light mb-14 px-14">
          <h2 className="max-w-[60rem] mx-auto" style={{ lineHeight: 1.45 }}>
            Making it easy for you and your customers through advancement
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left pr-10">
          {/* <img
            src="/themes/custom/sysltd/assets/images/services/orange-bullet.svg"
            alt="Orange Bullet"
            className="w-6 h-6 mb-2"
          /> */}
          <div>
            <h6 className="font-semibold">Inspire</h6>
            <p className="text-gray-600">
              Foster business resilience and
              <br />
              high-performance outcomes.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative">
            <img
              src="/images/integrated-digital-engineering.svg"
              alt="Integrated Engineering"
              className="img-fluid"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.1s ease-out",
                width: "300px",
                height: "300px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h4 className="text-black text-center text-md font-light leading-tight">
                Integrated <br />
                Engineering
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left pl-10">
          {/* <img
            src="/images/orange-bullet.svg"
            alt="Orange Bullet"
            className="w-6 h-6 mb-2"
          /> */}
          <div>
            <h6 className="font-semibold">Disrupt</h6>
            <p className="text-gray-600">
              Creating seamless experiences
              <br />
              across all touchpoints.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-col items-center text-center pt-8">
          {/* <img
            src="/images/orange-bullet.svg"
            alt="Orange Bullet"
            className="w-6 h-6 mb-2"
          /> */}
          <div>
            <h6 className="font-semibold">Develop</h6>
            <p className="text-gray-600">
              Build your business with a
              <br />
              customer-first approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingSVGWithSections;
