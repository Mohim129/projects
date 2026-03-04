// will be false
let data;
data = 0;
data = ''
data = false;
data = null;
data = NaN;


// will be true
data = []
data = {}


if(data){
    console.log('Truthy');
}else{
    console.log('Falsy');
}

/**
 *  ! --false
 *  !! --true
 *  these are used to turn any value into boolen 
 */

