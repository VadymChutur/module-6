const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Input have event - event focus');
}

function onInputBlur() {
  console.log('Input lost event - event blur');
}

function onInputChange(event) {
  //   console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  //   console.log(event.currentTarget.checked);
  refs.btn.disabled = !event.currentTarget.checked;
}
