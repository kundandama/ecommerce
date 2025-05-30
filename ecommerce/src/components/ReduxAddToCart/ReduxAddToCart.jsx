import { useDispatch, useSelector } from "react-redux";
import React from 'react';
function ReduxAddToCart({ product }) {
  let dispatch = useDispatch();

  let quantity = useSelector((state) => {
    return state.cart.items[product.id]?.quantity || 0;
  });

  function increment() {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }
  function decrement() {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  }

  // let item = useSelector((state) => {
  //   return state.items;
  // });

  // let quantity = items[product.id]?.quantity ? items[product.id].quantity : 0;
  if (quantity > 0) {
    return (
      <div>
        <button onClick={decrement}>-</button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={increment}>Add TO Cart</button>
      </div>
    );
  }
}

export default ReduxAddToCart;
