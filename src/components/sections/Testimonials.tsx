import React from 'react';

const Highlights: React.FC = () => {
  const highlights = [
   {
  title: "Build Faster",
  description: "Turn your business ideas into mobile apps instantly with Applaude’s smart builder.",
},
{
  title: "Seamless Experience",
  description: "Enjoy a smooth, user-friendly platform designed to make app creation effortless.",
},
    {
      title: "Scalable & Secure",
      description: "Grow your app with confidence—built on a secure and scalable foundation.",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-6">
      <h3 className="text-3xl font-bold text-center mb-8">
        Why Choose Applaude
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transform transition duration-300"
          >
           <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>

            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
