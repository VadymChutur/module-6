const magicBtn = document.querySelector('.js-magic-btn');

const imageRef = document.querySelector('.hero__image');
console.log(imageRef);
console.log(imageRef.src);

magicBtn.addEventListener('click', () => {
  imageRef.src =
    'https://www.akc.org/wp-content/uploads/2017/11/Miniature-Bull-Terrier-standing-outdoors.jpg';
});

const heroTitleRef = document.querySelector('.hero__title');
console.log(heroTitleRef.textContent);
heroTitleRef.textContent = 'mini bullteriers';

const actions = document.querySelectorAll('.js-actions button');
console.log(actions[2].dataset.action);
