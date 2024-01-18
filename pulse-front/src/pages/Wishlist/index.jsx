import React, { useContext } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <section id="wishlist">
        <div className="wishlist_container">
          <div className="wishlist_content">
            <div className="wishlist_title">
              <i class="fa-solid fa-cannabis"></i>
              <div className="wishlist_title_content">
                <div className="line"></div>
                <h2>Wishlist</h2>
                <div className="line"></div>
              </div>
            </div>
            <div className="wishlist_cards">
              {wishlist &&
                wishlist.map((x) => (
                  <div className="wishlist_card">
                    <h4>{x.name}</h4>
                    <p>
                      with wild mushrooms and asparagus <span>${x.price}</span>
                    </p>
                    {wishlist.some((item) => item._id === x._id) ? (
                      <i
                        className="fa-solid fa-heart red "
                        onClick={() => handleWishlist(x)}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-heart"
                        onClick={() => handleWishlist(x)}
                      ></i>
                    )}
                    <i
                      className="fa-solid fa-cart-shopping"
                      onClick={() => addBasket(x)}
                    ></i>
                    <Link to={"/detail/"+x._id} > <i class="fa-solid fa-eye"></i></Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
