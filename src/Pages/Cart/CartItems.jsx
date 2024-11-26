import React, { useContext } from "react";
import ShopContext from "../../context/ShopContext";

const CartItems = (props) => {
  const { id, productName, productDescription, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cart-item">
      {" "}
      <img src={productImage} alt="" className="item-image" />
      <div className="item-description">
        {" "}
        <p>
          <b>{productName}</b>
          <>{productDescription}</>
        </p>
        <p>${price}</p>
        <div className="count-handler">
          {" "}
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
