import React from 'react';
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Applaude made building my app so fast and easy!",
      author: "Sarah K.",
    },
    {
      quote: "Our startup saved months of development with Applaude.",
      author: "David L.",
    },
    {
      quote: "I love how simple and intuitive the platform is!",
      author: "Emma W.",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6">
      <h3 className="text-3xl font-bold text-center mb-12">What People Are Saying</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transform transition duration-300"
          >
            <p className="text-lg mb-4">"{t.quote}"</p>
            <span className="font-semibold text-ion-blue">{t.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
