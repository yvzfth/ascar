// pages/api/test.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../middleware/mongodb';
import Car from '../../model/car.model';
import { ObjectId } from 'mongodb';
import { config } from '../../api.config';
import { app, db } from '../../firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from 'firebase/firestore';

async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      let data = req.body;
      data = { ...data, _id: new ObjectId() };
      // delete data._id; // data = { ...data, _id: new ObjectId() };
      // console.log(data);

      // try {
      //   const images = data['images'];
      //   delete data.images;
      //   data.images = [];
      //   const ref = await addDoc(collection(db, 'cars'), data);
      //   //  .then((ref) =>
      //   //     console.log('Document written with ID: ', ref.id)
      //   //     );

      //   const carRef = doc(db, 'cars', ref.id);

      //   images.forEach((img: string) => {
      //     updateDoc(carRef, {
      //       images: arrayUnion(img),
      //     });
      //   });
      // } catch (e) {
      //   console.error('Error adding document: ', e);
      // }
      const car = await new Car(data);

      car.save();
      // console.log(car.insertedId);

      res.status(200).send('car has been inserted to db');
    }
    if (req.method === 'GET') {
      const cars = await Car.find({});
      res.status(201).json({ cars });
    }
    if (req.method === 'UPDATE') {
      // const washingtonRef = doc(db, "cars", "DC");
      // // Set the "capital" field of the city 'DC'
      // await updateDoc(washingtonRef, {
      //   capital: true
      // });
    }
    if (req.method === 'DELETE') {
      const id = req.body;

      Car.findByIdAndDelete(id, function (err: any, docs: any) {
        if (!err) {
          // console.log(docs);
        } else {
          console.log(err);
        }
      });
      res.status(200).send('deleted');
    }
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

    // Erase test data after use
    // connection.db.dropCollection(testModel.collection.collectionName);
  } catch (err) {
    res.status(400).json(err);
  }
}

export default connectDB(test);
export { config };
