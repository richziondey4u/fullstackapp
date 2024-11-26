import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart} from "phosphor-react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { ShopContext } from "../context/ShopContext"; // Adjust the path as needed


function Navbar() {
  const { getCartItemCount } = useContext(ShopContext);
  const itemCount = getCartItemCount();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">EasyPay</Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/Cart" className="navbar-cart">
            <ShoppingCart color="white" size={30} />
            {itemCount > 0 && (
              <span className="cart-count">{itemCount}</span>
            )}
          </Link>
          <Link to="/Login" className="navbar-link">Login</Link>
          <Link to="/Signup" className="navbar-link">Create Account</Link>
        </div>
      </div>
      <div className={`navbar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="navbar-links">
          <Link to="/Cart" className="navbar-cart">
            <ShoppingCart color="white" size={30} />
            {itemCount > 0 && (
              <span className="cart-count">{itemCount}</span>
            )}
          </Link>
          <Link to="/Login" className="navbar-link">Login</Link>
          <Link to="/Signup" className="navbar-link">Create Account</Link>
          <Link to="/"className="navbar-link">Home</Link>
          <Link to="/products"className="navbar-link">Products</Link>
        </div>
      </div>
    </nav>
  );
}



//     <div className="navbar">
//       <div className="Links">
//         <div className="Easy">
//           <Link to="/">EasyPay</Link>
//         </div>
//         <div className="ca">
//           <Link to="/Cart" className="cart-link">
//             <div className="cart-icon-container">
//               <ShoppingCart color="white" size={50} />
//               {itemCount > 0 && (
//                 <div className="cart-count">
//                   {itemCount}
//                 </div>
//               )}
//             </div>
//           </Link>
//         </div>
//         <div className="log">
//           <Link to="/Login">Login</Link>
//         </div>
//         <div className="sig">
//           <Link to="/Signup">Create Account</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Navbar;
