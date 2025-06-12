import React from "react";

/**
 * Method 1: Arrow Function Component
 * - Modern and clean syntax
 * - Commonly used in contemporary React applications
 * - Useful for simple components
 * - Uses arrow function expression
 */
const FunctionBased1 = () => {
  return <div>FunctionBased</div>;
};

// export default FunctionBased1;

// --------------------------------------------------------

/**
 * Method 2: Traditional Function Declaration
 * - Classic JavaScript function syntax
 * - Hoisted (can be used before declaration)
 * - Good for when you need function hoisting
 * - More familiar to developers coming from traditional JavaScript
 */
function FunctionBase2() {
  return <div>FunctionBased</div>;
}

// export default FunctionBased

// ----------------------------------------------------------

/**
 * Method 3: Direct Export with Function Declaration
 * - Combines export with function declaration
 * - Cleaner when you only have one component per file
 * - Explicitly shows this is the main component
 * - Common in create-react-app and other React templates
 */
export default function FunctionBased3() {
  return <div>FunctionBased</div>;
}

/**
 * Note: All three methods are valid ways to create functional components.
 * Choose based on:
 * 1. Team conventions
 * 2. Project requirements
 * 3. Personal preference
 * 4. Code organization needs
 */
