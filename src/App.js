import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"; 
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import ProductList from "./components/productList/ProductList";
import ProductDetail from "./components/productDetail/ProductDetail";
import * as ROUTES from "./constants/routes"
import  withAuthentication from "./components/Session/withAuthentication";
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
      <Switch>
      <Route path={ROUTES.PRODUCT_DETAIL_PAGE_WITH_PARAM} component={ProductDetail}>
        </Route>
        <Route path={ROUTES.PRODUCT_LIST_PAGE}>
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
