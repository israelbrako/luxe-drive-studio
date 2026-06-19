import sedan from "@/assets/car-sedan.jpg";
import suv from "@/assets/car-suv.jpg";
import sports from "@/assets/car-sports.jpg";
import electric from "@/assets/car-electric.jpg";
import convertible from "@/assets/car-convertible.jpg";
import executive from "@/assets/car-executive.jpg";

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: "Sedan" | "SUV" | "Sports" | "Electric" | "Luxury" | "Convertible";
  image: string;
  rentPerDay: number;
  price: number;
  mileage: string;
  fuel: string;
  transmission: string;
  engine: string;
  popularity: number;
};

export const vehicles: Vehicle[] = [
  { id: "v1", brand: "BMW", model: "5 Series M Sport", year: 2024, category: "Sedan", image: sedan, rentPerDay: 189, price: 68500, mileage: "1,200 mi", fuel: "Petrol", transmission: "Auto", engine: "3.0L I6", popularity: 92 },
  { id: "v2", brand: "Range Rover", model: "Sport Black Edition", year: 2024, category: "SUV", image: suv, rentPerDay: 259, price: 112000, mileage: "850 mi", fuel: "Hybrid", transmission: "Auto", engine: "4.4L V8", popularity: 88 },
  { id: "v3", brand: "Ferrari", model: "F8 Tributo", year: 2023, category: "Sports", image: sports, rentPerDay: 1290, price: 298000, mileage: "2,400 mi", fuel: "Petrol", transmission: "Auto", engine: "3.9L V8", popularity: 99 },
  { id: "v4", brand: "Tesla", model: "Model S Plaid", year: 2024, category: "Electric", image: electric, rentPerDay: 329, price: 129990, mileage: "Brand New", fuel: "Electric", transmission: "Auto", engine: "Tri-Motor", popularity: 95 },
  { id: "v5", brand: "Ford", model: "Mustang GT Convertible", year: 2023, category: "Convertible", image: convertible, rentPerDay: 219, price: 58900, mileage: "3,100 mi", fuel: "Petrol", transmission: "Manual", engine: "5.0L V8", popularity: 84 },
  { id: "v6", brand: "BMW", model: "8 Series Gran Coupé", year: 2024, category: "Luxury", image: executive, rentPerDay: 449, price: 142000, mileage: "Brand New", fuel: "Petrol", transmission: "Auto", engine: "4.4L V8", popularity: 90 },
];
