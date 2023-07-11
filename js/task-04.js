const counterValue = document.querySelector("#value");
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

let currentValue = 0;

const updateCounterValue = () => {
  counterValue.textContent = currentValue;
};

const increment = () => {
  currentValue += 1;
  updateCounterValue();
};

const decrement = () => {
  currentValue -= 1;
  updateCounterValue();
};

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
