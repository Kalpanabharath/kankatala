import React, { useState } from "react";
import logo from "../../assets/logo.png";
import bunbuttion from "../../assets/bunbuttion.png";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuVisiblity, setMobileMenuVisiblity] = useState(false);

  const changeMobileMenuVisiblity = () => {
    setMobileMenuVisiblity((prev) => !prev);
  };

  return (
    <div className="sticky">
      <div className="Navbar">
        <ul
          className={mobileMenuVisiblity ? "Mobilevisibleone" : "displaynone"}
        >
          <li>Categories</li>
          <li>Products</li>
          <li>Occasion</li>
          <li>Family</li>
          <li>Voice</li>
        </ul>
        <img src={logo} alt="logoimage" className="logoimage" />
        <ul
          className={mobileMenuVisiblity ? "Mobilevisibletwo" : "displaynone"}
        >
          <li>Services</li>
          <li>Stores</li>
          <li>Blogs</li>
          <li>Instagram</li>
          <li>Values</li>
        </ul>
        <img
          src={bunbuttion}
          alt="bunbuttion"
          className="bunbuttion"
          onClick={changeMobileMenuVisiblity}
        />
      </div>
    </div>
  );
};

export default Navbar;
