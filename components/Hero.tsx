import React, { useRef, useState } from 'react';
import Paper from '@mui/material/Paper';

import {
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useRouter } from 'next/router';
import { CarContext } from '../lib/CarContext';
import Image from 'next/image';

const prices = {
  '100000': '100 bin ₺',
  '200000': '200 bin ₺',
  '300000': '300 bin ₺',
  '400000': '400 bin ₺',
  '500000': '500 bin ₺',
  '1000000': '1 milyon ₺',
  '1500000': '1.5 milyon ₺',
  '2000000': '2 milyon ₺',
};

const Hero = () => {
  const cars = React.useContext(CarContext);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedMinPrice, setSelectedMinPrice] = useState('');
  const [selectedMaxPrice, setSelectedMaxPrice] = useState('');
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLFormElement>(null);
  const makes = new Set(cars?.map((car) => car.make));

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
    <div>
      <div
        className={
          ' w-full flex flex-col gap-8 items-center p-8 lg:p-16  lg:items-start lg:flex-row lg:justify-evenly bg-hero bg-no-repeat bg-center bg-cover bg-fixed h-screen'
        }
      >
        <Paper
          className='
            bg-transparent
            backdrop-blur-md
            p-8  
            shadow-sm shadow-red-400 
            text-center lg:text-left
            space-y-4'
        >
          <Typography
            className={'text-white text-4xl md:text-5xl lg:text-7xl font-bold '}
          >
            Hayalindeki <br />
            arabayı bul
          </Typography>
          <Typography
            className={'text-gray-300 text-sm md:text-md lg:text-lg  '}
          >
            Size en uygun arabayı bulmanıza yardımcı
            <br className='hidden sm:block' />
            olacağız. Göz at, modelleri karşılaştır.&nbsp;
            <br className='hidden sm:block' />
            Araban seni bekliyor.
          </Typography>
          <Button
            className='group w-1/2 items-center px-4 py-3 hidden lg:flex'
            variant='outlined'
            color='error'
            onClick={() => router.push('/about')}
          >
            HAKKIMIZDA
            <ChevronRightRoundedIcon className='group-hover:ml-2 pb-[0.075rem] transition-all' />
          </Button>
        </Paper>
        <Paper
          ref={paperRef}
          className=' max-w-[20rem] w-[20rem] lg:w-[26rem] lg:max-w-[26rem]
        p-8 flex flex-col justify-center items-center 
        shadow-sm shadow-gray-200
        bg-transparent backdrop-blur-md'
          component={'form'}
        >
          <FormControl>
            <FormControl>
              <InputLabel className='text-gray-200' id='make-select-label'>
                Araç Markası Seçiniz
              </InputLabel>
              <Select
                labelId='make-select-label'
                id='make-select'
                name='make'
                className='text-white w-[16rem] lg:w-[22rem]'
                defaultValue={selectedMake}
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                input={<OutlinedInput label='Araç Markası Seçiniz' />}
              >
                <MenuItem key={'Hepsi'} value={'Hepsi'}>
                  Hepsi
                </MenuItem>
                {Array.from(makes).map((make) => (
                  <MenuItem key={make} value={make}>
                    {make}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div className='flex pt-8 justify-between w-full'>
              <div>
                <FormControl>
                  <InputLabel
                    id='min-select-label'
                    className='text-gray-200 text-sm'
                  >
                    Alt Fiyat
                  </InputLabel>
                  <Select
                    labelId='min-select-label'
                    name='min'
                    id='min'
                    className='text-white w-[7rem] lg:w-[10rem] text-sm'
                    defaultValue={selectedMinPrice}
                    value={selectedMinPrice}
                    input={<OutlinedInput label='Min Fiyat' />}
                    onChange={(e) => setSelectedMinPrice(e.target.value)}
                  >
                    <MenuItem key={'-'} value={'-'}>
                      -
                    </MenuItem>
                    {Object.entries(prices)
                      .slice(0, -1)
                      .map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                          {value}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl>
                  <InputLabel
                    id='max-select-label'
                    className='text-gray-200 text-sm'
                  >
                    Üst Fiyat
                  </InputLabel>
                  <Select
                    color='primary'
                    labelId='max-select-label'
                    name='max'
                    id='max'
                    className='text-white w-[7rem] lg:w-[10rem] text-sm'
                    defaultValue={selectedMaxPrice}
                    value={selectedMaxPrice}
                    input={<OutlinedInput label='Üst Fiyat' />}
                    onChange={(e) => setSelectedMaxPrice(e.target.value)}
                  >
                    <MenuItem key={'-'} value={'-'}>
                      -
                    </MenuItem>
                    {Object.entries(prices)
                      .slice(1)
                      .map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                          {value}
                        </MenuItem>
                      ))}
                  </Select>
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
      <div className='mx-auto -mt-44 lg:-mt-80  h-[16rem] lg:h-[30rem] bg-[url("/car-silver.png")] bg-no-repeat bg-contain bg-center  '></div>
    </div>
  );
};

export default Hero;
