import "./App.css";
import ProductList from "./components/ProcuctList";

function App() {
  const products = [
    { id: 1, name: "노트북", price: 1200000 },
    { id: 2, name: "키보드", price: 50000 },
    { id: 3, name: "마우스", price: 30000 },
  ];
  return (
    <div className="App">
      <h2>문제 1&#41; 상품 목록</h2>
      <ProductList products={products} />
    </div>
  );
}

export default App;
