import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2>this is order review</h2>
            <h1>{products.length}</h1>
        </div>
    );
};

export default OrderReview;