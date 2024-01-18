import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";
import { Link, NavLink } from "react-router-dom";
const MenuCards = () => {
  const [sortproperty, setSortproperty] = useState(null);
  const [data, setData] = useState([]);
  const { handleWishlist, wishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);
  async function GetFetch() {
    try {
      await fetch("http://localhost:3100/menus")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);

  function checkType(value) {
    if (typeof value === "string") {
      return value.toLocaleLowerCase();
    } else {
      return value;
    }
  }

  return (
    <>
      <nav className="sort">
        <ul>
          <li onClick={() => setSortproperty(null)}>
            <NavLink>Default</NavLink>
          </li>
          <li onClick={() => setSortproperty({ property: "name", asc: true })}>
            <NavLink>A-Z</NavLink>
          </li>
          <li onClick={() => setSortproperty({ property: "name", asc: false })}>
            <NavLink>Z-A</NavLink>
          </li>
          <li onClick={() => setSortproperty({ property: "price", asc: true })}>
            <NavLink>Min-Max</NavLink>
          </li>
          <li
            onClick={() => setSortproperty({ property: "price", asc: false })}
          >
            <NavLink>Max-Min</NavLink>
          </li>
        </ul>
      </nav>
      <div className="menu_cards">
        {[...data] &&
          [...data]
            .sort((a, b) => {
              if (sortproperty && sortproperty.asc) {
                return checkType(a[sortproperty.property]) >
                  checkType(b[sortproperty.property])
                  ? 1
                  : checkType(a[sortproperty.property]) <
                    checkType(b[sortproperty.property])
                  ? -1
                  : 0;
              } else if (sortproperty && sortproperty.asc === false) {
                return checkType(a[sortproperty.property]) <
                  checkType(b[sortproperty.property])
                  ? 1
                  : checkType(a[sortproperty.property]) >
                    checkType(b[sortproperty.property])
                  ? -1
                  : 0;
              } else {
                return 0;
              }
            })
            .map((x) => (
              <div className="menu_card">
                <h4>{x.name}</h4>
                <p>
                  with wild mushrooms and asparagus <span>${x.price}</span>
                </p>
                {wishlist.some((item) =>item._id === x._id)
                      ?  <i
                      className="fa-solid fa-heart red " onClick={() => handleWishlist(x)}
                    ></i>
                      :  <i
                      className="fa-solid fa-heart" onClick={() => handleWishlist(x)}
                    ></i>
                  }
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={() => addBasket(x)}
                ></i>
               <Link to={"/detail/"+x._id} > <i class="fa-solid fa-eye"></i></Link>
              </div>
            ))}
      </div>
    </>
  );
};

export default MenuCards;
