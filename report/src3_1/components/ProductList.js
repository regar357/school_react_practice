function ProductList() {
  const productList = ["무선 이어폰", "스마트 워치", "게이밍 키보드"];

  return (
    <div className="ProductList">
      <section id="products">
        <h2>🛍️ 인기 상품</h2>
        <ul>
          {productList.map((product, i) => (
            <li key={i}>{product}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ProductList;
