import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../auth/firebase";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "../css/SideDrawer.css";
import { useStateValue } from "../StateProvider";

function SideDrawer(props) {
  const [{ basket, user }] = useStateValue();

  function handleAuthentication() {
    if (user) {
      auth.signOut();
    }
  }

  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
}

export default SideDrawer;
