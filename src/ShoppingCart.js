class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, price) {
    this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    });
  }

  clear() {
    this.items = [];
  }

  total() {
    const total = this.items.reduce((total, item) => total + item.pricePerUnit * item.quantity, 0);
    return total;
  }
}

module.exports = ShoppingCart;

//// Checking class functionality
// const cart = new ShoppingCart();
// cart.addItem('Sasauge',10,2.5)
// cart.addItem('Bread', 10, 0.8)
// console.log(cart.total());
// console.log(cart.getItems());