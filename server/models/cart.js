const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    restroName: {
        type: String,
        required: true
    },

    restroImage: {
        type: String,
        required: true
    },

    menuImage: {
        type: String,
        required: true
    },

    menuName: {
        type: String,
        required: true
    },

    menuDescription: {
        type: String,
        required: true
    },
    
    menuPrice: {
        type: String,
        required: true
    }
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;