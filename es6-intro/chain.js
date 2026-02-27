const employee = {
  name: "John Doe",
  1: "desk one",
  "home-address": "1st st, 2nd lane, house 3",
  position: "Software Engineer",
  salary: 50000,
  family: {
    spouse: {
      name: "Jane Doe",
    //   age: 35
    },
    children: ["Jack", "Jill"]
  }
};


console.log(employee.family?.spouse?.name);
console.log(employee.family?.spouse?.age);

