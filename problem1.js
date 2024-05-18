`Task-1 : Array Filtering And Mapping`;

`Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.`;

const peoples = [
  { id: 1, name: "Rafiqul Islam", age: 32, gender: "Male" },
  { id: 2, name: "Hasna Hena", age: 25, gender: "Female" },
  { id: 3, name: "Mitu Akter", age: 30, gender: "Female" },
  { id: 4, name: "Jamil Mia", age: 29, gender: "Male" },
  { id: 5, name: "Laila Begum", age: 22, gender: "Female" },
  { id: 6, name: "Anisur Rahman", age: 27, gender: "Male" },
  { id: 7, name: "Tania Tasnim Rupa", age: 28, gender: "Female" },
  { id: 8, name: "Nadia Sultana", age: 24, gender: "Female" },
  { id: 9, name: "Faisal Fahim", age: 35, gender: "Male" },
  { id: 10, name: "Asha Khatun", age: 26, gender: "Female" },
  { id: 11, name: "Moin Ali", age: 38, gender: "Male" },
  { id: 12, name: "Rina Akter", age: 27, gender: "Female" },
  { id: 13, name: "Nasir Mia", age: 36, gender: "Male" },
  { id: 14, name: "Abir Rayhan", age: 31, gender: "Male" },
  { id: 15, name: "Shila Khatun", age: 29, gender: "Female" },
  { id: 16, name: "Junaid", age: 33, gender: "Male" },
  { id: 17, name: "Anu Begum", age: 34, gender: "Female" },
  { id: 18, name: "Mahin khan", age: 37, gender: "Male" },
  { id: 19, name: "Afsar Ali", age: 28, gender: "Male" },
  { id: 20, name: "Ruma Khatun", age: 26, gender: "Female" },
  { id: 21, name: "Samira Jahan", age: 26, gender: "Female" },
];

const filterFemaleAndRestPeopleMap = (arr) => {
  const restPeople = arr.filter((people) => people.gender !== "Female");
  const allMales = restPeople.map((male) => male.name);
  return allMales;
};

const maleNames = filterFemaleAndRestPeopleMap(peoples);
// console.log(maleNames);
