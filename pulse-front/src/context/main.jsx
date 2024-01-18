import React from "react";
import SearchProvider from "./SearchContext";
import WishlistProvider from "./WishlistContext";
import BasketProvider from "./BasketContext";

const MainProvider = ({ children }) => {
  return (
    <SearchProvider>
      <WishlistProvider>
        <BasketProvider>
        {children}
        </BasketProvider>
      </WishlistProvider>
    </SearchProvider>
  );
};

export default MainProvider;
