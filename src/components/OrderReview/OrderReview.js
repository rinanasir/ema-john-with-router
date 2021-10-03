import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h2>this is order review</h2>
            <h1>{products.length}</h1>
            <h3>{cart.length}</h3>
        </div>
    );
};

export default OrderReview;