const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 499 },
    { id: 3, name: 'Tablet', price: 299 },
    { id: 4, name: 'Headphones', price: 199 },
    { id: 5, name: 'Smartwatch', price: 199 },
    { id: 6, name: 'Camera', price: 599 },
    { id: 7, name: 'Printer', price: 149 },
    { id: 8, name: 'Monitor', price: 249 },
    { id: 9, name: 'Keyboard', price: 99 },
    { id: 10, name: 'Mouse', price: 49 }
]

function matchedProducts(products, search){
const matched = [];

    for(const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }    
    return matched;
}

const result = matchedProducts(products, "phone");
console.log(result);