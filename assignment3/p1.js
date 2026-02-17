/*Problem 1*/
function newPrice(currentPrice , discount ) {
          if( typeof currentPrice !== "number" || typeof discount !== "number" || discount>100 || discount<0){

                        return "Invalid";
                       
          }
          else{
            let discountPrice = currentPrice*(discount/100);
            let total = currentPrice - discountPrice;
            let finalPrice = total.toFixed(3)
            return finalPrice;
          }
}

console.log(newPrice(1500, 51.5));


// newPrice(1500, 20);