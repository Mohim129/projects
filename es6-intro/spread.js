const max = Math.max(3 ,5 , 1, 8, 54, 23);
console.log(max);

const numbers = [3, 5, 1, 8, 54, 23];
const max2 = Math.max(...numbers);
console.log(max2);
console.log(numbers)
console.log(...numbers)

const params = [5, 10, 15];

function sum (x, y, z) {
    return x + y + z;
}
console.log(sum(...params));

const person = { name: 'John', age: 30, city: 'New York' };
// const person2 = person;
const person2 = { ...person };

person.salary = 50000;
console.log(person);
console.log(person2);

