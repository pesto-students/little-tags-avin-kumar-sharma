import React from "react";
import CartEntry from "../cartentry/CartEntry";
import withAuthorization from "../Session/withAuthorization";
import "./style.css";

function WishList() {
    return (
        <div className="wishlist-page-section">
            <div className="wishlist-section-left">
                
                <CartEntry />
                <CartEntry />
                <CartEntry />
                <CartEntry />
                <CartEntry />
                <CartEntry />
                <CartEntry />
                <CartEntry />
            </div>
            
        </div>
    );
}

export default withAuthorization(WishList);