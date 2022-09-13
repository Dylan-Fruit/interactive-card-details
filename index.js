const form = document.querySelector(".form-area");
const btnConfirm = document.querySelector(".btn-confirm");

btnConfirm.addEventListener("click", (e) => {
  e.preventDefault();
  validName();
  validNumber();
  validMonth();
  validYear();
  validCVC();
  if (nameIsValid && numberIsValid && dateIsValid && cvcIsValid === true) {
    form.reset();
    form.style.display = "none";
    formSuccess.style.display = "block";
    cardName.innerHTML = defaultName;
    cardNumber.innerHTML = defaultNumber;
    cardMonth.innerHTML = defaultMonth;
    cardYear.innerHTML = defaultYear;
    cardCVC.innerHTML = defaultCVC;
  }
});

const inputName = document.querySelector("#name");
const cardName = document.querySelector(".cards-front-user-name");
const errorName = document.querySelector(".errorName");
const defaultName = "Jane Appleseed";
let lettersOnly = /^[a-zÀ-ÿ ]+$/i;
let nameIsValid;

errorName.style.display = "none";

function validName() {
  if (lettersOnly.test(inputName.value) && inputName.value.length > 2) {
    errorName.style.display = "none";
    inputName.style.border = "1px solid #eee";
    nameIsValid = true;
  } else {
    errorName.style.display = "block";
    errorName.textContent =
      "You can only use letters for the name and at least 2 or more characters.";
    inputName.style.border = "2px solid hsl(0, 100%, 66%)";
    errorName.style.color = "hsl(0, 100%, 66%)";
    errorName.style.fontSize = "10px";
    nameIsValid = false;
  }
}

inputName.addEventListener("focusout", () => {
  validName();
});

inputName.addEventListener("keyup", (e) => {
  cardName.innerHTML = e.target.value;

  if (cardName.innerHTML === "") {
    cardName.innerHTML = defaultName;
  }
});

const inputNumber = document.querySelector("#card-number");
const cardNumber = document.querySelector(".cards-front-number");
const errorNumber = document.querySelector(".errorNumber");
const defaultNumber = "0000 0000 0000 0000";
let numbersOnly = /^([0-9 ]{1,19})$/;
let numberIsValid;

function validNumber() {
  if (numbersOnly.test(inputNumber.value) && inputNumber.value.length > 18) {
    errorNumber.style.display = "none";
    inputNumber.style.border = "1px solid #eee";
    numberIsValid = true;
  } else {
    errorNumber.style.display = "block";
    errorNumber.textContent = "Wrong format, numbers only and 16 numbers.";
    inputNumber.style.border = "2px solid hsl(0, 100%, 66%)";
    errorNumber.style.color = "hsl(0, 100%, 66%)";
    errorNumber.style.fontSize = "10px";
    numberIsValid = false;
  }
}

inputNumber.addEventListener("focusout", () => {
  validNumber();
});

inputNumber.addEventListener("keyup", (e) => {
  let split4 = /.{1,4}/g;
  let val = e.target.value.split(" ").join("");
  e.target.value = val.match(split4).join(" ");
  cardNumber.innerHTML = e.target.value;

  if (inputNumber.value.length <= 1) {
    cardNumber.innerHTML = defaultNumber;
  }
});

const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const cardMonth = document.querySelector(".cards-front-user-date-month");
const cardYear = document.querySelector(".cards-front-user-date-year");
const errorDate = document.querySelector(".errorDate");
const defaultMonth = "00";
const defaultYear = "00";
let dateNumbersOnly = /^[0-9]{2}$/;
let dateIsValid;

function validMonth() {
  if (dateNumbersOnly.test(inputMonth.value) && inputMonth.value.length >= 2) {
    errorDate.style.display = "none";
    inputMonth.style.border = "1px solid #eee";
    dateIsValid = true;
  } else {
    errorDate.style.display = "block";
    errorDate.textContent = "Can't be blank";
    inputMonth.style.border = "2px solid hsl(0, 100%, 66%)";
    errorDate.style.color = "hsl(0, 100%, 66%)";
    errorDate.style.fontSize = "10px";
    dateIsValid = false;
  }
}

function validYear() {
  if (dateNumbersOnly.test(inputYear.value) && inputYear.value.length >= 2) {
    errorDate.style.display = "none";
    inputYear.style.border = "1px solid #eee";
    dateIsValid = true;
  } else {
    errorDate.style.display = "block";
    errorDate.textContent = "Can't be blank";
    inputYear.style.border = "2px solid hsl(0, 100%, 66%)";
    errorDate.style.color = "hsl(0, 100%, 66%)";
    errorDate.style.fontSize = "10px";
    dateIsValid = false;
  }
}

inputMonth.addEventListener("focusout", () => {
  validMonth();
});

inputMonth.addEventListener("keyup", (e) => {
  cardMonth.innerHTML = e.target.value;

  if (cardMonth.innerHTML === "") {
    cardMonth.innerHTML = defaultMonth;
  }
});

inputYear.addEventListener("focusout", () => {
  validYear();
});

inputYear.addEventListener("keyup", (e) => {
  cardYear.innerHTML = e.target.value;

  if (cardYear.innerHTML === "") {
    cardYear.innerHTML = defaultYear;
  }
});

const inputCVC = document.querySelector("#cvc");
const cardCVC = document.querySelector(".cards-back-cvc");
const errorCVC = document.querySelector(".errorCVC");
const defaultCVC = "000";
let cvcNumbersOnly = /^[0-9]{3}$/;
let cvcIsValid;

function validCVC() {
  if (cvcNumbersOnly.test(inputCVC.value) && inputCVC.value.length >= 3) {
    errorCVC.style.display = "none";
    inputCVC.style.border = "1px solid #eee";
    cvcIsValid = true;
  } else {
    errorCVC.style.display = "block";
    errorCVC.textContent = "Can't be blank";
    inputCVC.style.border = "2px solid hsl(0, 100%, 66%)";
    errorCVC.style.color = "hsl(0, 100%, 66%)";
    errorCVC.style.fontSize = "10px";
    cvcIsValid = false;
  }
}

inputCVC.addEventListener("focusout", () => {
  validCVC();
});

inputCVC.addEventListener("keyup", (e) => {
  cardCVC.innerHTML = e.target.value;

  if (cardCVC.innerHTML.length === 0) {
    cardCVC.innerHTML = defaultCVC;
  }
});

const btnContinue = document.querySelector(".btn-continue");
const formSuccess = document.querySelector(".form-confirm");

btnContinue.addEventListener("click", (e) => {
  e.preventDefault();

  formSuccess.style.display = "none";
  form.style.display = "block";
});
