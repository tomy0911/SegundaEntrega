const ProductsManagerMongo = require("../../Managers/ProductsManagerMongo");

class ProductsDaoMongoDb extends ProductsManagerMongo {
  constructor() {
    super("products");
  }
}

module.exports = ProductsDaoMongoDb;
