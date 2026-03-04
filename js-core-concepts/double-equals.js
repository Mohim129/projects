/**
 *  double equals does type coercion 
 * 
*/

console.log(2==2);
console.log(2=='2');
console.log(1==true);
console.log("1"==true);
console.log(0==false);
console.log("0"==false);
console.log(null == undefined);
console.log([5] == '5');
console.log([] == '');


//Exceptions: bcoz both are non premitive 

console.log(NaN == NaN);
console.log({}=={})
