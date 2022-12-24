import React from 'react';

interface HeaderProps {
  make: string;
  model: string;
  year: number;
  fuelType: string;
  transmission: string;
}

const Header: React.FC<HeaderProps> = ({
  make,
  model,
  year,
  fuelType,
  transmission,
}) => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <div className='text-2xl font-bold'>
        {make} {model} <span className='font-normal'>({year})</span>
      </div>
      <div className='text-sm font-semibold text-gray-600'>
        {fuelType} | {transmission}
      </div>
    </div>
  );
};

export default Header;
