import React from "react";
import "./style.css";

export default function Filter(){
    return (
        <div className="product-filter-section">
          <div className="product-category-filter">
          <h4 className="filter-title">Category</h4>
              <div className="filter-item"><input type="radio" name="category-filter" value="Men"/>Men</div>
              <div className="filter-item"><input type="radio" name="category-filter" value="Women"/>Women</div>
              <div className="filter-item"><input type="radio" name="category-filter" value="Electronics"/>Electronics</div>
              <div className="filter-item"><input type="radio" name="category-filter" value="Jewellery"/>Jewellery</div>
          </div>
          <div className="product-brand-filter">
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
          </div>

        </div>
    );
}