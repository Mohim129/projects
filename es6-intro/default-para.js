function add(num1, num2=0) {
    const total = num1 + num2;
    console.log(`The total of ${num1} and ${num2} is: ${total}`);   
    return total;
}

add(5);

function fullName(firstName, lastName='') {
    const name = firstName + ' ' + lastName;
    console.log(`Full name: ${name}`);
    return name;
}
fullName('John', 'Smith');

function multiply(a, b=1) {
    const result = a * b;
    console.log(`The result of multiplying ${a} and ${b} is: ${result}`);
    return result;
}
multiply(4); 