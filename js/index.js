// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  price = Number(product.querySelector('.price span').innerText);
  quantity = Number(product.querySelector('.quantity input').value);
  subTotal = price * quantity;
  product.querySelector(".subtotal span").innerText = subTotal
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");

  // ITERATION 3
  let total = 0;
  [...products].forEach(product => {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value span').innerText = total;
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
   target.parentNode.removeChild(target);
   calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelector('.create-product input').value;
  const newProductPrice = document.querySelector(".create-product").children[1].querySelector("input").value;
  const products = document.querySelector('tbody');
  const newProduct = document.createElement('tr');
  newProduct.setAttribute("class", "product");
  newProduct.innerHTML = 
  `<td class=name><span>${newProductName}<span></td>
   <td class=price>$<span>${newProductPrice}</span></td> 
   <td class=quantity><input type="number" value="0" min="0" placeholder="Quantity" /></td> 
   <td class=subtotal>$<span>0</span></td>
   <td class=action><button class='btn btn-remove'>Remove</button></td>`;
  products.append(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn btn-remove');
  [...removeBtn].forEach(product => {
    product.addEventListener('click', removeProduct);
  })
  
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct)

});
