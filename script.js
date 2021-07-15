// gets number from 0 to 9
const randomOutOfTen = () => {
  return Math.floor(Math.random() * 10);
};

//creates an object containing key-value pairs for each type of ingredient
const basketIngredients = {
  proteins: [
    "a whole suckling pig",
    "duck sausage",
    "rotisserie chicken",
    "ostrich tenderloin",
    "grouper fish",
    "guinea hen",
    "blood clams",
    "rack of vension",
    "smoked salmon",
    "goat chops",
  ],
  carbs: [
    "corn tortillas",
    "couscous",
    "star pasta",
    "anzac biscuits",
    "broken rice",
    "potato tots",
    "fruit ring cereal",
    "dumpling wrappers",
    "pizza dough",
    "ramen noodles",
  ],
  vegetables: [
    "fiddlehead ferns",
    "sauerkraut",
    "cauliflower",
    "frilly mustard greens",
    "nopales",
    "morning glory",
    "frozen spinach",
    "broccoli rabe",
    "fingerling potatoes",
    "romanesco",
    "sunchoke",
  ],
  random: [
    "red and white kabob sauces",
    "carrot ketchup",
    "kola nut syrup",
    "pork rinds",
    "head cheese",
    "twinkees",
    "quail eggs",
    "curry powder",
    "pickled green tomatoes",
    "dried plums",
  ],
};

//generates a basket ingredient message using our object and random number function
const basketGenerator = () => {
  return `Your entrée basket will consist of: ${
    basketIngredients.proteins[randomOutOfTen()]
  }, ${basketIngredients.carbs[randomOutOfTen()]}, ${
    basketIngredients.vegetables[randomOutOfTen()]
  } , and finally ${
    basketIngredients.random[randomOutOfTen()]
  }. 30 minutes on the clock... Clock starts now!`;
};

