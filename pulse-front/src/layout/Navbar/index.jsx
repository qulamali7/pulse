import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="header_container">
            <div className="header_area">
                <div className="header_logo">
                    <Link to={"/"}>Pulse<span>.</span></Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/add"}>Add</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/basket"}>Basket</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/wishlist"}>Wishlist</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="header_call">
                    <p>Reservations<i class="fa-solid fa-phone"></i><span>652-345 3222 11</span></p>
                </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
