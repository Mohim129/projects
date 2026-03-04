const numbers = [1,2,3,4,5];
const friends = ['zaved', 'naved', 'aved', 'sajed'];

// doubled = [];
// for(const num of numbers){
//     doubled.push(num*2);
// }

// const doubleIt = num =>num*2;

// const doubled = numbers.map(doubleIt)

const doubled = numbers.map(num=>num*2);
const squared = numbers.map(num=>num*num);

const firstLetters = friends.map(frd => frd[0]);

const products = [
    {id:1, name:'laptop', price:32000},
    {id:2, name:'phone', price:7000},
    {id:3, name:'tablet', price:12000},
    {id:4, name:'monitor', price:10000},
]

const prices = products.map(product=>product.price);
const names = products.map((product, index, productArray)=>{
    const upperCaseName = product.name.toUpperCase();
    console.log(index, upperCaseName, productArray);
    return upperCaseName;
});

const result = products.forEach(product=>console.log(product.id))



console.log(doubled);
console.log(squared);
console.log(firstLetters);
console.log(prices);
console.log(names);

//for each doesn't give any return

console.log(result);