const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onModalOpen);
refs.closeModalBtn.addEventListener('click', onModalClose);
refs.backdrop.addEventListener('click', onBackDropClick);

function onModalOpen() {
  window.addEventListener('keydown', onEscapeKeypress);
  document.body.classList.add('show-modal');
}

function onModalClose() {
  window.removeEventListener('keydown', onEscapeKeypress);
  document.body.classList.remove('show-modal');
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onModalClose();
  }
}

function onEscapeKeypress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onModalClose();
  }
}
