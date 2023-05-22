const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', logMessage);

function handleTargetButtonClick() {
  console.log('Click on target button');
}

function targetButtonClickHandler() {
  console.log('Click on target button');
}

function onTargetButtonClick() {
  console.log('Click on target button');
}

function logMessage() {
  console.log('Click on target button');
}

addListenerBtn.addEventListener('click', () => {
  console.log('I hang an event listener on the target button');
  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', () => {
  console.log('I remove the event listener from the target button');
  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick() {
  console.log('Click on target button');
}
