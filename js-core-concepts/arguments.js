function add(num1 , num2){
    console.log('arguments',arguments)
    const args = [...arguments]
    console.log("Args: ", args)
    return num1+num2;
}
// add()
// add(2,5)
add(2,5,3,4,51)