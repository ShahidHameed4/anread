import React from "react";

const LogoSliderWithText = () => {
  const logos = [
    "https://i.ibb.co/KLw8VX5/cropped-13fd874f-bc91-4c32-b14d-ceffdb22d903-removebg-preview-120x108.png",
    // "https://i.ibb.co/3CvxNZ3/Amarpak-whitr.png",
    "https://i.ibb.co/NYPq9Mm/digi.png",
    // "https://i.ibb.co/F7VPpzN/favicon-celeste-152x152-1.png",
    // "https://i.ibb.co/X4ntRNJ/craxlogo.png",
    "https://i.ibb.co/s6yDXHR/reprosify-black-Logo.png",
    "https://i.ibb.co/XtRqmqx/TECH-logo-png-n.png",
    "https://i.ibb.co/bdqsYpf/muzzbizz.png",
    "https://i.ibb.co/0h7c0rb/crax.webp",
  ];

  return (
    <div className="bg-white pt-20 py-5 overflow-hidden relative mb-14">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-14 fadeInLeft">
        <div className="flex justify-center items-center">
          <p>
            Trusted by <span className="text-gradient">20+</span> Happy Clients
            including these Companies
          </p>
        </div>
      </h2>

      <div className="flex animate-scroll whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="h-14 mx-4"
          />
        ))}
        {/* Duplicate the logos to create an infinite scrolling effect */}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="h-14 mx-4"
          />
        ))}

        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="h-14 mx-4"
          />
        ))}

        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="h-14 mx-4"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="h-14 mx-4"
          />
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
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
            #773f63,
            /* Voodoo 500 */ #945f7c,
            /* Voodoo 400 */ #ca9bb3,
            /* Voodoo 200 */ #e0c2d2,
            /* Voodoo 100 */ #773f63 /* Voodoo 500 */
          );
          background-size: 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-animation 5s ease infinite;
          display: inline-block;
          line-height: 1; /* Ensure no extra height */
        }

        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoSliderWithText;
