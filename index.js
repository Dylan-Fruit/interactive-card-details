const form = document.querySelector(".form-area");

const inputName = document.querySelector("#name");
const cardName = document.querySelector(".cards-front-user-name");

const defaultName = "Jane Appleseed";

if (cardName.length === 0) {
  cardName.innerHTML = defaultName;
}

inputName.addEventListener("keyup", () => {
  cardName.innerHTML = inputName.value;
});

const inputNumber = document.querySelector("#card-number");
const cardNumber = document.querySelector(".cards-front-number");

inputNumber.addEventListener("keyup", (e) => {
  let split4 = /.{1,4}/g;
  let val = e.target.value.split(" ").join("");
  e.target.value = val.match(split4).join(" ");
  cardNumber.innerHTML = inputNumber.value;
});

const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
