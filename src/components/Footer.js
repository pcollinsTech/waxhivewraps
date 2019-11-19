import React from "react";
import { Link } from "gatsby";

import logo from "../assets/images/logo.png";

const Footer = () => (
  <footer id="footer">
    <div className="row inner">
      <div className="container footer_container">
        <div className="col-md-3 footer_item text-left">
          <h5>WaxHiveWraps</h5>
          <p className="mt-2">
            Lorem ipsum <br />
            Thy
            <br />
            Denmark
          </p>
          <div className="contact_links mt-3">
            <a href="tel:+4522437060">
              <h5>+4522437060</h5>
            </a>
            <a href="mailto:buzzin@waxhivewraps.com" className="my-5">
              <h5>buzzin@waxhivewraps.com</h5>
            </a>
          </div>
        </div>
        <div className="col-md-6 footer_item">
          <h5>Subscribe to our newsletter</h5>
          <form className="form-inline mt-2">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <button type="submit">Subscribe</button>
          </form>
          <p>
            In accordance with our GDPR obligations we seek your consent to receive our (funny, clever, witty) newsletters. You may withdraw your
            consent at any time in the future. You can view our privacy policy <Link to="/privacy-policy"> here.</Link>
          </p>
          <ul className="copyright text-center mt-5">
            <li>&copy; Wax Hive Wraps 2019</li>
          </ul>
        </div>
        <div className="col-md-3 footer_item ">
          <h5>Follow us</h5>
          <ul className="container icons mt-2">
            <li>
              <a href="https://www.facebook.com/waxhivewraps/" target="__blank" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/waxhivewraps/" target="__blank" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
