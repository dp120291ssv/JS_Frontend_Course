function Hamburger(size) {
  this._size = size;
  this._toppings = [];
}

Hamburger.prototype.addTopping = function (topping) {
  if (!this._toppings.includes(topping)) {
    return this._toppings.push(topping);
  }
};

Hamburger.prototype.getPrice = function () {
  const priceArr = this._toppings.map((x) => Hamburger.TOPPINGS[x].price);
  priceArr.push(Hamburger.SIZES[this._size].price);
  let price = priceArr.reduce((acc, prices) => acc + prices, 0);
  return price;
};

Hamburger.prototype.getCallories = function () {
  const caloriesArr = this._toppings.map((x) => Hamburger.TOPPINGS[x].calories);
  caloriesArr.push(Hamburger.SIZES[this._size].calories);
  let calories = caloriesArr.reduce((acc, itemcalories) => acc + itemcalories, 0);
  return calories;
};

Hamburger.SIZE_SMALL = "small";
Hamburger.SIZE_MEDIUM = "medium";
Hamburger.SIZE_LARGE = "large";

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 50,
    calories: 20,
  },
  [Hamburger.SIZE_MEDIUM]: {
    price: 75,
    calories: 30,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 100,
    calories: 40,
  },
};

Hamburger.TOPPING_CHEESE = "cheese";
Hamburger.TOPPING_SALAD = "salad";
Hamburger.TOPPING__POTATOES = "potatoes";
Hamburger.TOPPING_SAUCE = "sauce";
Hamburger.TOPPING_MAYONNAISE = "mayonnaise";

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_CHEESE]: {
    price: 10,
    calories: 20,
  },
  [Hamburger.TOPPING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.TOPPING_POTATOES]: {
    price: 15,
    calories: 10,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 0,
  },
  [Hamburger.TOPPING_MAYONNAISE]: {
    price: 20,
    calories: 5,
  },
};

// маленький гамбургер 
const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

//стоимость без добавок
console.log("Price: ", hamburger.getPrice());
console.log("Calories: ", hamburger.getCallories());

//стоимость с добавками
hamburger.addTopping(Hamburger.TOPPING_CHEESE);
console.log("Price: ", hamburger.getPrice());
console.log("Calories: ", hamburger.getCallories());

