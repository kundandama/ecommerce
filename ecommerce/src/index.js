import { createRoot } from "react-dom/client";
import store from "./stores/index.js";
import { Provider } from "react-redux";
// import { d, a } from "./App";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// console.log(d, a);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// root.appendChild()

// What is react
// Why react
// How did react become so popular
// How to start with a react project
// Basics in a project
// How does react run on your browser
// Then make the first small component
// debugger

// Components could be created and could be reused
// things would flow in one direction that is from parent to child
// It was made by developers at fb
// The developer suppport become huge
// leading to every type of component being available online
// Virtual dom - replica of the real dom it used make the react application faster than others

// M == v
// Framework and library both provide with code to enhance your experience of writing code
// it provides you with ease of developemnt
// Library says that this is the code to enhance you can use it in any way you want
/// you even don't use this I don't care
// framework says that this is the code this is the way if you have added me follow only this way

// if you want to get an element
// if u use getElementById of js  angular would not let you use all the features of angular because of this
// similar thing if you do in react it is possible

// How to start with a react project

// Earlier
// you had to learn build tools
// create boiler plate
// setup frontend infra
// then you could start

// npm/npx/yarn create-react-app <name>
// npx create-react-app ecom-fullstack

// what is a package == js function js code
// what is this npm // librarian who issues these packages to you for usage
// what is this node all the packages are aggregated at this place known as node

// npx is node package execute

// 18.2.0
// version of this package

// major.minor.patch

// some issues are fixed then you change the patch number
// 18.2.1

// some minor feature and non breaking feature is launched
// 18.3.0

// some breaking changes are pushed
// 19.0.0

// ^ suggest is that ^18.2.0

// this will automatically upgrade your package to the later minor or patch change
// but not on to the major change

// some notorious developers what they did was that
// in minor upgrade they used to push breaking changes

// webpack
// build tool
// combine your js files into one
// add them in an html and that html is served to the browser

// you need to convert all this react and packages into browser understable code

// it is js
//all the package are comibned into one file even your js files are combined into one file in
// order to get your application up and running
// webacpk combines everything together
// this concept is called as bundling

// bare minimum req for a react application
// Empty html element
// everything in react is dom manipulation

// what is react-dom
// react-dom is a package
// react is a independent package or library
// which can be used to create webapps
// native apps
// cli apps
// code is written in react in react format
// react-dom - webapp
// react-native - mobile apps
//

// for a react application to work you need an empty html element

// what is this import and export

// Named exports and default exports

// there can be multiple named exports
// but there can be only one default export

// In a named export the values are
// exported as an object

// desturcturing that is happening
// Each key is added to a indiviula variable
// App = function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// react component is a javascript function
// App()
