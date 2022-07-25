//declare our query selectors
var addRecipeButton = document.querySelector('.headerButton');
var letsCookButton = document.querySelector('.lets-cook');
var cookpotWindow = document.querySelector('.square-background2');

var cookpotImage = document.querySelector('.cookpot');

//declare our event listeners
letsCookButton.addEventListener('click', printTest);

//create our arrays
var sides = ["Quesadillas",
"Guacamole",
"Garden Salad",
"Crispy Potatoes",
"Pico de Gallo",
"Mexican Rice",
"Shepard Salad",
"Mexican Street Corn",
"Calabacitas a la Mexicana",
"Charro Beans",
"Cilantro Lime Rice",
"Chorizo con Papa Refried Beans",
"Chicekn Tortilla Soup",
"Tomato Avoda Salad",
"Jalapeno Poppers",
"Mexican Cauliflower Rice",
"Nachos",
"Mango Salsa"];

var mains = ["Chilaquiles",
"Pozole",
"Tacos al Pastor",
"Chicken Tinga",
"Clado de Rez",
"Enchiladas",
"Ceviche",
"Mole",
"Tamales",
"Empanadas",
"Menudo",
"Torta de Milaneza",
"Sopa de Camaron",
""];

var desserts = ["Arroz con Leche",
"Tres Leches Cake",
"Flan",
"Corn Cake",
"Pan Dulce con Chocolate",
"Spapillas",
"Churros",
"Flan",
"Mangoneada",
"Rum Cake",
"Mexican Banuelos",
"Mexican Hot Chocolate",
];

function printTest(){
  var selectedMealOption = document.querySelector('input[name="meal-options"]:checked').value;
  if(selectedMealOption === 'side'){
    renderMeal(sides);
  } else if (selectedMealOption === 'main-dish') {
    renderMeal(mains);
  } else if (selectedMealOption === 'dessert') {
    renderMeal(desserts);
  } else if (selectedMealOption === 'entire-meal') {
    console.log('entire meal was selected');
  }
}

function renderMeal(dish){
  cookpotImage.classList.add('hidden');
  cookpotWindow.innerHTML =
    `<h4>You should make: </h4>
    <h1>${dish[getRandomIndex(dish)]}</h1>`;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
