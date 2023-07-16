import React   from 'react'
import {PRODUCTS}  from "../../products";
import {CartItem} from "./cart-item"
import { useContext } from "react";
import { ShopContext } from '../../Context/Shop-Context';
import "./cart.css";
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
  const {cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product}/>
          }
        })}
      </div>
        {totalAmount > 0 ?
      <div className="checkout">
        <p> Subtotal : ${totalAmount}</p>
        <button id='con' onClick={() => {navigate("/shop")}}>Continue Shopping</button>
      </div>
       : <div className='go'><h1>Your Cart is Empty !</h1>
        <button className='con' onClick={() => {navigate("/shop")}}> Go Shop</button> </div>}
    </div>
  )
}
