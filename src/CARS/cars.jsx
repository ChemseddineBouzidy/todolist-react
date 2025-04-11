import React, { useState } from "react";
import Car from "./Car";
const cars = [
  {
    brand: "Toyota",
    model: "Camry",
    carBody: "Sedan",
    color: "White",
    price: 28000,
    year: 2023,
  },
  {
    brand: "Honda",
    model: "Civic",
    carBody: "Hatchback",
    color: "Blue",
    price: 24000,
    year: 2022,
  },
  {
    brand: "Tesla",
    model: "Model 3",
    carBody: "Sedan",
    color: "Red",
    price: 42000,
    year: 2024,
  },
  {
    brand: "Ford",
    model: "F-150",
    carBody: "Pickup",
    color: "Black",
    price: 35000,
    year: 2023,
  },
  {
    brand: "Chevrolet",
    model: "Tahoe",
    carBody: "SUV",
    color: "Gray",
    price: 50000,
    year: 2023,
  },
  {
    brand: "BMW",
    model: "X5",
    carBody: "SUV",
    color: "Silver",
    price: 62000,
    year: 2024,
  },
  {
    brand: "Audi",
    model: "A4",
    carBody: "Sedan",
    color: "White",
    price: 45000,
    year: 2022,
  },
  {
    brand: "Mercedes-Benz",
    model: "C-Class",
    carBody: "Coupe",
    color: "Blue",
    price: 51000,
    year: 2024,
  },
];

function Cars() {
    const [isLoggedIn ,setIsLoggedIn]=useState(false)
  const displayCars = () => {
    return cars.map((car, key) => (
      <Car brand={car.brand} price={car.price} key={key} />
    ));
  };
  return (
    <div>
      {cars.length && isLoggedIn > 0 ? displayCars() :
      <>
        <p>no cars pls login</p>
        <button className="bg-blue-600  w-64 rounded-lg">login</button>
        </>
      }
 
    </div>
  );
}

export default Cars;
