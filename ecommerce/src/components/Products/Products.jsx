import { useEffect, useState, memo } from "react";
import ProductCard from "../ProductCard";
import Categories from "../Categories";
import useWindowSize from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";

const gp = [
  {
    title: "Apple iPhone 14",
    price: "Rs. 1,00,000",
  },
  {
    title: "Apple iPhone 13",
    price: "Rs. 70,000",
  },
  {
    title: "Google Pixel 7",
    price: "Rs. 50,000",
  },
  {
    title: "Nokia 1100",
    price: "Rs. 2,000",
  },
  {
    title: "Samsung Galaxy S10",
    price: "Rs. 1,00,000",
  },
  {
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000",
  },
];

// function getProductsApi(callback) {
//   setTimeout(function () {
//     console.log("api called");
//     callback(gp);
//   }, 2000);
// }

// function getProductsApi(callback) {
//   setTimeout(function () {
//     console.log("api called");
//     callback(gp);
//   }, 2000);
// }

// let p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve(gp);
//   }, 10000);
//   // reject("rejected");
// });

// function getProductsApi(callback) {
//   setTimeout(function () {
//    return(gp);
//   }, 2000);
// }

function Products() {
  // console.log("p");
  // let products = [];
  // p.then((result) => {
  //    products = result;
  // })
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  // console.log(useWindowSize());
  useEffect(function () {
    // getProductsApi(function (global) {
    //   console.log("callback called");
    //   setProducts(global);
    //   setLoading(false);
    // });
    //and does not directly return the JSON response body but instead returns a promise that resolves with a Response object
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setProducts(response);
        setLoading(false);
      });
  }, []);

  // console.log("api completed");
  if (loading) {
    return (
      <div>
        <img
          alt="loader"
          src="https://media.tenor.com/XasjKGMk_wAAAAAM/load-loading.gif"
        />
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/cart">Cart</Link>
        {products.map(function (item) {
          return <ProductCard key={item.title} product={item} />;
        })}
        <Categories />
      </div>
    );
  }
}

export default memo(Products);
// Products is called
// state variable is created
// state variable products= []
// setTimeout is registered
// api completed is called
// JSX is rendered with products = []
// function inside setTimeout is called
// api called is printed
// callback is called
// callback called is printed
// value of state variable is set with gp

// state variable causes a rerender
// state variable products = value of gp is already set
// setTimeout is registered
// api completed is called
// JSX is rendered with products = gp
// function inside setTimeout is called
// api called is printed
// callback is called
// callback called is printed
// value of state variable is set with gp again
// products = gp

// it would cause a rerender again
// state variable products = value of gp is already set
// setTimeout is registered
//// api completed is called
// JSX is rendered with products = gp
// function inside setTimeout is called
// api called is printed
// callback is called
// callback called is printed
// value of state variable is set with gp again
// useState is smart and it says
// last value of products === current value of products
// so state variable doesn't call the rerender

// so the third cycle is the reassurance cycle to confirm that there is no change in thev value of state variable

// passing a parameter in react to a component is known as props
//       <ProductCard title={} name={} />

// map in javascript

//
// map will return an array which has been modified in the callback
// but it doesn't alter the orignal array

// var a = [1, 2, 3];

// var x = a.map(function (item, index) {
//   return item * 2;
// });

//

// when products is set
// call the function Products again at that time
// and use the set value of products in the function

// Hooks

// Hooks is a concept that was introduced with the functional components
// taking prominence
// Was to provide state in functional components

// What are theses hooks
// Hooks are helper functions in react
// there are two types of hooks
// Custom hooks
// Default hooks

// Hooks should be used at top of the component
// Hooks should not be used in a conditional statement or a loop
// Hooks should not be used to render a UI
// Hooks that are custom made should start with a useName

// State variable
// 1) It is created using a hook named as useState hook
// 2) It is not set like a normal variable but a helper function which is a setter function is used to set the state
// 3) Whenever there is a change in the value of a state variable it leads to the rerender of the component
// 4) The value set for a state variable is returned even after the rerender;

