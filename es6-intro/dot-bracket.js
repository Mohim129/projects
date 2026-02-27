const employee = {
    name: "John Doe",
    1:'desk one',
    'home-address': '1st st, 2nd lane, house 3',
    position: "Software Engineer"
};

// dot notation 
console.log(employee.name);
// console.log(employee.1);
// console.log(employee."home-address");


// bracket notation
console.log(employee['name']);
console.log(employee[1]);
console.log(employee['home-address']);