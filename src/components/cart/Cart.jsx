import CartEntry from "../cartentry/CartEntry";
import {FaTags} from "react-icons/fa";
import {connect} from "react-redux";
import {orderToConfirm} from "../../actions/actions"
import {emptyCart} from "../../actions/actions";
import {withRouter} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./style.css";

function Cart({cart = [], totalQuantity = 0, totalPrice =0, userUid=null, cartid=null, orderToConfirm = ()=> {}, history, emptyCart}) {
   
    const mapCartEntries = cart.map((cartEntry, index)=>{
       
        return (<CartEntry key={index} entryData={cartEntry}/>)
    });

    const handleConfirmOrder = () => {
        if(userUid !== null) {

            console.log("start order removal")
        const orderObject = {
            userUid,
            cartid: userUid ? userUid: cartid, 
            cart:[...cart], 
            totalQuantity, 
            totalPrice
        }

        orderToConfirm(orderObject);
        emptyCart();
        history.push(ROUTES.ORDER_CONFIRMATION)
     }
    }
    
    return (
        <div className="cart-page-section">
            <div className="cart-section-left">
                <div className="cart-offer">
                    <p><strong>Available Offers</strong></p>
                     <ul>
                         <li className="offer-description">10% Cashback on Slice Visa Card on a min spend of Rs 500. TCA</li>
                         <li className="offer-description">5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</li>
                     </ul>
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
                    <div className="cart-apply-coupon-section">
                        <p><FaTags/><strong>Apply Coupons</strong></p>
                        <button className="apply-coupon-btn">APPLY</button>
                    </div>
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
                    </div>
                    <div className="order-place-btn-section">
                        <button className="place-order-btn" onClick={handleConfirmOrder} disabled = { mapCartEntries.length > 0 ? false:true}>
                            PLACE ORDER
                        </button>
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

const mapDispatchToProps = {orderToConfirm, emptyCart}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));