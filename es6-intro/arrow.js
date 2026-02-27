console.log(add(5, 10));
function add (num1, num2) {
    const total = num1 + num2;
    // console.log(`The total of ${num1} and ${num2} is: ${total}`);   
    return total;
}
// console.log(add2(10, 10));

const add2 = function(num1,num2){
    return num1 + num2;
}
console.log(add2(10,10))


const add3 = (num1, num2) => num1 + num2;
console.log(add3(10, 20));

const getPi = () => 3.1416

console.log(10*getPi());

const isEven = num => num%2 === 0;
const doMath = (x, y)=>{
    const sum = x + y;
    const diff = x - y;
    return sum*diff;
}

document.getElementById('btn').addEventListener('click',()=>{

})
document.getElementById('btn').addEventListener('click',(event)=>{

})