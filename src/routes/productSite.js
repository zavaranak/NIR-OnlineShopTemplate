const express = require("express");
const route = express.Router();
const productController = require("../controllers/productController");

//Routing
route.post("/addItem", productController.AddItemCart);
route.get("/", productController.ViewAll);
module.exports = route;
