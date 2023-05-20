import products from './product.js';

// const product = {
//   name: 'Servo drivers',
//   description:
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor alias aliquid, expedita nam, sint unde velit quod ducimus ipsum id veniam veritatis voluptatem ad voluptatum.',
//   price: 2000,
//   availble: true,
//   onSale: true,
// };

// <article class="product">
//   <h2 class="product__name">Name</h2>
//   <p class="product__descr">Description</p>
//   <p product__pridct>Price</p>
// </article>;

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Price: ${product.price} credits`;
// priceEl.classList.add('product__price');

// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Price: ${price} credits`;
  priceEl.classList.add('product__price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

console.log(makeProductCard(products[0]));

const productsContainerEl = document.querySelector('.js-products');

const elements = products.map(makeProductCard);

console.log(elements);
productsContainerEl.append(...elements);
