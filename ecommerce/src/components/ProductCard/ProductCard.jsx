import "./ProductCard.scss";
import React from 'react';
import ReduxAddToCart from "../ReduxAddToCart";
import Rating from "../Rating";
export default function ProductCard({ product }) {
  // console.log("PC", product.id);
  return (
    <div className="card">
      <div>{product.title}</div>
      <div>{product.price.value}</div>
      <Rating rating={product.rating.value} maxRating={5} size={1.2} />
      <ReduxAddToCart product={product} />
    </div>
  );
}

// ProductCard is a child component of app and app is a child of index
// this is known as unidirection flow in react

// function add(a, b) {return a+b};
// {}
// whatever you write in this curly braces in jsx is considered as js
//

// Add to cart functionality
// I would first create one component
// Add to cart component
// Button add to cart
// one div and two more buttons
// addToCart function
// remove from cart function
// Array of objects
// or
// Object of objects

//[{
//   "id":"1",
//   "count": 1
// },{
//   "id":"2",
//   "count": 1
// },{
//   "id":"3",
//   "count": 1
// },{
//   "id":"4",
//   "count": 1
// }]
// {1:{
//   "id":"1",
//   "count": 1
// },
// 2: {  "id":"2",
// "count": 1
// },
// 3: {  "id":"3",
// "count": 1
// },
// 4:{  "id":"4",
// "count": 1
// }
// }

// cart[1]
