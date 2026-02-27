const king = {
    name: 'Mufasa',
    kingdom: 'Pride Rock',
    age: 10,
    isAlive: false
};


// Object.freeze(king);
Object.seal(king);

delete  king.isAlive;



king.queen = 'Sarabi';
console.log(king);

king.name = 'Simba';
console.log(king);

const keys = Object.keys(king);
console.log(keys);

const values = Object.values(king);
console.log(values);


const entries = Object.entries(king);
console.log(entries);
