import React from 'react';

import CarCard from './CarCard'; // import your CarCard component
import getCars from '../lib/cars';
import { useRouter } from 'next/router';
import Link from 'next/link';
import type { Car } from '../types';

const RelatedCars = ({ id }: { id: string }) => {
  const currentCar = getCars().find((car) => car.id === Number(id)); // get the current car based on its id

  const relatedCars = getCars().filter(
    (car) =>
      car.make === currentCar!.make &&
      //   car.model === currentCar!.model &&
      car.id !== currentCar!.id
  );

  return (
    <div className=' bg-gray-200 rounded-lg shadow-lg'>
      <div className=' z-10 py-2 px-4 bg-white shadow'>
        <h3 className='text-xl font-semibold text-gray-800'>Related Cars</h3>
      </div>
      <div className='pb-4/5 overflow-hidden bg-gray-200 rounded-lg shadow-lg'>
        <div className=' pb-4/5 overflow-hidden bg-gray-200 rounded-lg shadow-lg'>
          <div className=' bg-gray-200 rounded-lg shadow-lg'>
            <div className=' flex items-center space-x-10 justify-between  overflow-x-scroll'>
              {relatedCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const RelatedCars = ({ car }: { car: Car }) => {
//   const relatedCars = getCars().filter((c) => c.make === car.make && c.id !== car.id);

//   return (
//     <div className="flex overflow-x-scroll">
//       {relatedCars.map((relatedCar) => (
//         <Link href="/cars/[id]" as={`/cars/${relatedCar.id}`} key={relatedCar.id}>
//           <a className="mx-2">
//             <img src={relatedCar.imageUrl} alt={`${relatedCar.make} ${relatedCar.model}`} className="w-32 h-24 object-cover rounded-lg shadow-md" />
//             <div className="text-gray-700 text-sm font-semibold my-2">
//               {relatedCar.make} {relatedCar.model}
//             </div>
//           </a>
//         </Link>
//       ))}
//     </div>
//   );
// };

export default RelatedCars;
