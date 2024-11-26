import React, { useContext } from "react";
import ShopContext from "../../context/ShopContext";


const Product = (props) => {
  const { id, productName, productDescription, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product-card">
      <img className="product-image" src={productImage} alt={productName} />
      <div className="product-info">
        <h3 className="product-name">{productName}</h3>
        <p className="product-description">{productDescription}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && ` (${cartItemAmount})`}
        </button>
      </div>
    </div>
  );
};

export default Product;
