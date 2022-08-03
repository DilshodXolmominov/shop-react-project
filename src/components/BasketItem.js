import React from 'react';

function BasketItem(props) {
    const{id, name, price, quantity,decrementQuantity, incrementQuantity} = props
    return (
        <li className='collection-item'>
            {name} x {quantity} = {price * quantity}$
            <span className='secondary-content'>
                <i className='material-icons add_remove' onClick={() => incrementQuantity(id)}>add</i>
                <i className='material-icons add_remove'  onClick={() => decrementQuantity(id)}>remove</i>
                <i className='material-icons basket-delete' 
                onClick={() => props.removeFromBasket(id) }>delete_forever</i>
            </span>
        </li>
    );
}

export default BasketItem;