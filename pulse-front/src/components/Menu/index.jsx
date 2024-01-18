import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import MenuCards from "../MenuCards";
const Menu = () => {
  return (
    <>
      <section id="menu">
        <div className="menu_container">
          <div className="menu_content">
            <div className="menu_title">
              <i class="fa-solid fa-cannabis"></i>
              <div className="menu_title_content">
                <div className="line"></div>
                <h2>Our Menu</h2>
                <div className="line"></div>
              </div>
            </div>
            <MenuCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
