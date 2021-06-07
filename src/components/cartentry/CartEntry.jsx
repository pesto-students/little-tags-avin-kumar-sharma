import React from "react";
import {connect} from "react-redux"
import  {removeProductFromCart} from "../../actions/actions";

function CartEntry({entryData , removeProductFromCart = ()=>{}}){
    
   

    const handleRemoveProductFromCart = (productId, product) => {
        if(productId) {
            removeProductFromCart(productId);
        }
    }
    if(!entryData){
        return (
            <div>
                empty
            </div>
        )
    }
    return (
        <div className="cart-left-section-entries">
             
                    <div className="cart-section-entry">
                    <div className="cart-entry-display-image">
                        <img src={entryData.product.image} alt="product"/>
                    </div>
                    <div className="cart-entry-details">
                        <p className="cart-entry-product-title">{entryData.product.title}</p>
                        <p className="cart-entry-product-description">{entryData.product.category}</p>
                        <p className="cart-entry-product-price">Price: Rs. {entryData.product.price}</p>
                        {/* <p className="size-qty"><span>SIZE:42</span></p> */}
                        <p className="size-qty"> <span>Qty:{entryData.quantity}</span></p>
                       
                    </div>
                    </div>
                    <div className="cart-entry-section-btn">
                        <button className="cart-entry-remove-btn" onClick={()=>handleRemoveProductFromCart(entryData.productId, entryData.product)}>REMOVE</button>
                    </div>
                </div>
    )
}


const mapDispatchToProps = { removeProductFromCart };
export default connect(null, mapDispatchToProps)(CartEntry);