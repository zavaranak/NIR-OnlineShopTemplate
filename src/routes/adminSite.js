const express = require("express");
const route = express.Router();
const adminController = require("../controllers/adminController");
const upload = require("../config/multerconfig");
//Routing
route.get("/products", adminController.ManageProducts);
route.get("/clients", adminController.ManageClients);
route.get("/orders", adminController.ManageOrders);
route.get("/analysis", adminController.Analysis);
route.post(
  "/add-product",
  upload.single("productthumpnail"),
  adminController.AddNewProduct
);
route.post(
  "/edit-product",
  upload.single("productthumpnail"),
  adminController.EditProduct
);
route.post("/confirm-order",adminController.ConfirmState)
route.post("/cancel-order",adminController.CancelState)
route.get("/get-orders",adminController.GetOrders)
route.post("/multertest", upload.single(), adminController.MulterFunc);
route.get("/", adminController.AdminPage);
//Export module
module.exports = route;
