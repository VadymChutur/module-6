const refs = {
  output: document.querySelector('.js-output'),
  claerBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress);
refs.claerBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
  //   console.log(event.key);
  // console.log(event.code);
  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = '';
}
