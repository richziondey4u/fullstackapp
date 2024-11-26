import React from "react";
import PRODUCTS from "../../products";
import Product from "./Product";
import Footer from "../../Components/Footer";

const Shop = () => {
  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>Easypay Shop</h1>
      </header>
      <div className="products-container">
        {PRODUCTS.length === 0 ? (
          <p>No products available.</p>
        ) : (
          PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
