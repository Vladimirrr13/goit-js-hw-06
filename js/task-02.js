const ingredientsList = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Создаем фрагмент, чтобы избежать множественных изменений DOM

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  fragment.appendChild(li);
});

// Вставляем фрагмент с элементами li в список ul#ingredients

ingredientsList.appendChild(fragment);
