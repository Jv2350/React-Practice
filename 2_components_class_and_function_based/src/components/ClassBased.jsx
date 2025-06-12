// class components implementation
import React, { Component } from "react";

/**
 * class-based component example
 *
 * key points:
 * - traditional implementation method
 * - has lifecycle methods
 * - handles complex component logic
 * - manages local state
 *
 * notes:
 * 1. original react component style
 * 2. extends react.component
 * 3. requires render method
 * 4. supports lifecycle methods
 */
export default class ClassBased extends Component {
  /**
   * render method
   * - returns jsx
   * - requires single parent element
   * - can return null
   */
  render() {
    return <div>ClassBased</div>;
  }
}
