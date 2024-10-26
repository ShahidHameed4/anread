// import React from "react";
// import Layout from "../components/landing/Layout";
// import Header from "../components/landing/Header";
// import Footer from "../components/landing/Footer";

// const Careers = () => {
//   return (
//     <Layout>
//       <Header />
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <h1 className="text-4xl font-bold mb-8 text-voodoo-900">
//             Careers at Anread
//           </h1>

//           <aside className="bg-voodoo-50 p-6 rounded-lg mb-8 shadow-lg">
//             <p className="text-lg text-voodoo-700 font-semibold">
//               🎯 Ready to take your tech career to the next level? Join our
//               forward-thinking team and be a part of something truly
//               transformative. Whether you're passionate about AI, blockchain, or
//               cutting-edge software, we’re here to help you make an impact in
//               the industry.
//             </p>
//           </aside>

//           <p className="mb-6 text-lg text-voodoo-700 leading-relaxed">
//             In <em>“The Labyrinth of Innovation”</em>, an allegorical tale about
//             curiosity and drive, the protagonist embarks on a quest to solve the
//             unsolvable. Faced with countless challenges, each twist in the maze
//             only deepens their fascination. As the others give up or lose focus,
//             our hero persists, driven not just by the promise of the prize but
//             by the journey itself.
//           </p>

//           <p className="mb-8 text-lg text-voodoo-700 leading-relaxed">
//             Why this story? Because that relentless pursuit of knowledge and
//             discovery is at the heart of <strong>Anread</strong>. We're building
//             a team of curious minds and bold thinkers who aren't afraid to push
//             boundaries and explore the unknown.
//           </p>

//           <h2 className="text-2xl font-semibold mb-6 text-voodoo-900">
//             Our Mission
//           </h2>
//           <p className="mb-6 text-lg text-voodoo-700 leading-relaxed">
//             Our mission is to develop and improve cutting-edge products using
//             disruptive technologies to deliver an experience that lives up to
//             the hype and expectations of our clients. We are performance
//             maximisers, specialising in blockchain and artificial intelligence,
//             and delivering high-quality software optimised for rapid
//             time-to-market.
//           </p>

//           <h2 className="text-2xl font-semibold mb-6 text-voodoo-900">
//             Open Positions
//           </h2>
//           <a
//             href="https://www.example.com"
//             className="inline-block bg-voodoo-700 text-white px-5 py-3 rounded-md font-semibold shadow hover:bg-voodoo-800 transition"
//           >
//             Check Open Positions →
//           </a>

//           <h2 className="text-2xl font-semibold my-8 text-voodoo-900">
//             Our Values
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-6 shadow rounded-lg">
//               <h3 className="text-xl font-semibold text-voodoo-900 mb-4">
//                 Band of Survivors Mentality
//               </h3>
//               <p className="text-lg text-voodoo-700 leading-relaxed">
//                 We act as if we're on a stranded island with limited resources.
//                 No room for politics or backbiting. The only way to thrive is to
//                 work fast, smart, and together.
//               </p>
//             </div>

//             <div className="bg-white p-6 shadow rounded-lg">
//               <h3 className="text-xl font-semibold text-voodoo-900 mb-4">
//                 Free Market Capitalism
//               </h3>
//               <p className="text-lg text-voodoo-700 leading-relaxed">
//                 We believe in a free market of value exchange. To get something,
//                 you must give equal or greater value. We work with this ethos in
//                 mind, from customers to teammates.
//               </p>
//             </div>

//             <div className="bg-white p-6 shadow rounded-lg">
//               <h3 className="text-xl font-semibold text-voodoo-900 mb-4">
//                 Open Callout
//               </h3>
//               <p className="text-lg text-voodoo-700 leading-relaxed">
//                 Accountability is key. We encourage team members to call out
//                 underperformance at the right time to prevent bigger issues down
//                 the road. No one works in isolation.
//               </p>
//             </div>

//             <div className="bg-white p-6 shadow rounded-lg">
//               <h3 className="text-xl font-semibold text-voodoo-900 mb-4">
//                 Personal Responsibility & Lifelong Learning
//               </h3>
//               <p className="text-lg text-voodoo-700 leading-relaxed">
//                 You're responsible for not just doing the job, but doing it
//                 better each time. We don't have middle managers micromanaging
//                 your work. We expect you to continuously improve your skills and
//                 workflow to stay relevant.
//               </p>
//             </div>
//           </div>

