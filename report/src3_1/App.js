import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
