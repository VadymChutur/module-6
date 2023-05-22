const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  //   const formElements = event.currentTarget.elements;
  //   console.dir(formElements);
  //   const mail = formElements.email.value;
  //   const password = formElements.password.value;
  //   const subscription = formElements.subscription.value;

  //   const formData = {
  //     mail,
  //     password,
  //     subscription,
  //     };
  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });
}
