import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "../assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/overwrites.css";
import Header from "./Header";
import SideCart from "./SideCart";
import Menu from "./Menu";
import Footer from "./Footer";
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      isCartVisible: false,
      loading: "is-loading"
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleToggleCart = this.handleToggleCart.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    });
  }
  handleToggleCart() {
    console.log("HI HI");
    this.setState({
      isCartVisible: !this.state.isCartVisible
    });
  }
  handleToggleCartOutside() {
    this.state.isCartVisible
      ? this.setState({
          isCartVisible: !this.state.isCartVisible
        })
      : console.log("not open");
  }

  render() {
    const { children } = this.props;
    console.log(this.state.isCartVisible);
    return (
      <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? "is-menu-visible" : ""}`}>
        <Header onToggleMenu={this.handleToggleMenu} onToggleCart={this.handleToggleCart} />
        {children}
        <Footer />
        <Menu onToggleMenu={this.handleToggleMenu} />
        <OutsideClickHandler onOutsideClick={() => this.handleToggleCartOutside}>
          <div className={this.state.isCartVisible ? "is-cart-visible" : ""}>
            <SideCart onToggleCart={this.handleToggleCart} />
          </div>
        </OutsideClickHandler>
      </div>
    );
  }
}

export default Layout;
