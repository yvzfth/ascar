// import Image from 'next/image';
import * as React from 'react';
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
import FileBase64 from 'react-file-base64';
import technologies from '../lib/technologies';
import features from '../lib/features';
import models from '../lib/models';
import { ICar } from '../types';
import axios from 'axios';
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  // const [age, setAge] = React.useState<number | string>('');
  const [next, setNext] = React.useState(0);
  // const [file, setFile] = React.useState<File>();
  const [formData, setFormData] = React.useState<ICar>({
    id: 0,
    make: '',
    model: '',
    year: currentYear,
    price: 0,
    imageUrl: '',
    engine: '',
    transmission: '',
    fuelType: '',
    color: '',
    mileage: 0,
    features: [],
    technologies: [],
  });
  const resetStates = () => {
    setNext(0);
    // setFile(undefined);
    setFormData({
      id: 0,
      make: '',
      model: '',
      year: currentYear,
      price: 0,
      imageUrl: '',
      engine: '',
      transmission: '',
      fuelType: '',
      color: '',
      mileage: 0,
      features: [],
      technologies: [],
    });
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
      console.log(formData);
      // console.log(file);
      axios.post('/api/cars', formData);
      resetStates();
    }
  };
  const handleSubmit = () => {
    console.log(formData);
    // Object.entries(formData).fi
    // if (formData) {
    //   Car.insertMany({
    //     id: formData.id,
    //     make: formData.make,
    //     model: formData.model,
    //     year: Number(formData.model),
    //     price: Number(formData.model),
    //     imageUrl: formData.model,
    //     engine: formData.model,
    //     transmission: formData.model,
    //     fuelType: '',
    //     color: '',
    //     mileage: '',
    //     features: '',
    //     technologies: '',
    //   });
    // }
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
                {/* <Button variant='outlined' component='label'> */}
                Araç fotoğrafı ekle
                <FileBase64
                  hidden
                  type='file'
                  accept='.jpg, .png, .jpeg, image/*'
                  id='image-picker'
                  multiple={false}
                  onDone={({ base64 }: { base64: string }) =>
                    setFormData({ ...formData, imageUrl: base64 })
                  }
                />
                {/* <input
                   
                   onChange={(e) =>
                     e.target.files && setFile(e?.target?.files[0])
                   }
             
                    className='border border-black dark:text-black bg-zinc-500 w-[16rem] overflow-hidden text-sm'
                   
                  /> */}
              </div>
              {/* </Button>
              {file && (
                <Image
                  className='mb-4'
                  src={URL.createObjectURL(file)}
                  width='200'
                  height='200'
                  alt='preview'
                />
              )} */}
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
              <Button variant='contained' type='submit' onClick={handleClose}>
                ARAÇ EKLE
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
{
  /* <Box
            component='form'
            // sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}
          >
            <div className={next !== 0 ? 'hidden' : 'flex flex-col'}>
              <TextField
                label='Marka'
                id='make'
                name='make'
                value={formData.make}
                onChange={handleInputChange}
                sx={{ m: 1 }}
              />
              <TextField
                label='Model'
                id='model'
                name='model'
                value={formData.model}
                onChange={handleInputChange}
                sx={{ m: 1 }}
              />
              <TextField
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

              <FormControl sx={{ m: 1 }}>
                <InputLabel id='year-select-label'>Model Yılı</InputLabel>
                <Select
                  labelId='year-select-label'
                  id='year-select'
                  name='year'
                  value={formData.year}
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
            </div>
            <div className={next !== 1 ? 'hidden' : 'flex flex-col'}>
              <TextField
                label='Araç Kilometresi'
                id='outlined-start-adornment'
                sx={{ m: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>km</InputAdornment>
                  ),
                }}
              />
            </div>

            <div className={next !== 2 ? 'hidden' : 'flex flex-col'}>
              <MultipleSelectChip />
              <MultipleSelectChip />
            </div>
          </Box> */
}
// interface FormPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const FormPopup: React.FC<FormPopupProps> = ({ isOpen, onClose }) => {
//   const [next, setNext] = React.useState(0);
//   const [file, setFile] = React.useState<File>();
//   const [formData, setFormData] = React.useState({
//     make: '',
//     model: '',
//     year: '',
//     price: '',
//     imageUrl: '',
//     engine: '',
//     transmission: '',
//     fuelType: '',
//     color: '',
//     mileage: '',
//     features: '',
//     technologies: '',
//   });

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Add form data to database
//     console.log(formData);
//     resetStates();
//   };
//   const resetStates = () => {
//     setNext(0);
//     setFile(undefined);
//     setFormData({
//       make: '',
//       model: '',
//       year: '',
//       price: '',
//       imageUrl: '',
//       engine: '',
//       transmission: '',
//       fuelType: '',
//       color: '',
//       mileage: '',
//       features: '',
//       technologies: '',
//     });
//     onClose();
//   };
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={resetStates}
//       contentLabel='Add Car Form'
//       ariaHideApp={false}
//       className='w-[20rem] my-20 m-auto'
//     >
//       <form
//         className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
//         onSubmit={handleSubmit}
//       >
//         <div className='text-right dark:text-black '>
//           <span className='p-2 cursor-pointer' onClick={resetStates}>
//             X
//           </span>
//         </div>
//         <div className={next !== 0 ? 'hidden' : 'block'}>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='make'
//             >
//               Marka
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3
//               dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//               id='make'
//               placeholder='Marka'
//               type='text'
//               name='make'
//               value={formData.make}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='model'
//             >
//               Model
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3
//               dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//               id='model'
//               placeholder='Model'
//               type='text'
//               name='model'
//               value={formData.model}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='year'
//             >
//               Model Yılı
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3
//               dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//               id='year'
//               type='number'
//               placeholder='Model Yılı'
//               name='year'
//               value={formData.year}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='price'
//             >
//               Fiyat
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3
//             dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//               id='price'
//               type='number'
//               placeholder='Fiyat'
//               name='price'
//               value={formData.price}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div className={next !== 1 ? 'hidden' : 'block'}>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='engine'
//             >
//               Motor
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3
//               dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//               id='engine'
//               placeholder='Motor'
//               type='text'
//               name='engine'
//               value={formData.model}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='transmission'
//             >
//               Vites Tipi
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3
//               dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//               id='transmission'
//               placeholder='Vites Tipi'
//               type='text'
//               name='transmission'
//               value={formData.make}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='fuelType'
//             >
//               Yakıt Tipi
//               <input
//                 className='shadow appearance-none border rounded w-full py-2 px-3
//               dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//                 id='fuelType'
//                 type='text'
//                 placeholder='Yakıt Tipi'
//                 name='fuelType'
//                 value={formData.year}
//                 onChange={handleInputChange}
//               />
//             </label>
//           </div>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='color'
//             >
//               Renk
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3
//             dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//               id='color'
//               type='text'
//               placeholder='Renk'
//               name='color'
//               value={formData.price}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='mileage'
//             >
//               Kilometre
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3
//             dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//               id='mileage'
//               type='number'
//               placeholder='Kilometre'
//               name='mileage'
//               value={formData.price}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div className={next !== 2 ? 'hidden' : 'block'}>
//           <div className='mb-4'>
//             <DropdownMultipleSelect />
//             {/* <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='technologies'
//             >
//               Teknolojiler
//             </label>
//             <select name='technologies' id='technologies' multiple>
//               <option value='volvo'>Volvo</option>
//               <option value='saab'>Saab</option>
//               <option value='opel'>Opel</option>
//               <option value='audi'>Audi</option>
//             </select> */}
//             {/* <input
//               className='shadow appearance-none border rounded w-full py-2 px-3
//               dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//               id='model'
//               placeholder='Model'
//               type='text'
//               name='technologies'
//               value={formData.model}
//               onChange={handleInputChange}
//             /> */}
//           </div>
//           <div className='mb-4'>
//             <DropdownMultipleSelect />
//             {/* <input
//               className='shadow appearance-none border rounded w-full py-2 px-3
//               dark:text-white leading-tight focus:outline-none focus:shadow-outline'
//               id='features'
//               placeholder='Make'
//               type='text'
//               name='features'
//               value={formData.make}
//               onChange={handleInputChange}
//             /> */}
//           </div>
//         </div>
//         <div className={next !== 3 ? 'hidden' : 'block'}>
//           <div className='mb-4'>
//             <input
//               type='file'
//               accept='.jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*'
//               id='image-picker'
//               className='border border-black dark:text-black bg-zinc-500 w-[16rem] overflow-hidden text-sm'
//               onChange={(e) => e.target.files && setFile(e?.target?.files[0])}
//             />
//           </div>
//           {file && (
//             <Image
//               className='mb-4'
//               src={URL.createObjectURL(file)}
//               width='200'
//               height='200'
//               alt='preview'
//             />
//           )}
//         </div>
//         <div
//           className={
//             (next === 0 ? 'justify-end' : 'justify-between') +
//             ' flex items-center'
//           }
//         >
//           {next > 0 && (
//             <button
//               onClick={() => setNext(next - 1)}
//               className='dark:text-black'
//               type='button'
//             >
//               Geri
//             </button>
//           )}
//           {next < 3 && (
//             <button
//               onClick={() => setNext(next + 1)}
//               className='dark:text-black'
//               type='button'
//             >
//               İleri
//             </button>
//           )}
//           {next > 2 && (
//             <button
//               className='bg-blue-500 hover:bg-blue-700 dark:text-white
//               font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
//               type='submit'
//             >
//               Araç Ekle
//             </button>
//           )}
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default FormPopup;
