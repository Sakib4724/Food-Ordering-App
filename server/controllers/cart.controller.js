const User = require('../models/user');

const addToCart = async (req, res, next) => {
  console.log("add-to-cart api");
  const {
    email,
    restroName,
    restroImage,
    menuName,
    menuImage,
    menuDescription,
    menuPrice,
  } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "You are not logged in!",
      });
    }

    // const cartItem = {
    //   restroName: restroName,
    //   restroImage: restroImage,
    //   menuName: menuName,
    //   menuImage: menuImage,
    //   menuDescription: menuDescription,
    //   menuPrice: menuPrice
    // }

    const cartItem = {
      restroName: restroName,
      restroImage: restroImage,
      menuName: menuName,
      menuImage: menuImage,
      menuDescription: menuDescription,
      menuPrice: menuPrice / 100,
    };

    user.cart.push(cartItem);

    await user.save();
<<<<<<< HEAD
    // console.log(user.cart.length);
    // const cart = user.cart;

    return res.json({
      user,
=======

    return res.json({
>>>>>>> 2d505c60af282ed29b9835c5e7192c11899277eb
      message: "Item Added to cart successfully",
    });
  } catch (error) {
    console.error("Error adding item from cart:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const removeFromCart = async (req, res, next) => {
  console.log("remove-from-cart api");
  const { email, restroName, menuName } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user does not exist, return error
    if (!user) {
      return res.json({
        error: "You are not logged in!",
      });
    }

    // Update the user document to remove the item from the cart
    await User.findOneAndUpdate(
      { email },
      { $pull: { cart: { restroName, menuName } } }
    );

<<<<<<< HEAD
    // Fetch the updated user document
    const updatedUser = await User.findOne({ email });

    return res.json({
      cart: updatedUser.cart, // Send the updated cart data back to the frontend
=======
    return res.json({
>>>>>>> 2d505c60af282ed29b9835c5e7192c11899277eb
      message: "Item removed from cart successfully",
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

<<<<<<< HEAD
const clearCart = async(req, res, next) => {
  const {email} = req.body;

  try{
    await User.findOneAndUpdate(
      { email },
      { cart: [] }, // Set the cart array to an empty array
      { new: true } // To return the updated document after the update operation
    );
    
    const updatedUser = await User.findOne({ email });
    
    return res.json({
      cart: updatedUser.cart,
      message: "Cart cleared successfully"
    });

  }
  catch(error) {
    console.error("Error while clearing the cart: ", error);
    return res.status(500).json({error: "Internal server error"});
  }
}

module.exports = {
    addToCart,
    removeFromCart,
    clearCart
=======
module.exports = {
    addToCart,
    removeFromCart
>>>>>>> 2d505c60af282ed29b9835c5e7192c11899277eb
}