import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./style.css";

export default function Filter(){
    
    return (
        <div className="product-filter-section">
          <div className="product-category-filter">
          <h4 className="filter-title">Filters</h4>
              <div className="filter-title"><Link to={`${ROUTES.CATEGORIES_PAGE}/mens`}>Mens</Link></div>
              <div className="filter-title"><Link to={`${ROUTES.CATEGORIES_PAGE}/womens`}>Womens</Link></div>
              <div className="filter-title"><Link to={`${ROUTES.CATEGORIES_PAGE}/electronics`}>Electronics</Link></div>
              <div className="filter-title"><Link to={`${ROUTES.CATEGORIES_PAGE}/jewelery`}>Jewellery</Link></div>
              <div className="filter-title"><Link to={ROUTES.PRODUCT_LIST_PAGE}>All</Link></div>
          </div>
          {/* <div className="product-brand-filter">
          <h4 className="filter-title">Brands</h4>
              <div className="filter-item"><input type="checkbox" name="brand-filter" value="Roadster"/>Roadster</div>
              <div className="filter-item"><input type="checkbox" name="brand-filter" value="Levis"/>Levis</div>
              <div className="filter-item"><input type="checkbox" name="brand-filter" value="Mast Harbour"/>Mast Harbour</div>
              <div className="filter-item"><input type="checkbox" name="brand-filter" value="Puma"/>Puma</div>
          </div>
          <div className="product-price-filter">
          <h4 className="filter-title">Price Range</h4>
              <div className="filter-item"><input type="checkbox" name="price-filter" value="500-1000"/>Rs.500 to 1000</div>
              <div className="filter-item"><input type="checkbox" name="price-filter" value="1000-1500"/>Rs.1000 to 1500</div>
              <div className="filter-item"><input type="checkbox" name="price-filter" value="1500-2000"/>Rs.1500 to 2000</div>
              <div className="filter-item"><input type="checkbox" name="price-filter" value="2000-2500"/>Rs.2000 to 2500</div>
          </div> */}

        </div>
    );
}