import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

 export const ShopContext = createContext(null)

 const getDeaultCart = () => {
    let cart = {}
    for(let i=0; i<PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContexProvider = (props) => {
const [cartItems, setCartItems] = useState(getDeaultCart());

const getTotalAmount = () => {
  let totalAmount  = 0;
  for(const item in cartItems) {
    if(cartItems[item] > 0) {
      let iteminfo = PRODUCTS.find((product) => product.id === Number(item))
      totalAmount += cartItems[item ] * iteminfo.price
    }
  }
  return totalAmount;
};


const addToCart = (itemsId) => {
    setCartItems((prev) => ({...prev, [itemsId] : prev[itemsId] + 1}));
}

const removeFromCart = (itemsId) => {
    setCartItems((prev) => ({...prev, [itemsId] : prev[itemsId] - 1}));
}

const updateCartItem = (newAmount, itemsId) => {
  setCartItems((prev) => ({...prev, [itemsId] : newAmount }))
}
console.log(cartItems);
const contextValue = {cartItems, addToCart, removeFromCart, updateCartItem, getTotalAmount}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

  )
}
