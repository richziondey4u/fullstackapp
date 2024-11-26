import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            EasyPay is a trusted partner for local retail stores of small size
            that sell a range of identical products such as groceries,
            vegetables and assorted packed items at the front counter, plus a
            variety of canned foods, snacks, ice creams, biscuits and soda on
            the shelves.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product">Products</a>
            </li>
            <li>
              <a href="/AboutUs">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: richzion08@gmail.com</p>
          <p>Phone: +2349035341733</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 EAZYPAY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
