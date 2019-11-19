import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/cart" className="icon fa-shopping-basket">
            <i></i>
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about-us">
            About us
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/contact">
            Contact us
          </Link>
        </li>
        <li>
          <div className="container">
            <div className="row d-flex justify-content-around">
              <a href="https://www.facebook.com/waxhivewraps/" target="__blank" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
              <a href="https://www.instagram.com/waxhivewraps/" target="__blank" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </div>
          </div>
        </li>

        <li></li>
      </ul>
    </div>
    <span className="close" onClick={props.onToggleMenu}>
      Close
    </span>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Menu;
