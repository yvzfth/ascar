import React, { useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import getCars from '../lib/cars';
import { useRouter } from 'next/router';

const makes = new Set(getCars().map((car) => car.make));

const prices = {
  '100 bin ₺': '100000',
  '200 bin ₺': '200000',
  '300 bin ₺': '300000',
  '400 bin ₺': '400000',
  '500 bin ₺': '500000',
  '1 milyon ₺': '1000000',
  '1.5 milyon ₺': '1500000',
  '2 milyon ₺': '2000000',
};

const Hero = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedMinPrice, setSelectedMinPrice] = useState('');
  const [selectedMaxPrice, setSelectedMaxPrice] = useState('');
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLFormElement>(null);
  const search = () => {
    if (selectedMinPrice === '' || selectedMaxPrice === '') {
      router.push({
        pathname: '/cars',
        query: {
          make: selectedMake === 'Hepsi' ? '' : selectedMake,
          minPrice: selectedMinPrice,
          maxPrice: selectedMaxPrice,
        },
      });
    } else if (Number(selectedMaxPrice) < Number(selectedMinPrice)) {
      ref.current!.hidden = false;
      paperRef.current!.onchange = () => (ref.current!.hidden = true);
    } else {
      router.push({
        pathname: '/cars',
        query: {
          make: selectedMake,
          minPrice: selectedMinPrice,
          maxPrice: selectedMaxPrice,
        },
      });
    }
  };
  return (
    <div
      className='w-full flex flex-col items-center  lg:pt-20 lg:items-start 
     lg:flex-row lg:justify-evenly bg-hero bg-no-repeat bg-center bg-cover h-screen'
    >
      <Paper
        className='
      bg-transparent
      backdrop-blur-md
       p-10 lg:p-8  max-w-[20rem] lg:max-w-[26rem] 
       shadow-sm shadow-red-400 mt-8 lg:m-8  text-center lg:text-left'
      >
        <Typography className='text-white text-4xl lg:text-6xl font-bold '>
          Hayalindeki <br />
          arabayı bul
        </Typography>
        <Typography className='text-gray-300 text-sm  md:text-md lg:text-lg  pt-2 lg:pt-6'>
          Size en uygun arabayı bulmanıza yardımcı olacağız. Göz at, modelleri
          karşılaştır ve araban seni bekliyor.
        </Typography>
      </Paper>
      <Paper
        ref={paperRef}
        className=' max-w-[20rem] w-[20rem] lg:w-[26rem] lg:max-w-[26rem]
        p-8 lg:p-10 m-8 flex flex-col justify-center items-center 
        shadow-sm shadow-gray-200
        bg-transparent backdrop-blur-md'
        //  shadow-slate-800 '
        // bg-[#1b24305a]'
        // bg-[#2B3A55]'
        component={'form'}
      >
        <FormControl className='w-[15rem] lg:w-[20rem]'>
          <InputLabel
            className='text-slate-400 text-sm'
            variant='standard'
            htmlFor='marks-select'
          >
            Araç Markası Seçiniz
          </InputLabel>
          <NativeSelect
            // className='text-white '
            defaultValue={selectedMake}
            className='text-white border-gray-500 border-b'
            inputProps={{
              name: 'marks',
              id: 'marks-select',
            }}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option className='text-white' value={'Hepsi'}>
              Hepsi
            </option>
            {Array.from(makes).map((make) => (
              <option value={make} key={make}>
                {make}
              </option>
            ))}
          </NativeSelect>
          <div className='flex pt-10 justify-between'>
            <div>
              <FormControl className='max-w-[10rem]'>
                <InputLabel
                  //   className='text-slate-400'
                  variant='standard'
                  htmlFor='min-price'
                  className='text-slate-400 text-sm'
                >
                  Alt Limit
                </InputLabel>
                <NativeSelect
                  className='w-[6.5rem] text-white border-gray-500 border-b'
                  defaultValue={selectedMinPrice}
                  inputProps={{
                    name: 'min',
                    id: 'min-price',
                  }}
                  onChange={(e) => setSelectedMinPrice(e.target.value)}
                >
                  <option className='text-white' value={'-'}>
                    -
                  </option>
                  {Object.entries(prices)
                    .slice(0, -1)
                    .map(([key, value]) => (
                      <option value={value} key={value}>
                        {key}
                      </option>
                    ))}
                </NativeSelect>
              </FormControl>
            </div>
            <div>
              <FormControl className='max-w-[10rem]'>
                <InputLabel
                  //   className='text-slate-400'
                  variant='standard'
                  htmlFor='max-price'
                  className='text-slate-400 text-sm'
                >
                  Üst Limit
                </InputLabel>
                <NativeSelect
                  className='w-[6.5rem] block text-white border-gray-500 border-b'
                  defaultValue={selectedMaxPrice}
                  inputProps={{
                    name: 'max',
                    id: 'max-price',
                  }}
                  onChange={(e) => setSelectedMaxPrice(e.target.value)}
                >
                  <option className='text-white' value={'-'}>
                    -
                  </option>
                  {Object.entries(prices)
                    ?.slice(1)
                    ?.map(([key, value]) => (
                      <option value={value} key={value}>
                        {key}
                      </option>
                    ))}
                </NativeSelect>
              </FormControl>
            </div>
          </div>
          <div ref={ref} hidden className='text-center p-2 text-red-700'>
            Fiyat aralığı yanlış
          </div>
        </FormControl>
        <Button
          onClick={search}
          fullWidth
          className='mt-10'
          color='error'
          variant='contained'
        >
          Ara
        </Button>
      </Paper>
    </div>
  );
};

export default Hero;
