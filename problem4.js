`Task-4: Sorting Objects`;

`Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array`;

const cars = [
  { make: "Chevrolet", model: "Silverado", year: 2017 },
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Tesla", model: "Model S", year: 2021 },
  { make: "Ford", model: "Mustang", year: 2019 },
];

const sortByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};
const sortingCarsByYear = sortByYear(cars);
// console.log(sortingCarsByYear);
