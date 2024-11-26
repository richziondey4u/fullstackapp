import React, { useContext, useEffect } from "react";
import PRODUCTS from "../../products";
import ShopContext from "../../context/ShopContext";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure this import is present for toast styling

const Cart = () => {
  const { cartItems, getTotalCartAmount, getCartItemCount } = useContext(ShopContext);
  
  // Check if the functions are available
  console.log('Cart Items:', cartItems);
  console.log('Total Cart Amount Function:', getTotalCartAmount);
  console.log('Get Cart Item Count Function:', getCartItemCount);

  const totalAmount = getTotalCartAmount();
  const itemCount = getCartItemCount();
  const navigate = useNavigate();

  useEffect(() => {
    if (itemCount > 0) {
      toast.info(`Items in Cart: ${itemCount}`);
    }
  }, [itemCount]);

  return (
    <div className="cart-card">
      <br /> <br /> <br /><br />
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <div className="cart-item-count">
          <span>Items in Cart: {itemCount}</span>
        </div>
      </div>
      <div className="cart-items-container">
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] > 0) {
            return <CartItems key={Product.id} data={Product} />;
          }
          return null; // Ensure that null is returned if condition is not met
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="cart-summary">
          <p>Subtotal: ${totalAmount.toFixed(2)}</p> {/* Formatting amount */}
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => navigate("/Checkout")}>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
