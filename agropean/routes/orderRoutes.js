const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Order routes
router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.put("/:id/pay", orderController.updateOrderToPaid);
router.put("/:id/deliver", orderController.updateOrderToDelivered);

module.exports = router;
