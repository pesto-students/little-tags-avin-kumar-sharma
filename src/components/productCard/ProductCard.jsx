import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {connect} from "react-redux";
import {loadProductDetails} from "../../actions/actions";
import "./style.css";

function ProductCard({productData = {}}) {
 

return (
<Link className="product-card" to={`${ROUTES.PRODUCT_DETAIL_PAGE}/${productData.id}`}>
    <img src={productData.image} alt="product1.jpg" />
    <div className="product-metainfo">
        <h3 className="product-brand">{productData.title}</h3>
        <h4 className="product-detail">{productData.description}</h4>
        <div className="product-price">
          <span className="price-value">Rs.{productData.price}</span>
          <span className="price-discount">(40% OFF)</span>
        </div>
    </div>
</Link>
)
}

const mapStateToProps = (state) => ({
  productList: state.productList
});

const mapDispatchToProps = { loadProductDetails };

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);