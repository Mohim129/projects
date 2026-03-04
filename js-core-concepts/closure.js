function outerFunction(){
    function innerFunction(){
        console.log('This is the inner Function')
    }
    return innerFunction;
}

// const output = outerFunction()

// console.log(output)

const result = outerFunction()
// result()
// console.log(result)

function counter(owner){
    let count = 0;
    function increment(){
        console.log('value of count', owner, count);
        count++;
    }
    return increment;
}
const count1 = counter("Mohim");


//returns the outer function
console.log(counter())
console.log(count1)

// returns the inner function 
count1()
const mohim3 = counter('Mohim3')
mohim3()
mohim3()

count1();
count1();
count1();
count1();
count1();

mohim3()
mohim3()
mohim3()
