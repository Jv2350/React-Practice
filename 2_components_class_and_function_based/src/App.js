import "./App.css";
import ClassBased from "./components/ClassBased";
import FunctionBased3 from "./components/FunctionBased";

export default function App() {
  return (
    <div className="container">
      <h1>Component Examples</h1>

      {/* class based component */}
      <div className="component-section">
        <h2>Class Based Component:</h2>
        <ClassBased />
      </div>

      {/* function based component */}
      <div className="component-section">
        <h2>Function Based Component:</h2>
        <FunctionBased3 />
      </div>
    </div>
  );
}
