import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    // console.log(cart);

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        // console.log(product);
        // product.quantity = !product.quantity ? 1 : product.quantity;
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    // another way
    /* const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0); */

    // in short
    /* const total = cart.reduce((previous, product) => previous + product.price, 0); */

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;

    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary </h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <table>
                <tr>
                    <td>Total:</td>
                    <td>{total.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Shipping:</td>
                    <td>{shipping}</td>
                </tr>
                <tr>
                    <td>Tax:</td>
                    <td>{tax.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Gradn Total:</td>
                    <td>{grandTotal.toFixed(2)}</td>
                </tr>
            </table>
        </div>
    );
};

export default Cart;