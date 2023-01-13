import mongoose from 'mongoose';
import { ICar } from '../types';
var Schema = mongoose.Schema;

const carSchema = new Schema<ICar>({
  _id: String,
  make: String,
  model: String,
  year: Number,
  price: Number,
  imageUrl: String,
  engine: String,
  transmission: String,
  fuelType: String,
  color: String,
  mileage: Number,
  features: [String],
  technologies: [String],
});

export default mongoose.models.Car || mongoose.model('Car', carSchema);
