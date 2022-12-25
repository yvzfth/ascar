import React from 'react';
import CheckCircle from '@mui/icons-material/CheckCircle';

type TechnologiesProps = {
  technologies: string[];
  bgImageUrl: string;
};

const Technologies = ({ technologies, bgImageUrl }: TechnologiesProps) => {
  return (
    <div className='relative bg-gray-200 rounded-lg shadow-lg overflow-hidden'>
      <img
        src={bgImageUrl}
        alt=''
        className='w-full h-64 object-cover object-center'
      />
      <div className='relative px-4 '>
        <div className='bg-transparent px-4 py-5 sm:px-6 '>
          <h3 className='text-2xl font-bold leading-5 '>Technologies</h3>
        </div>
        <ul>
          {technologies?.map((technology, index) => (
            <li key={index} className='border-t border-gray-200'>
              <div className='flex items-center px-4 py-4 sm:px-6'>
                <div className='min-w-0 flex-1 flex items-center'>
                  <CheckCircle className='flex-shrink-0 h-6 w-6 text-green-400' />
                  <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
                    <div>
                      <div className='text-sm leading-5 font-medium text-gray-900'>
                        {technology}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
