import React from "react";

const AnreadStats = () => {
  const statsData = [
    {
      number: 120,
      label: "Successful Partnerships",
    },
    {
      number: 30,
      label: "Industry Awards Won",
    },
    {
      number: "60+",
      label: "Expert Consultants",
    },
    {
      number: "400+",
      label: "Successful Projects Delivered",
    },
  ];

  return (
    <section className="bg-white py-10 pt-0">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-center mb-10 relative">
          <div className="flex justify-center items-center">
            Integrated Solutions for Transformative Growth
          </div>
        </h2>
        <p className="text-lg text-gray-700 mb-8 mx-auto w-3/4">
          We integrate technology, policy, and development to craft innovative
          solutions. From strategic insights to seamless execution, we empower
          organizations to excel in a dynamic landscape with tailored, adaptive
          strategies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className=" p-5 rounded-lg bg-transparent relative"
            >
              <h3 className="text-7xl font-bold text-voodoo-600 mb-2 text-gradient">
                {stat.number}
              </h3>
              <div className="h-1 w-1/2 mx-auto bg-voodoo-500 mb-2"></div>{" "}
              <p className="text-gray-600 text-xl">{stat.label}</p>
            </div>
          ))}
        </div>

        <style jsx>{`
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(
                -50%
              ); /* Adjust according to the total width */
            }
          }

          .text-gradient {
            background: linear-gradient(
              270deg,
              #50253f,
              /* Voodoo 500 */ #945f7c,
              /* Voodoo 400 */ #ca9bb3,
              /* Voodoo 200 */ #e0c2d2,
              /* Voodoo 100 */ #773f63 /* Voodoo 500 */
            );
            background-size: 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient-animation 6s ease infinite; /* Adjusted duration for smoother effect */
            display: inline-block;
          }

          @keyframes gradient-animation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default AnreadStats;
