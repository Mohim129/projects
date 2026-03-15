const handleAddProducts = () =>{
    const productEl = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');

    const product = productEl.value.trim();
    const quantity = parseInt(quantityEl.value);

    displayProduct(product, quantity);
    addProductToCart(product, quantity);
    productEl.value = '';
    quantityEl.value = '';

}

const getCart = () =>{
    let cart = {}
    const cartJSON = localStorage.getItem('cart')
    if(cartJSON){
        cart = JSON.parse(cartJSON)
    }
    return cart;
}

const addProductToCart = (product, quantity) =>{
    const cart = getCart();
    if(cart[product]){
        cart[product] =cart[product]+quantity
    }else{
        cart[product] = quantity;
    }
    
    
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON)
}

const displayProduct = (product,quantity) =>{
    const li =document.createElement('li');
    li.innerText = `${product} : ${quantity}`

    const ul = document.getElementById("produts-container");
    ul.appendChild(li)


}

//display products form stored local storage
 const displayStoredProducts = () =>{
    const cart = getCart()
    for(const product in cart){
        const quantity = cart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }
 }
 displayStoredProducts()

 //ask ai: how can i make a shopping cart persitent in local storage using JS. give me a simple example.

/** 
 * To Save object/array in local storage
 * 1. convert the object to JSON string by using JSON.stringify
 * 2. localstorage.setItem()
 */

/**
 * To get object/array from the local storage
 * 1. get the item from the local storage and it will be in JSON string
 * 2. convert the JSON string to js object by using JSON.parse
 * 
 */