export interface ICar {
  [key: string]: number | string | string[];
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  imageUrl: string;
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
