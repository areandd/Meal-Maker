const menu = {
    _meal: '',
    _price: 0,

    set meal(mealCheck) {
        if (typeof mealCheck === 'string') {
            return this._meal = mealCheck;
        }
    },

    set price(priceCheck) {
        if (typeof priceCheck === 'number') {
            return this._price = priceCheck;
        }
    },

    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's meal is ${this._meal} for $${this._price}!`
        } else {
            return `Meal or price not set correctly!`
        }
    }

};

menu.meal = 'Injera';
menu.price = 14;
console.log(menu.todaysSpecial);