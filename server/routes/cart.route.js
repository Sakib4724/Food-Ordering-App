const express = require('express');
const { addToCart, removeFromCart, clearCart } = require('../controllers/cart.controller');
const router = express.Router();

router.route('/add-to-cart').post(addToCart);
router.route('/remove-from-cart').delete(removeFromCart);
router.route('/clear-cart').delete(clearCart);

module.exports = router;