import React from "react";

const AnreadWaySection = () => {
  return (
    <section
      className="anread-way-section py-40 lg:py-60 bg-cover bg-center relative text-white"
      style={{
        backgroundImage:
          "url('https://systemsltd.com/sites/default/files/2023-07/MicrosoftTeams-image%20%28125%29%20%281%29.webp')",
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto text-center px-4 md:px-0">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12">
          THE ANREAD WAY
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-medium mb-12 lg:mb-16 max-w-2xl mx-auto">
          As a top IT company, we're uniquely positioned to partner with the
          world’s largest businesses in their transformation journeys.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-6 md:space-y-0">
          <div className="max-w-sm p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Optimize
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              We leverage customer-centric and cutting-edge talent and
              technology for higher business efficiency.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Transform
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              We reimagine processes and systems by offering holistic solutions
              for superior enterprise value.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Scale</h3>
            <p className="text-sm md:text-base lg:text-lg">
              We enable future-ready enterprises with long-term growth in a
              state of perpetual reinvention.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .anread-way-section {
          background-size: cover;
          background-position: center top;
          position: relative;
          color: #fff;
        }

        .backdrop-blur-lg {
          backdrop-filter: blur(8px);
        }

        /* Responsive typography and padding */
        @media (max-width: 768px) {
          .anread-way-section h2 {
            font-size: 2.5rem;
          }

          .anread-way-section p {
            font-size: 1rem;
          }

          .anread-way-section {
            padding: 30px 0;
          }
        }

        @media (min-width: 1024px) {
          .anread-way-section {
            padding: 80px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default AnreadWaySection;
