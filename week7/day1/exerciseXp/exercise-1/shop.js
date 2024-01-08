const products = require('./products');

function findProductByName(productName) {
  const foundProduct = products.find(product => product.name === productName);
  return foundProduct;
}


const productName1 = 'Product1';
const productName2 = 'Product3';

const product1 = findProductByName(productName1);
const product2 = findProductByName(productName2);

if (product1) {
  console.log(`Details for ${productName1}:`, product1);
} else {
  console.log(`${productName1} not found.`);
}

if (product2) {
  console.log(`Details for ${productName2}:`, product2);
} else {
  console.log(`${productName2} not found.`);
}