const CartManagerMongo = require("../../Managers/CartManagerMongo");

class CartDaoMongoDB extends CartManagerMongo {
  constructor() {
    super("cart", {
      products: { type: [], required: true },
    });
  }

  async create(cart = { products: [] }) {
    return super.create(cart);
  }
}

module.exports = CartDaoMongoDB;
