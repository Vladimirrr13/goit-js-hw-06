const categoriesList = document.querySelector("#categories");
const itemsList = categoriesList.querySelectorAll(".item");

// вывод количества категорий
console.log(`Number of categories: ${itemsList.length}`);

// перебор всех элементов .item и вывод заголовка и количества элементов в категории
itemsList.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}\nElements: ${categoryElements}`);
});
