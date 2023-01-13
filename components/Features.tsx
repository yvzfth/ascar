import React from 'react';

interface Car {
  features: string[];
}

const Features: React.FC<Car> = ({ features }) => {
  return (
    <div className='py-4 px-4'>
      <h3 className='text-2xl font-bold mb-2'>Özellikler</h3>
      <ul className='list-disc list-inside'>
        {features?.map((feature, index) => (
          <li key={index} className='mb-2'>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
