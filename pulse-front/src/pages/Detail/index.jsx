import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";
const Detail = () => {
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  async function GetFetch(id) {
    try {
      await fetch("http://localhost:3100/menus/" + id)
        .then((res) => res.json())
        .then((data) => setDetail(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch(id);
  }, []);
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <section id="detail">
        <div className="detail_container">
          <div className="detail_content">
            <div className="detail_title">
              <i class="fa-solid fa-cannabis"></i>
              <div className="detail_title_content">
                <div className="line"></div>
                <h2>Detail</h2>
                <div className="line"></div>
              </div>
            </div>
            <div className="detail_cards">
              <div className="detail_card">
                <h4>{detail.name}</h4>
                <p>
                  with wild mushrooms and asparagus <span>${detail.price}</span>
                </p>
                {wishlist.some((item) => item._id === detail._id) ? (
                  <i
                    className="fa-solid fa-heart red "
                    onClick={() => handleWishlist(detail)}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-heart"
                    onClick={() => handleWishlist(detail)}
                  ></i>
                )}
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={() => addBasket(detail)}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
