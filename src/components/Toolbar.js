import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../auth/firebase";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DrawerToggleButton from "./DrawerToggleButton";
import "../css/Toolbar.css";

function Toolbar(props) {
  const [{ basket, user }] = useStateValue();

  function handleAuthentication() {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div>
          <Link to="/">
            <img
              className="toolbar__logo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </Link>
        </div>
        <div className="header-search">
          <input className="header-searchInput" type="text" />
          <SearchIcon className="header-searchIcon" />
        </div>
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header-option">
                  <span className="header-option-lineOne">
                    Hello, {user ? user.email : "Guest"}
                  </span>
                  <span className="header-option-lineTwo">
                    {user ? "Sign Out" : "Sign In"}
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/orders">
                <div className="header-option">
                  <span className="header-option-lineOne">Returns</span>
                  <span className="header-option-lineTwo">Orders</span>
                </div>
              </Link>
            </li>
            <li>
              <div className="header-option">
                <span className="header-option-lineOne">Your</span>
                <span className="header-option-lineTwo">Prime</span>
              </div>
            </li>
            <li>
              <Link to="/checkout">
                <div className="header-optionBasket">
                  <ShoppingBasketIcon className="basket-icon" />
                  <span className="header-option-lineTwo header-basketCount">
                    {basket?.length}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