//           <footer className="bg-gradient-to-r from-voodoo-800 to-voodoo-500 text-white py-12 mt-16">
//             <div className="container mx-auto px-4">
//               <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
//               <div className="flex gap-6">
//                 <a
//                   href="https://www.linkedin.com"
//                   className="hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   👔 LinkedIn →
//                 </a>
//                 <a
//                   href="https://twitter.com"
//                   className="hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   🐦 Twitter →
//                 </a>
//                 <a
//                   href="https://medium.com"
//                   className="hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   ✏️ Blog →
//                 </a>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </section>
//       <footer className="bg-gradient-to-r from-voodoo-800 to-voodoo-500 text-white py-4">
//         <div className="container mx-auto px-4">
//           <Footer />
//         </div>
//       </footer>
//     </Layout>
//   );
// };

// export default Careers;

import React from "react";
import Layout from "../components/landing/Layout";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

const Careers = () => {
  return (
    <Layout>
      <Header />

      {/* Hero Section with Story and Visual Animations */}
      <section className="relative bg-gradient-to-r from-voodoo-800 to-voodoo-600 text-white py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10 relative">
          <h1 className="text-5xl font-bold mb-6">
            Join the Minds Behind the Future
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Imagine a place where every day feels like an uncharted
            journey—where the limits of technology are constantly redefined.{" "}
            <span className="text-indigo-300">Anread</span> isn’t just another
            tech company; it’s a collective of curious minds and fearless
            explorers, determined to build solutions that will transform
            industries.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Much like ancient alchemists searching for the philosopher’s stone,
            we, too, are in pursuit of the extraordinary. If you have a burning
            curiosity, a knack for unconventional thinking, and a drive to
            challenge the status quo, you’ll find yourself at home here.
          </p>
          <a
            href="#open-positions"
            className="bg-white text-indigo-800 py-3 px-6 rounded-full font-semibold shadow hover:bg-gray-200 transition"
          >
            Discover Your Role
          </a>
        </div>
        <div className="absolute inset-0 z-0 opacity-30">
          {/* Add animation elements for a creative touch */}
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
      </section>
      {/* Creative Animation Script */}
      <style jsx>{`
        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .shape {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 10s infinite ease-in-out;
        }
        .shape-1 {
          top: 10%;
          left: 20%;
          animation-duration: 5s;
        }
        .shape-2 {
          top: 40%;
          right: 25%;
          animation-duration: 8s;
        }
        .shape-3 {
          bottom: 15%;
          left: 30%;
          animation-duration: 10s;
        }
        .shape-4 {
          bottom: 25%;
          right: 15%;
          animation-duration: 12s;
        }
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }
      `}</style>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://i.ibb.co/DG2F5mB/1726005999292.jpg"
                alt="Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-voodoo-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-voodoo-700 leading-relaxed mb-4">
                Our mission is to develop and improve cutting-edge products
                using disruptive technologies to deliver an experience that
                exceeds our clients' expectations. We specialise in blockchain,
                AI, and innovative software development optimized for fast
                time-to-market.
              </p>
              <p className="text-lg text-voodoo-700 leading-relaxed">
                Join us to become part of a high-performance team delivering
                state-of-the-art solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-voodoo-600 to-voodoo-300 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Careers at Anread</h1>
          <p className="text-lg mb-8">
            Ready to join a team of innovative thinkers pushing the boundaries
            of tech? Whether you're passionate about AI, blockchain, or
            innovative software, we invite you to explore our open positions and
            find your place here.
          </p>
          <a
            href="#open-positions"
            className="bg-white text-voodoo-800 py-3 px-6 rounded-full font-semibold shadow hover:bg-gray-200 transition"
          >
            Explore Open Positions
          </a>
        </div>
      </section> */}
      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-voodoo-900 mb-8">
            Open Positions
          </h2>
          <p className="text-lg text-voodoo-700 mb-12">
            Explore our current openings and find the role that suits you best.
          </p>
          <a
            href="https://www.example.com"
            className="bg-voodoo-600 text-white py-3 px-6 rounded-full font-semibold shadow hover:bg-purple-700 transition"
          >
            Check Available Roles →
          </a>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-voodoo-800 to-voodoo-500 text-white py-4">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </Layout>
  );
};

export default Careers;
