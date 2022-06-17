function append(data) {
  let container = document.getElementById("container");
  // console.log(data);
  container.innerHTML = "";
  console.log(data);
  data.forEach((ele) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    let name = document.createElement("h3");
    let ingredients = document.createElement("p");
    for (let i = 1; i <= 20; i++) {
      let ing = document.createElement("p");
      ing.innerHTML = ele["strIngredient" + i];
      ingredients.appendChild(ing);
    }
    let instructions = document.createElement("p");
    instructions.innerHTML = ele.strInstructions;

    img.src = ele.strMealThumb;
    name.innerText = ele.strMeal;
    div.append(img, name, ingredients, instructions);
    document.getElementById("container").append(div);
  });
}

export { append };

// {
//   "idMeal": "52956",
//   "strMeal": "Chicken Congee",
//   "strDrinkAlternate": null,
//   "strCategory": "Chicken",
//   "strArea": "Chinese",
//   "strInstructions": "STEP 1 - MARINATING THE CHICKEN\r\nIn a bowl, add chicken, salt, white pepper, ginger juice and then mix it together well.\r\nSet the chicken aside.\r\nSTEP 2 - RINSE THE WHITE RICE\r\nRinse the rice in a metal bowl or pot a couple times and then drain the water.\r\nSTEP 2 - BOILING THE WHITE RICE\r\nNext add 8 cups of water and then set the stove on high heat until it is boiling. Once rice porridge starts to boil, set the stove on low heat and then stir it once every 8-10 minutes for around 20-25 minutes.\r\nAfter 25 minutes, this is optional but you can add a little bit more water to make rice porridge to make it less thick or to your preference.\r\nNext add the marinated chicken to the rice porridge and leave the stove on low heat for another 10 minutes.\r\nAfter an additional 10 minutes add the green onions, sliced ginger, 1 pinch of salt, 1 pinch of white pepper and stir for 10 seconds.\r\nServe the rice porridge in a bowl\r\nOptional: add Coriander on top of the rice porridge.",
//   "strMealThumb": "https://www.themealdb.com/images/media/meals/1529446352.jpg",
//   "strTags": null,
//   "strYoutube": "https://www.youtube.com/watch?v=kqEfk801E94",
//   "strIngredient1": "Chicken",
//   "strIngredient2": "Salt",
//   "strIngredient3": "Pepper",
//   "strIngredient4": "Ginger Cordial",
//   "strIngredient5": "Ginger",
//   "strIngredient6": "Spring Onions",
//   "strIngredient7": "Rice",
//   "strIngredient8": "Water",
//   "strIngredient9": "Coriander",
//   "strIngredient10": "",
//   "strIngredient11": "",
//   "strIngredient12": "",
//   "strIngredient13": "",
//   "strIngredient14": "",
//   "strIngredient15": "",
//   "strIngredient16": "",
//   "strIngredient17": "",
//   "strIngredient18": "",
//   "strIngredient19": "",
//   "strIngredient20": "",
//   "strMeasure1": "8 oz ",
//   "strMeasure2": "pinch",
//   "strMeasure3": "pinch",
//   "strMeasure4": "1 tsp ",
//   "strMeasure5": "1 tsp ",
//   "strMeasure6": "1 tbs",
//   "strMeasure7": "1/2 cup ",
//   "strMeasure8": "8 cups ",
//   "strMeasure9": "2 oz ",
//   "strMeasure10": "",
//   "strMeasure11": "",
//   "strMeasure12": "",
//   "strMeasure13": "",
//   "strMeasure14": "",
//   "strMeasure15": "",
//   "strMeasure16": "",
//   "strMeasure17": "",
//   "strMeasure18": "",
//   "strMeasure19": "",
//   "strMeasure20": "",
//   "strSource": "https://sueandgambo.com/pages/chicken-congee",
//   "strImageSource": null,
//   "strCreativeCommonsConfirmed": null,
//   "dateModified": null
// }
