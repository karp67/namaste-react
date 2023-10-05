import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX = React element
const jsxHeading = <h1 id="heading">Namste React from JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

//React Functional Component
const HeadingComponent = () => {
  <div id="container">
    <h2>Hi from Functional Component</h2>
  </div>;
};

// //Nested Html structure

// {
//   /* <div id="parent">
//     <div id="child">
//         <h1>I'm a h1 tag</h1>
//         <h2>I'm a h2 tag</h2>
//     </div>
// </div> */
// }

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ])
// );

// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" },
// //   "Hello World from React!"
// // ); //creating an h1 tag, that's why it is coming from core react

// // console.log(heading); //objects

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root")); //using ReactDom because we are putting heading into div with root id

// root.render(parent); //rendering the parent in your browser
