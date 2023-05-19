// const navEl = document.querySelector('.site-nav');
// navEl.classList.add('super-cool');
// navEl.classList.remove('super-cool');

const magicBtn = document.querySelector('.js-magic-btn');
// magicBtn.addEventListener('click', () => {
//   navEl.classList.toggle('super-class');
//   console.log(navEl.classList.contains('super-class'));
// });

const navEl = document.querySelector('.site-nav');
// console.log(navEl.firstElementChild);
// console.log(navEl.children[1]);
// console.log(navEl.lastElementChild);

const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'This is a title';

console.log(titleEl);

// document.body.appendChild(titleEl);
const imageEl = document.createElement('img');
imageEl.src =
  'https://www.akc.org/wp-content/uploads/2017/11/Miniature-Bull-Terrier-standing-outdoors.jpg';
imageEl.alt = 'mini';
imageEl.width = 480;

console.log(imageEl);

// document.body.appendChild(imageEl);

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Cabinet';
navLinkEl.href = '/profile';

console.log(navItemEl);
console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);

// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
console.log(navEl);
