import Image from 'next/image';
import type { Car } from '../types';

interface CarWidgetProps {
  car: Car;
}

export const CarWidget: React.FC<CarWidgetProps> = ({ car }) => {
  return (
    <div className='bg-gray-100 border-gray-300 rounded-lg shadow-md w-320'>
      <Image
        src={car.imageUrl}
        alt={`${car.make} ${car.model}`}
        width={320}
        height={160}
      />
      <div className='p-4'>
        <h3 className='font-medium text-lg text-gray-800'>
          {car.make} {car.model}
        </h3>
        <p className='text-sm text-gray-600'>Year: {car.year}</p>
        <p className='text-sm font-medium bg-yellow-500 text-gray-800 p-2 rounded-lg'>
          Price: ${car.price}
        </p>
      </div>
    </div>
  );
};
export default CarWidget;
