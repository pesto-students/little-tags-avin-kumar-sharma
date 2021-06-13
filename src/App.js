import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"; 
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import ProductList from "./components/productList/ProductList";
import ProductDetail from "./components/productDetail/ProductDetail";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist"
import Order from "./components/order/Order"
import OrderHistory from "./components/orderhistory/OrderHistory";
import * as ROUTES from "./constants/routes"
import  withAuthentication from "./components/Session/withAuthentication";
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
      <Switch>
      <Route exact path={ROUTES.ORDER_HISTORY_PAGE_PARAM}>
        <OrderHistory/>
      </Route>
      <Route exact path={ROUTES.CATEGORIES_PAGE_PARAM}  component={ProductList}>
        </Route>
      <Route exact path={ROUTES.ORDER_CONFIRMATION}>
          <Order/>
        </Route>
      <Route exact path={ROUTES.WISHLIST_PAGE}>
          <Wishlist/>
        </Route>
        <Route exact path={ROUTES.CART_PAGE}>
          <Cart/>
        </Route>
        
      <Route exact path={ROUTES.PRODUCT_DETAIL_PAGE_WITH_PARAM} component={ProductDetail}>
        </Route>
        <Route exact path={ROUTES.PRODUCT_LIST_PAGE}>
          <ProductList/>
        </Route>
        <Route path={ROUTES.HOME_PAGE}>
          <Home/>
        </Route>
      </Switch>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default withAuthentication(App);
