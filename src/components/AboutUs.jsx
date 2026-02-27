import React from 'react';

const AboutUs = () => {
  return (
    <section className="px-4 sm:px-10 lg:px-16 py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute -left-24 top-0 w-80 h-80 rounded-full bg-[#f4d8ff] opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-20 bottom-0 w-72 h-72 rounded-full bg-[#ffdbe8] opacity-30 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
        <div className="order-2 lg:order-1 space-y-6">
          <p className="text-xs uppercase tracking-[0.26em] text-gray-500">Brand Ethos</p>
          <h2 className="text-4xl sm:text-5xl leading-[0.95] font-medium text-gray-900">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Founded in 2015, our brand began with a simple mission: to create clothing that empowers and inspires. What started in a small studio has grown into a global community of fashion enthusiasts who believe in style, comfort, and self-expression.
            </p>
            <p>
              Every piece we design is a reflection of our commitment to quality, sustainability, and inclusivity. We believe fashion should be accessible, comfortable, and a true expression of individual personality.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="rounded-2xl border border-gray-200 bg-[#faf8fb] p-5">
              <p className="text-2xl font-semibold text-gray-900">8+</p>
              <p className="text-sm text-gray-600 mt-1">Years of Innovation</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#faf8fb] p-5">
              <p className="text-2xl font-semibold text-gray-900">50K+</p>
              <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-[0_16px_40px_rgba(17,17,17,0.08)]">
            <img 
              src="/images/AboutLogo.svg" 
              alt="Awo Igugu Brand Mark" 
              className="w-full h-[320px] sm:h-[420px] object-cover bg-[#f3ecf8] p-10"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
