// array named products
let products = [];


// 3 products
let cherry = {
  name: "Cherry",
  price: 2.59,
  quantity: 0,
  productId: 4324,
  image: 'images/cherry.jpg',
}; 


let orange = {
  name: "Orange",
  price: 4.73,
  quantity: 0,
  productId: 8435,
  image: 'images/orange.jpg',
};


let strawberry = {
  name: "Strawberry",
  price: 3.47,
  quantity: 0,
  productId: 9857,
  image: 'images/strawberry.jpg',
};


// putting 3 objects in to array products
products.push(cherry, orange, strawberry);


// empty array named cart
let cart = [];

// setting amount that is paid to 0
let totalPaid = 0;


// function getting product based on the productId
function getProductByIdFromList(productId, my_list) {
  return my_list.find((product) => product.productId === productId);
};


function addProductToCart(productId) {
  // getting product based on the productId
  let product = getProductByIdFromList(productId, products);
  // increases the product quantity
  product.quantity += 1;
  // if product is not in cart, it adding it
  if (!cart.includes(product)) {
    cart.push(product);
  };
};


function increaseQuantity(productId) {
  // getting product based on the productId
  let product = getProductByIdFromList(productId, products);
  // increase the product quantity
  product.quantity += 1;
};


function decreaseQuantity(productId) {
  // getting product based on the productId
  let product = getProductByIdFromList(productId, products);
  // decreases the product quantity
  product.quantity -= 1;
  // if there is 0 product in cart, it is removing the product from cart
  if (product.quantity <= 0) {
    removeProductFromCart(product.productId);
  };
};


function removeProductFromCart(productId) {
  // getting product based on the productId
  let product = getProductByIdFromList(productId, products);
  // setting quantity to 0
  product.quantity = 0;
  // removing product 
  removeIndex = cart.indexOf(product);
  cart.splice(removeIndex, 1);
};


function cartTotal() {
  let total = cart.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.quantity * currentValue.price;
  }, 0);
  // return the total
  return total;
  };


function emptyCart() {
  // setting all product quatntities to 0
  for (i = 0; i < cart.length; i++){
    cart[i].quantity=0;
  };
  // removing all products from cart
  removeIndex = cart.indexOf(product);
  cart.splice(removeIndex, cart.length);
};


function pay(amount) {
  // setting amount to what we have already paid
  totalPaid += amount;
  // giving information if we need to pay more, or we will get back money
  return totalPaid - cartTotal();
};


module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
