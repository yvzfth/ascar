import React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
const marks = [
  'Hepsi',
  'Audi',
  'Bentley',
  'BMW',
  'Porsche',
  'Mercedes-Benz',
  'Ford',
  'Fiat',
  'Opel',
  'Volkswagen',
  'Kia',
  'Toyota',
];
const prices = [
  '100 bin ₺',
  '200 bin ₺',
  '300 bin ₺',
  '400 bin ₺',
  '500 bin ₺',
  '1 milyon ₺',
  '1.5 milyon ₺',
  '2 milyon ₺',
];

export function SelectTextFields() {
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <div></div>
    </Box>
  );
}
const Hero = () => {
  return (
    <div className='w-full h-full flex flex-col items-center lg:flex-row lg:justify-evenly'>
      <Paper className='bg-transparent p-10 max-w-[20rem] lg:max-w-[26rem] shadow-lg shadow-red-400 m-10'>
        <Typography className='text-white text-4xl lg:text-6xl font-bold'>
          Hayalindeki <br />
          arabayı bul
        </Typography>
        <Typography className='text-gray-500 text-md lg:text-lg  pt-2'>
          Size en uygun arabayı bulmanıza yardımcı olacağız. Göz at, modelleri
          karşılaştır ve araban seni bekliyor.
        </Typography>
      </Paper>
      <Card
        className=' max-w-[20rem] w-[20rem] lg:w-[26rem] lg:max-w-[26rem] p-10 m-10 flex flex-col justify-center items-center  bg-[#FFECEF]'
        component={'form'}
      >
        <FormControl className='w-[15rem] lg:w-[20rem]'>
          <InputLabel
            // className='text-slate-400'
            variant='standard'
            htmlFor='marks-select'
          >
            Araç Markası Seçiniz
          </InputLabel>
          <NativeSelect
            // className='text-white '
            defaultValue={'Hepsi'}
            inputProps={{
              name: 'marks',
              id: 'marks-select',
            }}
          >
            {marks.map((mark) => (
              <option value={mark} key={mark}>
                {mark}
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
                >
                  Alt Limit
                </InputLabel>
                <NativeSelect
                  //   className='text-white '
                  defaultValue={'Hepsi'}
                  inputProps={{
                    name: 'min',
                    id: 'min-price',
                  }}
                >
                  {prices.map((price) => (
                    <option value={price} key={price}>
                      {price}
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
                >
                  Üst Limit
                </InputLabel>
                <NativeSelect
                  //   className='text-white'
                  defaultValue={'Hepsi'}
                  inputProps={{
                    name: 'max',
                    id: 'max-price',
                  }}
                >
                  {prices.map((price) => (
                    <option value={price} key={price}>
                      {price}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </div>
          </div>
        </FormControl>
        <Button
          fullWidth
          className='mt-10'
          color='info'
          variant='contained'
          sx={{
            '& .MuiButtonBase-root.MuiButton-root ': {
              backgroundColor: '#0288d1',
            },
          }}
        >
          Ara
        </Button>
      </Card>
    </div>
  );
};

export default Hero;
