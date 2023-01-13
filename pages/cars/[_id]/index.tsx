import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Button } from '@mui/material';
import axios from 'axios';
import useSWR from 'swr';
import WhatsAppChatButton from '../../../components/WhatsAppChatButton';
import Header from '../../../components/Header';
import CarImageSlider from '../../../components/CarImageSlider';
import SendEmail from '../../../components/SendEmail';
import { ICar } from '../../../types';
import separateThreeDigitsWithDot from '../../../utils/separateThreeDigitsWithDot';
const MapContainer = dynamic(() => import('../../../components/MapContainer'), {
  ssr: false,
});
const Technologies = dynamic(() => import('../../../components/Technologies'), {
  ssr: false,
});
const Features = dynamic(() => import('../../../components/Features'), {
  ssr: false,
});
const RelatedCars = dynamic(() => import('../../../components/RelatedCars'), {
  ssr: false,
});
const Car = () => {
  const [car, setCar] = React.useState<ICar>();
  const [cars, setCars] = React.useState<ICar[]>();
  const router = useRouter();
  const { _id } = router.query;
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR('/api/cars', fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });
  const { cars: carsData }: { cars: ICar[] } = data ? data : [];

  React.useEffect(() => {
    setCars(carsData);
    setCar(cars?.find((car) => car?._id == _id!));
  }, [carsData, car, cars, _id]);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // const [logedIn, setLogedIn] = React.useState<true | false>(false);
  // if (car !== undefined)
  return (
    <div>
      <div className='container mx-auto py-4 '>
        <div>
          <Header
            make={car?.make!}
            model={car?.model!}
            year={car?.year!}
            fuelType={car?.fuelType!}
            transmission={car?.transmission!}
          />
          <div className='flex flex-col justify-center space-y-8 max-w-[60rem] mx-auto'>
            <div className='mb-4'>
              <CarImageSlider
                imageUrls={['/car1.jpeg', '/car2.jpeg', '/car3.jpeg']}
              />
            </div>
            <div className='py-4'>
              <div className='text-red-500 text-3xl font-extrabold'>
                {separateThreeDigitsWithDot(car?.price!)}₺
              </div>
              {/* <div>{logedIn ? '⭐️' : '☆'} Favorilerine ekle</div> */}
            </div>
            <div className='bg-white rounded-lg shadow-md p-4 dark:text-black'>
              <h2 className='text-xl font-bold mb-2'>Motor</h2>
              <p>{car?.engine}L</p>
              <h2 className='text-xl font-bold mt-2 mb-2'>Yakıt Tipi</h2>
              <p>{car?.fuelType}</p>
              <h2 className='text-xl font-bold mt-2 mb-2'>Vites</h2>
              <p>{car?.transmission}</p>
              <h2 className='text-xl font-bold mt-2 mb-2'>Renk</h2>
              <p>{car?.color}</p>
              <h2 className='text-xl font-bold mt-2 mb-2'>Kilometre</h2>
              <p>{separateThreeDigitsWithDot(car?.mileage!)} km</p>
            </div>
            <Technologies
              technologies={car?.technologies!}
              bgImageUrl={car?.imageUrl!}
            />
            <Features features={car?.features!} />

            <div className='w-full h-[30rem]'>
              <MapContainer />
            </div>

            <WhatsAppChatButton />
            <Button
              className='w-full'
              variant='contained'
              color='error'
              href='#SendEmail'
            >
              Mesaj Gönder
            </Button>
            <RelatedCars _id={String(_id)!} />

            <div id='SendEmail' className='mx-auto'>
              <SendEmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // else return <div></div>;
};

export default Car;
