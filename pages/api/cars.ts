// pages/api/test.ts
import connectDB from '../../middleware/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import Car from '../../model/car.model';

async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const car = new CarModel({
    //   id: 14,
    //   make: 'Mazda',
    //   model: 'CX-5',
    //   year: 2021,
    //   price: 300000,
    //   imageUrl: '/images/cx5.jpg',
    //   engine: '2.5L 4-Cylinder DOHC 16V',
    //   transmission: 'CVT',
    //   fuelType: 'Gasoline',
    //   color: 'Blue',
    //   mileage: 50000,
    //   features: [
    //     'Air conditioning',
    //     'Bluetooth connectivity',
    //     'Rearview camera',
    //     'Satellite radio',
    //     'Sunroof',
    //     'Leather seats',
    //     'Navigation system',
    //     'Adaptive cruise control',
    //   ],
    //   technologies: [
    //     'NissanConnect infotainment system',
    //     'Nissan Safety Shield driver assist technology',
    //     'Xtronic CVT transmission',
    //   ],
    // });
    // car.save();
    const cars = await Car.find({});
    res.status(201).json({ cars });

    // Erase test data after use
    // connection.db.dropCollection(testModel.collection.collectionName);
  } catch (err) {
    res.status(400).json(err);
  }
}

export default connectDB(test);
