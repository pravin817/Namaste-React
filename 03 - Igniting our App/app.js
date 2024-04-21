/**
 * Parcel - is a module bundler
 * HMR - Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING - Combining all the files into one file
 * MINIFICATION - Removing all the white spaces and comments
 * Dev and Production build
 * Super Fast build Algorithm
 * Cleaning the app
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older browsers
 * Add polyfills
 * Build the app in HTTPS development
 * PORT Number
 * Tree shaking - remove unwanted code (suppose we are using lodash and we are using only one function from lodash then it will remove all other functions)
 * Consistent Hash Algorithm
 * Zero Configuration
 */

import React from "react";
import ReactDOM from "react-dom/client";

//  Create the heading
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title1",
//     key: "h1",
//   },
//   "Heading 1"
// );

// React.createElement => Object => HTML(DOM)

//  Create the heading
// const heading = React.createElement(
//   "h2",
//   {
//     id: "title2",
//     key: "h2",
//   },
//   "Heading 2"
// );

// {
/* <div class="header">
  <h1>Namaste React App</h1>
  <ul>
    <li>About Us</li>
    <li>Support</li>
    <li>Home</li>
  </ul>
</div>; */
// }

// const container = React.createElement("div", { id: "container" }, [
//   React.createElement(
//     "h1",
//     {
//       id: "title1",
//       class: "header",
//       key: "h1",
//     },
//     "Namaste React App"
//   ),
//   React.createElement(
//     "ul",
//     {
//       id: "list",
//       key: "ul",
//     },
//     [
//       React.createElement("li", { id: "item1", key: "li1" }, "About Us"),
//       React.createElement("li", { id: "item2", key: "li2" }, "Support"),
//       React.createElement("li", { id: "item3", key: "li3" }, "Home"),
//     ]
//   ),
// ]);

// console.log(heading1); //Objects
// get the access to the root

// JSX

// JSX => React.createElement => Object => HTML(DOM)

// The below code is called as React Element

const Title = () => (
  <h1 id="title" className="name">
    Namaste React
  </h1>
);

// This is the JS common JS variable
const reactElement = <p>This is React Element</p>;

// Components
// - Class Based Component  - OLD way of writing the component
// - Functional Component - New way of writing the component

// Functional Components

const HeaderComponent = () => {
  return <h1>Namaste React Functional Components </h1>;
};

const AnotherComponent = () => {
  return (
    <div>
      {reactElement}
      <Title />
      {/* {Title()}  // Normal JS Function  */}

      {/* {} // Write any piece of JS code  */}
      {console.log("Hello World")}

      {222 + 3}

      {console.log("We can write any piece of JS code")}

      <h2>This is the heading 1</h2>
      <h2>This is the heading 2</h2>
    </div>
  );
};

const AnotherComponent2 = () => (
  <div>
    <h1>This is the heading 1</h1>
    <h2>This is the heading 2</h2>
  </div>
);

// The above both the components AnotherComponent and AnotherComponent2 are same

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing the react element into the root
root.render(<AnotherComponent />);

/*
  Note :
        The babel comes with the parcel.
        The name of the components should start with the capital letter. (Not manditary This is good practice)
        The functional components are just normal function.


        When we use the component inside the component then it is called as the component composition.
*/
