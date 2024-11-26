import React, { createContext, useState, useCallback } from "react";
import PRODUCTS from "../products"; // Adjust this path if needed

export const ShopContext = createContext();

const getDefaultCart = () => {
  const cart = {};
  PRODUCTS.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [user, setUser] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const getTotalCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce((totalAmount, [itemId, quantity]) => {
      if (quantity > 0) {
        const item = PRODUCTS.find((product) => product.id === Number(itemId));
        if (item) {
          totalAmount += quantity * item.price;
        }
      }
      return totalAmount;
    }, 0);
  }, [cartItems]);

  const getCartItemCount = useCallback(() => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  }, [cartItems]);

  const addToCart = useCallback((itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  }, []);

  const updateCartItemCount = useCallback((newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  }, []);

  const updateCustomerInfo = useCallback((info) => {
    setCustomerInfo(info);
  }, []);

  const completeCheckout = useCallback(() => {
    // Add logic for completing the checkout process (e.g., making an API request)
    // Reset cartItems and customerInfo after successful checkout
    setCartItems(getDefaultCart());
    setCustomerInfo({
      name: "",
      email: "",
      address: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    });
  }, []);

  // New functions for user authentication
  const signup = useCallback(async (formData) => {
    // Implement the signup logic (e.g., make an API request)
    // Update the user state if signup is successful
    setUser({ username: formData.username, email: formData.email });
  }, []);

  const login = useCallback(async (formData) => {
    // Implement the login logic (e.g., make an API request)
    // Update the user state if login is successful
    setUser({ email: formData.email });
  }, []);

  const logout = useCallback(() => {
    // Implement the logout logic (e.g., clear user data)
    setUser(null);
  }, []);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getCartItemCount, // Ensure this function is included
    user,
    signup,
    login,
    logout,
    customerInfo,
    updateCustomerInfo,
    completeCheckout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
