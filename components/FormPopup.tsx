import * as React from 'react';
import dynamic from 'next/dynamic';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputAdornment, TextField } from '@mui/material';

import MultipleSelectChip from './DropdownMultipleSelect';
import technologies from '../lib/technologies';
import features from '../lib/features';
import models from '../lib/models';
import { ICar } from '../types';
import axios from 'axios';
import _ from 'lodash';

const currentYear = new Date().getFullYear();
const formDataInitialState = {
  _id: null,
  make: '',
  model: '',
  year: currentYear,
  price: 0,
  images: [],
  engine: '',
  transmission: '',
  fuelType: '',
  color: '',
  mileage: 0,
  features: [],
  technologies: [],
};
const years = Array.from({ length: 30 }, (_, i) => currentYear - i);
const ImagePreview = dynamic(() => import('./ImagePreview'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [next, setNext] = React.useState(0);
  // const [images, setImages] = React.useState<string[]>([]);
  // const [files, setFiles] = React.useState<FileList>();
  const [formData, setFormData] = React.useState<ICar>(formDataInitialState);
  const resetStates = () => {
    setNext(0);
    setFormData(formDataInitialState);
  };
  const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;
    if (files) {
      const arr: string[] = [];
      // setFiles(files);
      for (var i = 0; i < files?.length!; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          arr.push(String(reader.result));
        };
        setFormData({ ...formData, images: arr });
      }
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== 'backdropClick') {
      setOpen(false);

      resetStates();
    }
  };
  const handleSubmit = () => {
    setOpen(false);
    // addDoc(dbInstance, formData).then(() => alert('Araç eklendi!!'));
    // console.log(formData);
    axios
      .post('/api/cars', formData, {
        maxContentLength: 100000000,
        maxBodyLength: 1000000000,
      })
      .then(() => alert('Araç eklendi'));
    resetStates();
  };

  return (
    <div>
      <Button variant='contained' onClick={handleClickOpen}>
        ARAÇ EKLE
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            m: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          Araç Ekle
          <div
            className='text-red-600 cursor-pointer w-fit'
            onClick={handleClose}
          >
            <Button color='error' className='rounded-full min-w-fit px-2'>
              <CloseRoundedIcon />
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <form>
            <div className={next !== 0 ? 'hidden' : 'flex flex-col'}>
              <FormControl sx={{ m: 1 }}>
                <InputLabel id='make-select-label'>Marka</InputLabel>
                <Select
                  labelId='make-select-label'
                  id='make-select'
                  name='make'
                  value={formData.make}
                  onChange={handleSelectChange}
                  input={<OutlinedInput label='Marka' />}
                >
                  {Object.keys(models).map((key) => (
                    <MenuItem key={key} value={key}>
                      {key}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <InputLabel id='model-select-label'>Model</InputLabel>
                <Select
                  labelId='model-select-label'
                  id='model-select'
                  name='model'
                  value={formData.model}
                  onChange={handleSelectChange}
                  input={<OutlinedInput label='Model' />}
                >
                  {models[formData.make]?.models?.map((model) => (
                    <MenuItem key={model} value={model}>
                      {model}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1 }}>
                <InputLabel id='year-select-label'>Model Yılı</InputLabel>
                <Select
                  type='number'
                  labelId='year-select-label'
                  id='year-select'
                  name='year'
                  value={String(formData.year)}
                  onChange={handleSelectChange}
                  input={<OutlinedInput label='Model Yılı' />}
                >
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                type='number'
                label='Fiyat'
                id='price'
                name='price'
                value={formData.price}
                onChange={handleInputChange}
                sx={{ m: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>₺</InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={next !== 1 ? 'hidden' : 'flex flex-col'}>
              <FormControl sx={{ m: 1 }}>
                <InputLabel id='engine-select-label'>Motor</InputLabel>
                <Select
                  labelId='engine-select-label'
                  id='engine-select'
                  name='engine'
                  value={formData.engine}
                  onChange={handleSelectChange}
                  input={<OutlinedInput label='Motor' />}
                >
                  {Array.from({ length: (5 - 1) / 0.1 + 1 }, (_, i) =>
                    (1 + i * 0.1).toFixed(1)
                  ).map((engine) => (
                    <MenuItem key={engine} value={engine}>
                      {engine}L
                    </MenuItem>
                  ))}
                  <MenuItem key={'Elektrikli'} value={'Elektrikli'}>
                    Elektrikli
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <InputLabel id='transmissin-select-label'>
                  Vites Tipi
                </InputLabel>
                <Select
                  labelId='transmission-select-label'
                  id='transmission-select'
                  name='transmission'
                  value={formData.transmission}
                  onChange={handleSelectChange}
                  input={<OutlinedInput label='Vites Tipi' />}
                >
                  {['Manuel', 'Otomatik', 'Yarı Otomatik', 'CVT'].map(
                    (trans) => (
                      <MenuItem key={trans} value={trans}>
                        {trans}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <InputLabel id='fuelType-select-label'>Yakıt Tipi</InputLabel>
                <Select
                  labelId='fuelType-select-label'
                  id='fuelType-select'
                  name='fuelType'
                  value={formData.fuelType}
                  onChange={handleSelectChange}
                  input={<OutlinedInput label='Yakıt Tipi' />}
                >
                  {['Benzin', 'Motorin', 'LPG', 'Elektrik'].map((fuel) => (
                    <MenuItem key={fuel} value={fuel}>
                      {fuel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <InputLabel id='color-select-label'>Renk</InputLabel>
                <Select
                  labelId='color-select-label'
                  id='color-select'
                  name='color'
                  value={formData.color}
                  onChange={handleSelectChange}
                  input={<OutlinedInput label='Renk' />}
                >
                  {[
                    'Beyaz',
                    'Siyah',
                    'Gri',
                    'Mavi',
                    'Kırmızı',
                    'Yeşil',
                    'Sarı',
                    'Mor',
                    'Lacivert',
                    'Turuncu',
                  ].map((color) => (
                    <MenuItem key={color} value={color}>
                      {color}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label='Araç Kilometresi'
                type='number'
                id='mileage'
                name='mileage'
                sx={{ m: 1 }}
                value={formData.mileage}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>km</InputAdornment>
                  ),
                }}
              />
            </div>

            <div className={next !== 2 ? 'hidden' : 'flex flex-col gap-2 py-2'}>
              <MultipleSelectChip
                label={'Teknolojiler'}
                items={technologies}
                formData={formData}
                setFormData={setFormData}
              />
              <MultipleSelectChip
                label={'Özellikler'}
                items={features}
                formData={formData}
                setFormData={setFormData}
              />
            </div>

            <div className={next !== 3 ? 'hidden' : 'block'}>
              <div className='mb-4'>
                <Button variant='outlined' component='label'>
                  Araç fotoğrafı ekle
                  <input
                    className='border border-black dark:text-black bg-zinc-500 w-[16rem] overflow-hidden text-sm'
                    hidden
                    type='file'
                    accept='.jpg, .png, .jpeg, image/*'
                    id='image-picker'
                    multiple={true}
                    onChange={selectImage}
                  />
                </Button>
              </div>
              {!_.isEmpty(formData?.images) &&
                formData?.images?.map((image, index) => (
                  <ImagePreview key={index} imageUrl={image} />
                ))}
            </div>
          </form>
          <div
            className={
              (next === 0 ? 'justify-end' : 'justify-between') +
              ' flex items-center'
            }
          >
            {next > 0 && (
              <Button onClick={() => setNext(next - 1)}>GERİ</Button>
            )}
            {next < 3 && (
              <Button onClick={() => setNext(next + 1)}>İLERİ</Button>
            )}
            {next > 2 && (
              <Button variant='contained' type='submit' onClick={handleSubmit}>
                ARAÇ EKLE
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
