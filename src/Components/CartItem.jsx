function CartItem({ product, removeFromCart }) {
    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

    return (
        <tr>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>${(product.price * product.quantity).toFixed(2)}</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={handleRemoveFromCart}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
}

export default CartItem;
