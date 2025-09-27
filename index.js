const input = document.getElementById("input");
const button = document.getElementById("btn");
const box = document.getElementById("box");
let country = "";

async function func() {
  let resource = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
  );
  let resourceObj = await resource.json();
  let items = resourceObj.meals;
  box.innerHTML = "";

  for (let item of items) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");

    div.className = "fc";
    img.className = "image";
    h2.className = "title";

    if (item.strMealThumb) {
      img.src = item.strMealThumb;
    }
    if (item.strMeal) {
      h2.textContent = item.strMeal;
    }

    div.appendChild(img);
    div.appendChild(h2);
    box.appendChild(div);
  }
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    country = input.value.trim();
    if (country) {
      func();
    }
  }
});

button.addEventListener("click", () => {
  country = input.value.trim();
  if (country) {
    func();
  }
});
