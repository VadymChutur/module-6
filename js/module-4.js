const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const magicBtnEl = document.querySelector('.js-magic-btn');
const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map((option) => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   buttonEl.style.width = '100px';
//   buttonEl.style.height = '50px';
//   buttonEl.style.borderRadius = '5px';
//   buttonEl.style.margin = '10px';

//   return buttonEl;
// });

// console.log(elements);

const makeColorPickerOptions = (options) => {
  return options.map((option) => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    buttonEl.style.width = '100px';
    buttonEl.style.height = '50px';
    buttonEl.style.borderRadius = '10px';
    buttonEl.style.margin = '10px';
    buttonEl.style.borderColor = option.color;

    return buttonEl;
  });
};

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);

// colorPickerContainerEl.append(...elements);

// const options = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = options.label;
// buttonEl.style.backgroundColor = options.color;
// buttonEl.style.width = '100px';
// buttonEl.style.height = '50px';

// console.log(buttonEl);
