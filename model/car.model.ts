import mongoose from 'mongoose';
import { Car } from '../types';
var Schema = mongoose.Schema;

const carSchema = new Schema<Car>({
  id: Number,
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
