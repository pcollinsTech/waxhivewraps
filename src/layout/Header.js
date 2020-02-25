import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "../assets/images/logo.png";
import ShopContext from "../context/shop/shopContext";

const Header = props => {
  const shopContext = useContext(ShopContext);

  const { cartList } = shopContext;

  return (
    <header id="header" className="alt" style={{ marginTop: "20px" }}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo white" align="left" />
      </Link>
      <nav>
        <span className="menu-link cart-link" onClick={props.onToggleCart} style={{ textDecoration: 0 }}>
          <i style={{ color: "white", fontSize: "30px" }} className="icon  fa-shopping-basket"></i>
          <span className="cart_quantity">{cartList.length}</span>
        </span>
        <span className="menu-link" onClick={props.onToggleMenu} style={{ textDecoration: 0 }}>
          <i style={{ color: "white", fontSize: "30px" }} className="icon  fa-bars"></i>
        </span>
      </nav>
    </header>
  );
};

Header.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Header;
