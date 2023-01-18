const ProductsManager = require("../../Managers/ProductsManager");

class ProductsDaoFile extends ProductsManager {
  constructor() {
    super(pathToProducts);
  }
}

module.exports = ProductsDaoFile;
