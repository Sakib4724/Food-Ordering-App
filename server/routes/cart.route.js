const express = require('express');
const { addToCart, removeFromCart } = require('../controllers/cart.controller');
const router = express.Router();

router.route('/add-to-cart').post(addToCart);
router.route('/remove-from-cart').post(removeFromCart);

module.exports = router;