import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartAmountItems = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartAmountItems > 0 && <>({cartAmountItems})</>}
      </button>
    </div>
  );
};
