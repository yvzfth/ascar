import React from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';

const About = () => {
  return (
    <div className='h-screen'>
      <div className='min-h-screen flex flex-col'>
        <main className='bg-[#111] container mx-auto px-6 py-8 m-4'>
          <h1 className='text-3xl font-bold text-gray-100 mb-6'>About Us</h1>
          <p className='text-gray-400 mb-6'>
            We are a team of car enthusiasts dedicated to providing the best car
            buying experience for our customers. With a wide selection of new
            and used cars, we have something for everyone. Our knowledgeable
            staff is here to help you find the perfect car for your needs and
            budget.
          </p>
        </main>
      </div>
    </div>
  );
};

export default About;
