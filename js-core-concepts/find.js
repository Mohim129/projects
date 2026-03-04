const products = [
  { id: 1, name: "laptop", price: 32000 },
  { id: 2, name: "phone", price: 7000 },
  { id: 3, name: "tablet", price: 12000 },
  { id: 4, name: "monitor", price: 10000 },
  { id: 5, name: "keyboard", price: 2000 },
  { id: 6, name: "mouse", price: 1500 },
];
const product = products.find(product=>product.price>30000);

console.log(product);