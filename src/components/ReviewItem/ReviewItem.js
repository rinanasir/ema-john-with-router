import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button
                    onClick={() => handleRemove(key)}
                    className="btn-regular"
                >{deleteIcon} Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;