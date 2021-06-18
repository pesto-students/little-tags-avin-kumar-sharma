import React,{useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchOrderHistory} from "../../actions/actions";
import {withRouter} from "react-router-dom";
import firebase from "firebase/app";
import Loader from "../loader/Loader";
import Accordion from './Accordion';
import EmptySection from "../emptysection/EmptySection";
import "./style.css"

function OrderHistory({match, fetchOrderHistory = ()=>{}, ordersList = []}){
const [orderHistoryObject, setOrderHistoryObject] = useState([]);
const [isLoading, setIsLoading] = useState('true');
    
useEffect(()=>{
if(match.params.id){
firebase.database()
.ref(`/orders/`)
.orderByChild("userUid")
.equalTo(match.params.id)
.once('value')
.then((snapshot)=>{
setOrderHistoryObject(snapshot.val())
})
}
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

useEffect(()=>{
const orderHistoryArray = [];
if(orderHistoryObject){
// eslint-disable-next-line no-unused-vars
for(const [key,value] of Object.entries(orderHistoryObject)){
orderHistoryArray.push(value)
}
}
fetchOrderHistory(orderHistoryArray);
setIsLoading(false)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [orderHistoryObject])

const mapOrderHistoryItems = ordersList.map((order, index)=>(
 <Accordion order={order} content={"hello"} key={index}/>
))

if(isLoading){
    return (<Loader/>)
}

return (
<div className="order-history-section">
    { ordersList.length === 0 ? <EmptySection/> : mapOrderHistoryItems}
</div>
)
}

const mapStateToProps = (state) => {
return {
ordersList: state.orderHistoryReducer.ordersList,
}

};

const mapDispatchToProps = {fetchOrderHistory}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderHistory));