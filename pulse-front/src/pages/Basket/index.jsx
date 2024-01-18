import React, { useContext } from "react";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
const Basket = () => {
    const {basket ,removeBasket,increase,decrease} = useContext(BasketContext)
    const {handleWishlist} = useContext(WishlistContext)
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <section id="basket">
        <div className="basket_container">
          <div className="basket_content">
            <div className="basket_title">
              <i class="fa-solid fa-cannabis"></i>
              <div className="basket_title_content">
                <div className="line"></div>
                <h2>Basket</h2>
                <div className="line"></div>
              </div>
            </div>
            <div className="basket_cards">
              {basket &&
                basket.map((x) => (
                  <div className="basket_card">
                    <h4>{x.name}</h4>
                    <p>
                      with wild mushrooms and asparagus <span>${x.price}</span>
                    </p>
                    <i
                      class="fa-solid fa-trash"
                      onClick={() => removeBasket(x)}
                    ></i>
                     <Link to={"/detail/"+x._id} > <i class="fa-solid fa-eye"></i></Link>
                    <div>
                        <button onClick={() => increase(x)}>+</button>
                        <p>{x.count}</p>
                        <button onClick={() => decrease(x)}>-</button>
                    </div>
                    <p>{x.price*x.count}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
