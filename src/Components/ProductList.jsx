import ProductItem from "./ProductItem";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductList({ products, addToCart }) {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <h2 className="mb-5 text-center">Lista de Productos</h2>
            <div className="row justify-content-center">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
