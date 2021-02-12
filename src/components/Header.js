import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { useStateValue } from "../StateProvider";
// import { auth } from "../auth/firebase";
// import { useMediaQuery } from "react-responsive";
// import { fallDown as Menu } from "react-burger-menu";
// import "../css/Header.css";
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(true);
  }

  function backdropClickHandler() {
    setIsOpen(false);
  }

  let backdrop;
  if (isOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div>
      <Toolbar drawerClickHandler={handleClick} />
      <SideDrawer show={isOpen} />
      {backdrop}
    </div>
  );
}

export default Header;

// <Menu>
//   <div className="header-search menu-item">
//     <input className="header-searchInput" type="text" />
//     <SearchIcon className="header-searchIcon" />
//   </div>
//   <Link className="menu-item" to={!user && "/login"}>
//     <div onClick={handleAuthentication} className="header-option">
//       <span className="header-option-lineOne">
//         Hello, {user ? user.email : "Guest"}
//       </span>
//       <span className="header-option-lineTwo">
//         {user ? "Sign Out" : "Sign In"}
//       </span>
//     </div>
//   </Link>
//   <Link to="/orders" className="menu-item">
//     <div className="header-option">
//       <span className="header-option-lineOne">Returns</span>
//       <span className="header-option-lineTwo">Orders</span>
//     </div>
//   </Link>
//   <Link to="/checkout" className="menu-item">
//     <div className="header-optionBasket">
//       <ShoppingBasketIcon className="basket-icon" />
//       <span className="header-option-lineTwo header-basketCount">
//         {basket?.length}
//       </span>
//     </div>
//   </Link>
//   {/* <a onClick={this.showSettings} className="menu-item--small" href="">
//     Settings
//   </a> */}
// </Menu>

// <div className="header">
// <Link to="/">
//   <img
//     className="header-logo"
//     src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//     alt="Amazon Logo"
//   />
// </Link>

// <div className="header-search">
//   <input className="header-searchInput" type="text" />
//   <SearchIcon className="header-searchIcon" />
// </div>
// <div className="header-nav">
// <Link to={!user && "/login"}>
//   <div onClick={handleAuthentication} className="header-option">
//     <span className="header-option-lineOne">
//       Hello, {user ? user.email : "Guest"}
//     </span>
//     <span className="header-option-lineTwo">
//       {user ? "Sign Out" : "Sign In"}
//     </span>
//   </div>
// </Link>
// <Link to="/orders">
//   <div className="header-option">
//     <span className="header-option-lineOne">Returns</span>
//     <span className="header-option-lineTwo">Orders</span>
//   </div>
// </Link>

// <div className="header-option">
//   <span className="header-option-lineOne">Your</span>
//   <span className="header-option-lineTwo">Prime</span>
// </div>
// </div>
// <Link to="/checkout">
//   <div className="header-optionBasket">
//     <ShoppingBasketIcon className="basket-icon" />
//     <span className="header-option-lineTwo header-basketCount">
//       {basket?.length}
//     </span>
//   </div>
// </Link>
// </div>
