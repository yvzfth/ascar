export interface ICar {
  // [key: string]: number | string | string[];
  _id: any;
  make: string;
  model: string;
  year: number;
  price: number;
  images: string[];
  engine: string;
  transmission: string;
  fuelType: string;
  color: string;
  mileage: number;
  features: string[];
  technologies: string[];
}
export interface ICarModels {
  [key: string]: { [key: string]: string[] };
}
