import React, {useState} from "react";
import CartEntry from "../cartentry/CartEntry";
import {connect} from "react-redux"; 
import Loader from "../loader/Loader";
import {withRouter} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./style.css";

function Cart({cart = [], totalQuantity = 0, totalPrice =0, history}) {
   
    const [isLoading, setIsLoading] = useState('true');

    const mapCartEntries = cart.map((cartEntry, index)=>{
       
        return (<CartEntry key={index} entryData={cartEntry}/>)
    });

    const handleProceedToHome = () => {
        history.push(ROUTES.HOME_PAGE)
    }

    setTimeout(function(){
        setIsLoading(false);
    }, 3000)

    if(isLoading) {
        return (
            <Loader/>
        );
    }

    
    
    return (
        <div className="cart-page-section">
            <div className="cart-section-left">
                <div className="cart-offer">
                    <p><strong>Order Confirmation</strong></p>
                     
                </div>
                <div className="cart-items-tag">
                    <p>My Shopping Bag({totalQuantity} items)</p>
                    <p>Total:Rs. {totalPrice}</p>
                </div>
                {/* Display Cart Entry */}
                {mapCartEntries}
                
            </div>
            {/* Cart total price and discount section */}
            <div className="cart-section-right">
                <div className="cart-total-section">
                    
                    <div className="cart-total-price">
                        <div className="price-row">
                            <p>Total MRP</p>
                            <p>Rs. {totalPrice}</p>
                        </div>
                        <div className="price-row">
                            <p>Discount on MRP</p>
                            <p style={{color:"red"}}>-Rs.750</p>
                        </div>
                        <div className="price-row apply-coupon">
                            <p>Coupon Discount</p>
                            <p>Apply Coupon</p>
                        </div>
                        <div className="price-row">
                            <p>DELIVERY FEES</p>
                            <p>RS.50</p>
                        </div>
                        <div className="price-row final-price">
                            <p><strong>Total Amount</strong></p>
                            <p><strong>Rs. {totalPrice}</strong></p>
                        </div>
                        <div className="order-place-btn-section">
                        <button className="place-order-btn" onClick={handleProceedToHome}>
                            Proceed to Home
                        </button>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer.cart,
    totalQuantity:state.cartReducer.totalQuantity,
    totalPrice:state.cartReducer.totalPrice,
    userUid: state.cartReducer.userUid,
    cartid:state.cartReducer.cartid,
});
export default withRouter(connect(mapStateToProps)(Cart));