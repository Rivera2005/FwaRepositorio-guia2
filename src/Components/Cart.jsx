import CartItem from './CartItem';

function Cart({ cart, removeFromCart }) {
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-sm p-4" style={{ width: "100%", maxWidth: "600px" }}>
                <h2 className="text-center mb-4">Tu Carrito de Compras</h2>
                {cart.length === 0 ? (
                    <p className="text-center text-muted">No hay productos en el carrito.</p>
                ) : (
                    <div>
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product) => (
                                    <CartItem
                                        key={product.id}
                                        product={product}
                                        removeFromCart={removeFromCart}
                                    />
                                ))}
                            </tbody>
                        </table>
                        <div className="text-right">
                            <h4>Total a Pagar: <span className="text-primary">${total.toFixed(2)}</span></h4>
                        </div>
                        <div className="text-center mt-4">
                            <button className="btn btn-success btn-lg">
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
