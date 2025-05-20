import "./styles.css";
import React from 'react';
// export var d = 20;
// export var a = 30;
// export function ab() {}
// export {d:20, a:30, ab:function};
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";

import ProductsPage from "./pages/ProductsPage";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import CartContext from "./context/CartContext";

export default function App() {
  let [cart, setCart] = useState({});
  function addToCart(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0,
      };
    }
    newCart[product.id].quantity = newCart[product.id].quantity + 1;
    setCart(newCart);
  }
  function removeFromCart(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={ProductsPage} />
          <Route exact={true} path="/cart" component={CartPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </CartContext.Provider>
  );
}

// Provider in context take a value which is the context object itself;
// html returned from a react component is know as jsx
// Javascript xml notation

// JSX - Html written inside js is know as JSX

//var a =  document.createELmenet("div")
// var b= document.createELmenet("h1")
//var c=  document.createELmenet("h2")

//// react component is a javascript function
// which returns jsx
//Components are called in JSX syntax
// <App />
// React components name is always stated in a capital letter

// when you are using imports
// import from "./components/Products"

// Products.js
// Products.jsx
// Go inside folder Products then it will search for a index.js inside this folder

// Global state management system
// providing global state using a parent component to all children
// access the global state using all chilndren/components
// Manipulate the global state from all the components

// Context api
// I would provide you with a Provider
// Provider would have access to the global state
// The global state would be created using something known as Context
// Hook would be used to access the Context  useContext

// react-router-dom
// If else to be done
// If this route is there do this else do this
// <switch>
// <route >
// <browserrouter>

//  Redux

// You can subscribe to a particular key with usage of Redux
// Action - Any event that happens (on click)
// Dispatch - is the way to inform the store about the action and the state that needs to be changed and the value of it
// Store - A global State and way to edit this global state
// Reducer - A function used to edit the global state
// State - The global state that we are using in store
// Provider - Is the psuedo parent used to provide the global state(Store)

// Add to cart is clicked

// An action would be triggered in the component add to cart
// From add to cart a dispatch would happen
// to the store suggesting that you need to increment the value of this particular key with this much value
// Reducer would catch this dispatch and get the value and the particular key
// Change the state that needs to be changed and update back
