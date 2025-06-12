import "./App.css";

// jsx in-depth introduction:
// jsx is a syntax extension for javascript that lets you write html-like code in javascript
// jsx gets transformed into regular javascript by babel during the build process

export default function App() {
  // 1. javascript expressions in jsx
  const username = "Jayesh";
  const age = 25;
  const styles = { color: "#1976d2", fontSize: "20px" };

  // 2. jsx can store jsx elements
  const greeting = <h2>Welcome back!</h2>;

  // 3. jsx and conditional rendering
  const isLoggedIn = true;
  const loginStatus = isLoggedIn ? (
    <span className="status-message">Logged In</span>
  ) : (
    <span className="status-message">Please Log In</span>
  );

  // 4. jsx and arrays/lists
  const fruits = ["Apple", "Banana", "Orange"];
  const fruitList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

  return (
    // 5. jsx requires one parent element (use fragments or div)
    <div className="container">
      {/* 6. className instead of class in jsx */}
      <h1 className="active">{username}</h1>

      {/* 7. inline styles require objects in jsx */}
      <p style={styles}>Age: {age}</p>

      {/* 8. embedding javascript expressions */}
      <div>
        {greeting}
        {loginStatus}
      </div>

      {/* 9. conditional rendering with && operator */}
      {isLoggedIn && (
        <p className="status-message">Welcome to your dashboard</p>
      )}

      {/* 10. rendering lists */}
      <ul>{fruitList}</ul>

      {/* 11. self-closing tags must be closed */}
      <input type="text" placeholder="Enter text here" />

      {/* 12. jsx comments must be inside curly braces */}
      {/* This is how you write comments in JSX */}

      {/* 13. html entities */}
      <p>Greater than: &gt; Less than: &lt;</p>
    </div>
  );

  // jsx gets converted to React.createElement calls:
  // return React.createElement("div", null,
  //   React.createElement("h1", { className: "active" }, username)
  // );
}
