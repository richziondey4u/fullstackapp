import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleCheckout = () => {
    // You can implement the logic for completing the checkout here
    // For now, let's just log the customer info and cart details
    console.log("Customer Info:", customerInfo);
    console.log("Cart Items:", cartItems);
    console.log("Total Amount:", totalAmount);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2 className="checkout-title">Checkout</h2>
        <form className="checkout-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={customerInfo.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={customerInfo.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={customerInfo.address}
              onChange={handleChange}
            />
          </label>
          <p className="checkout-total">Total Amount: ${totalAmount}</p>
          {/* Payment form placeholders */}
          <label>
            Card Number:
            <input type="text" name="cardNumber" />
          </label>
          <label>
            Expiry Date:
            <input type="text" name="expiryDate" />
          </label>
          <label>
            CVV:
            <input type="text" name="cvv" />
          </label>
          <button type="button" onClick={handleCheckout}>
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
