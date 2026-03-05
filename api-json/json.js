console.log('Explore API')

const person={
    name: "Selim",
    fruit: "Dalim",
    dish: "Halim",
    friends: ['Jalim', 'Alim', "Kalim"],
    isRich: false,
    money: 34000,
}

// console.log(person);

//JSON -> JS object with Notation
// JSON.stringify

const personJSON = JSON.stringify(person);
console.log(personJSON)
// console.log(typeof personJSON)

const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON);
