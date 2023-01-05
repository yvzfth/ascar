import Image from 'next/image';
import * as React from 'react';
import Modal from 'react-modal';
import DropdownMultipleSelect from './DropdownMultipleSelect';
interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormPopup: React.FC<FormPopupProps> = ({ isOpen, onClose }) => {
  const [next, setNext] = React.useState(0);
  const [file, setFile] = React.useState<File>();
  const [formData, setFormData] = React.useState({
    make: '',
    model: '',
    year: '',
    price: '',
    imageUrl: '',
    engine: '',
    transmission: '',
    fuelType: '',
    color: '',
    mileage: '',
    features: '',
    technologies: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form data to database
    console.log(formData);
    resetStates();
  };
  const resetStates = () => {
    setNext(0);
    setFile(undefined);
    setFormData({
      make: '',
      model: '',
      year: '',
      price: '',
      imageUrl: '',
      engine: '',
      transmission: '',
      fuelType: '',
      color: '',
      mileage: '',
      features: '',
      technologies: '',
    });
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={resetStates}
      contentLabel='Add Car Form'
      ariaHideApp={false}
      className='w-[20rem] my-20 m-auto'
    >
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit}
      >
        <div className='text-right dark:text-black '>
          <span className='p-2 cursor-pointer' onClick={resetStates}>
            X
          </span>
        </div>
        <div className={next !== 0 ? 'hidden' : 'block'}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='make'
            >
              Marka
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 
              dark:text-white leading-tight focus:outline-none focus:shadow-outline'
              id='make'
              placeholder='Marka'
              type='text'
              name='make'
              value={formData.make}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='model'
            >
              Model
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 
              dark:text-white leading-tight focus:outline-none focus:shadow-outline'
              id='model'
              placeholder='Model'
              type='text'
              name='model'
              value={formData.model}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='year'
            >
              Model Yılı
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 
              dark:text-white leading-tight focus:outline-none focus:shadow-outline'
              id='year'
              type='number'
              placeholder='Model Yılı'
              name='year'
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='price'
            >
              Fiyat
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 
            dark:text-white leading-tight focus:outline-none focus:shadow-outline'
              id='price'
              type='number'
              placeholder='Fiyat'
              name='price'
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={next !== 1 ? 'hidden' : 'block'}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='engine'
            >
              Motor
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 
              dark:text-white leading-tight focus:outline-none focus:shadow-outline'
              id='engine'
              placeholder='Motor'
              type='text'
              name='engine'
              value={formData.model}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='transmission'
            >
              Vites Tipi
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 
              dark:text-white leading-tight focus:outline-none focus:shadow-outline'
              id='transmission'
              placeholder='Vites Tipi'
              type='text'
              name='transmission'
              value={formData.make}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='fuelType'
            >
              Yakıt Tipi
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 
              dark:text-white leading-tight focus:outline-none focus:shadow-outline'
                id='fuelType'
                type='text'
                placeholder='Yakıt Tipi'
                name='fuelType'
                value={formData.year}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='color'
            >
              Renk
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 
            dark:text-white leading-tight focus:outline-none focus:shadow-outline'
              id='color'
              type='text'
              placeholder='Renk'
              name='color'
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='mileage'
            >
              Kilometre
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 
            dark:text-white leading-tight focus:outline-none focus:shadow-outline'
              id='mileage'
              type='number'
              placeholder='Kilometre'
              name='mileage'
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={next !== 2 ? 'hidden' : 'block'}>
          <div className='mb-4'>
            <DropdownMultipleSelect />
            {/* <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='technologies'
            >
              Teknolojiler
            </label>
            <select name='technologies' id='technologies' multiple>
              <option value='volvo'>Volvo</option>
              <option value='saab'>Saab</option>
              <option value='opel'>Opel</option>
              <option value='audi'>Audi</option>
            </select> */}
            {/* <input
              className='shadow appearance-none border rounded w-full py-2 px-3 
              dark:text-white leading-tight focus:outline-none focus:shadow-outline'
              id='model'
              placeholder='Model'
              type='text'
              name='technologies'
              value={formData.model}
              onChange={handleInputChange}
            /> */}
          </div>
          <div className='mb-4'>
            <DropdownMultipleSelect />
            {/* <input
              className='shadow appearance-none border rounded w-full py-2 px-3 
              dark:text-white leading-tight focus:outline-none focus:shadow-outline'
              id='features'
              placeholder='Make'
              type='text'
              name='features'
              value={formData.make}
              onChange={handleInputChange}
            /> */}
          </div>
        </div>
        <div className={next !== 3 ? 'hidden' : 'block'}>
          <div className='mb-4'>
            <input
              type='file'
              accept='.jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*'
              id='image-picker'
              className='border border-black dark:text-black bg-zinc-500 w-[16rem] overflow-hidden text-sm'
              onChange={(e) => e.target.files && setFile(e?.target?.files[0])}
            />
          </div>
          {file && (
            <Image
              className='mb-4'
              src={URL.createObjectURL(file)}
              width='200'
              height='200'
              alt='preview'
            />
          )}
        </div>
        <div
          className={
            (next === 0 ? 'justify-end' : 'justify-between') +
            ' flex items-center'
          }
        >
          {next > 0 && (
            <button
              onClick={() => setNext(next - 1)}
              className='dark:text-black'
              type='button'
            >
              Geri
            </button>
          )}
          {next < 3 && (
            <button
              onClick={() => setNext(next + 1)}
              className='dark:text-black'
              type='button'
            >
              İleri
            </button>
          )}
          {next > 2 && (
            <button
              className='bg-blue-500 hover:bg-blue-700 dark:text-white 
              font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Araç Ekle
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default FormPopup;
