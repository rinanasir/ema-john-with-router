import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className="shop-container">
            <div className="product-container">

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default OrderReview;