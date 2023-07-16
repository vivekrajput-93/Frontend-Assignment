import React from "react";
import {PRODUCTS} from "../../products"
import { Product} from "../shop/product"
import "./shop.css"
import Nav from "../../components/navbar.jsx";

export const Shop = () => {
  return (
    <>
    <Nav />
    <div className="shop">
      <div className="shopTitle">
        <h1><span>snap</span> Shop</h1>
      </div>
      <div className="products">{PRODUCTS.map((product) => (
        <Product data={product}/>
      ))}</div>
    </div>
    </>
  );
};
