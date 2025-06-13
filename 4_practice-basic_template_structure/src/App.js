import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h1>Welcome to Our Website</h1>
        <p>This is a simple React template</p>
      </main>
      <Footer />
    </div>
  );
}
