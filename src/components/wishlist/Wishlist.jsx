import React from "react";
import CartEntry from "../cartentry/CartEntry";
import withAuthorization from "../Session/withAuthorization";
import "./style.css";

function WishList() {
    const cartEntry = {
        price: 22.3,
        product: {category: "men's clothing",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        id: 2,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        price: 22.3,
        title: "Mens Casual Premium Slim Fit T-Shirts ",},
        productId: "2",
        quantity: 1,
    }
    return (
        <div className="wishlist-page-section">
            <div className="wishlist-section-left">
                
                <CartEntry entryData={cartEntry}/>
                <CartEntry entryData={cartEntry}/>
               
            </div>
            
        </div>
    );
}

export default withAuthorization(WishList);