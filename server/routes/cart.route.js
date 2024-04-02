const express = require('express');
<<<<<<< HEAD
const { addToCart, removeFromCart, clearCart } = require('../controllers/cart.controller');
const router = express.Router();

router.route('/add-to-cart').post(addToCart);
router.route('/remove-from-cart').delete(removeFromCart);
router.route('/clear-cart').delete(clearCart);
=======
const { addToCart, removeFromCart } = require('../controllers/cart.controller');
const router = express.Router();

router.route('/add-to-cart').post(addToCart);
router.route('/remove-from-cart').post(removeFromCart);
>>>>>>> 2d505c60af282ed29b9835c5e7192c11899277eb

module.exports = router;