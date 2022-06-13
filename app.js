const loginForm = document.querySelector('.main__form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.querySelector('.form__firstname').value;
  const lastName = document.querySelector('.form__lastname').value;
  const email = document.querySelector('.form__email').value;
  const password = document.querySelector('.form__password').value;

  if (firstName === '') {
    addError('form__firstname', 'First Name cannot be empty');
  } else {
    removeError('form__firstname');
  }

  if (lastName === '') {
    addError('form__lastname', 'Last Name cannot be empty');
  } else {
    removeError('form__lastname');
  }

  if (email === '') {
    addError('form__email', 'Email cannot be empty');
  } else if (!validateEmail(email)) {
    addError('form__email', "looks like Email isn't valid");
  } else {
    removeError('form__email');
  }

  if (password === '') {
    addError('form__password', 'Password cannot be empty');
  } else {
    removeError('form__password');
  }
});

function addError(field, msg) {
  const selectForm = document.querySelector('.' + field).parentNode;
  selectForm.classList.add('error');

  const errorMsg = selectForm.querySelector('.error__message');
  errorMsg.innerHTML = msg;
}

function removeError(field) {
  const selectForm = document.querySelector('.' + field).parentNode;
  selectForm.classList.remove('error');
}

function validateEmail(email) {
  const regexValues =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
