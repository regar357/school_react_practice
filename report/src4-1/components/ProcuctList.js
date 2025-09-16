import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem name={product.name} price={product.price} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
