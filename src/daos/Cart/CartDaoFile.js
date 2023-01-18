const CartManager = require("../../Managers/CartManager");

class CartDaoFile extends CartManager {
  constructor() {
    super(pathToCart);
  }

  async create(cart = { products: [] }) {
    return super.create(cart);
  }
}

module.exports = CartDaoFile;
