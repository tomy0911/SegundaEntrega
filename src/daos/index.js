const ProductsDaoMongoDb = require("./Products/ProductsDaosMongoose");
const CartDaoMongoDB = require("./Cart/CartDaosMongoose");

const ProductsDaoFile = require("./Products/ProductsDaosFile");
const CartDaoFile = require("./Cart/CartDaoFile");

const fs = require("fs");

const DB = "mongo";

let productDAO;
let cartDAO;

switch (DB) {
  case "mongo":
    productDAO = new ProductsDaoMongoDb();
    cartDAO = new CartDaoMongoDB();
    break;
  case "fs":
    productDAO = new ProductsDaoFile();
    cartDAO = new CartDaoFile();
    break;
  default:
    break;
}

module.exports = { productDAO, cartDAO };
