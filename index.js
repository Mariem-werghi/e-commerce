// const products = [
//     {
//       id: 1,
//       name: 'Smartphone',
//       price: 599.99,
//       category: 'Electronics',
//       inStock: true,
//     },
//     {
//       id: 2,
//       name: 'Laptop',
//       price: 1099.99,
//       category: 'Electronics',
//       inStock: true,
//     },
//     {
//       id: 3,
//       name: 'Headphones',
//       price: 99.99,
//       category: 'Electronics',
//       inStock: false,
//     },
//     {
//       id: 4,
//       name: 'T-shirt',
//       price: 29.99,
//       category: 'Clothing',
//       inStock: true,
//     },
//     {
//       id: 5,
//       name: 'Jeans',
//       price: 49.99,
//       category: 'Clothing',
//       inStock: true,
//     },
//   ];



  

let cartItems = [];
let cartTotal = 0;

// Function to add items to the cart
function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  cartTotal += itemPrice;
  displayCartItems();
}

// Function to display items in the cart
function displayCartItems() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  
  // Clear the cart before displaying updated items
  cartItemsElement.innerHTML = '';

  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(listItem);
  });

  cartTotalElement.textContent = cartTotal.toFixed(2);
}



function homenavigate(){
    window.location.href="127.0.0.1:5501/history.html"
}