// useState(default value) it returns an array [stateVariable, setterfn];
// setterfn(value);
// rerender of the component in which this state is set would be done

// total three times these consoles would be called;

// useEffect hook is used to provide you with a callback that could be called at different times in the lifecycle of a component
// based on the value of a dependency array
// useEffect(function(){}, [])

//  Virtual DOM

// Virtual DOM is nothing but a copy of the real dom that is maintained by react
// How is this virtual dom created

// If there is some change in the DOM
// JS what it does it rerender the whole dom
// But react says I will keep a copy of the dom and I will then make change to the exact place in the dom which has changed
// because we have the copy we have exactly the place where we can point in the case of change
// react keeps two copies of Virtual dom

// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <ul id="ul" className="list">
//         <li id="item-1"><a>Item 1</a></li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         {show && <li>Item 4</li>}
//       </ul>
//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))

// let currentVdom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }
// let newVDom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 4'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// 2 vdom
// currentVDom -> Exact representation of browser DOM.
// newVDom -> Updated representation

// diff algo
// diff(currentVDom, newVDom)
// difference that is there
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 4'
//               ]
//             }
//           }

// update_dom_from_dif

//document.createElement(li)
// document.createChild();
// document.appendCHild();

// oldDom = [
//   <ProductCard title="Title 1" />,
//   <ProductCard title="Title 2" />,
//   <ProductCard title="Title 3" />
// ]

// newDom = [
//   <ProductCard  title="Title 1" />,
//   <ProductCard  title="Title 4" />,
//   <ProductCard  title="Title 2" />,
//   <ProductCard  title="Title 3" />
// ]

// diff(oldDom, newDom);

// second card title changed to 4
// third card title changed to 2
// fourth card with title 3 to be added to the dom

// oldDom = [
//   <ProductCard key={t-1} title="Title 1" />,
//   <ProductCard key={t-2} title="Title 2" />,
//   <ProductCard key={t-3} title="Title 3" />
// ]

// newDom = [
//   <ProductCard  key={t-1} title="Title 1" />,
//   <ProductCard  key={t-4} title="Title 4" />,
//   <ProductCard  key={t-2} title="Title 2" />,
//   <ProductCard  key={t-3} title="Title 3" />
// ]

// diff(oldDom, newDom);

// key t-4 added between t-2 and t-1

// it is said that your key should not be index

// you should not use index in order to give a key

// oldDom = [
//   <ProductCard key={1} title="Title 1" />,
//   <ProductCard key={2} title="Title 2" />,
//   <ProductCard key={3} title="Title 3" />
// ]

// newDom = [
//   <ProductCard  key={1} title="Title 1" />,
//   <ProductCard  key={2} title="Title 4" />,
//   <ProductCard  key={3} title="Title 2" />,
//   <ProductCard  key={4} title="Title 3" />
// ]

// what is this AJAX

// Asynchronous javascript and xml

// AJAX is used in order to provide a very good User experience
// AJAX
// I will provide Asynchronous behaviour to js using the concept of AJAX
// backend sends the data using an API
// to do an api call get the data
// wait for the data
// use the data

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       document.getElementById("demo").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "ajax_info.txt", true);
//   xhttp.send();
// }

// XMLHttpRequest

// xhttp.open would open a connection b/w server and client
// xhttp.send send the req from the client to the server
// you have the concept of callback which would be used in order to get the info that data is ready and u could use it

// readyState and status
// readyState 0-4
// 0
// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// Promises and why do we need Promises

// Promise in javascript means that the data once recieved by the client
// the client would be able to call a function
//
//let promise = new Promise(function(resolve, reject) {
// executor (the producing code, "singer")
// });

// let arr = new Array(10);

// function(resolve, reject) {
//   executor (the producing code, "singer")
//  result = sendEmailtouser(emailId) && albumLaunched();
// if (result === false) {
//  reject()
//} else {
//  resolve("email sent");
//}
// }

// the promise can either be resolved or rejected

// Resolved means an positive outcome
// email is sent successfully this would call a resolved statement
// email could bounce this is a reject statement
//
