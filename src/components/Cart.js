import React from 'react';

function Cart(props) {
    const{quantity = 0, handlebasketShow = Function.prototype} = props;

    return (
        <div className='cart #2196f3 blue white-text' onClick={handlebasketShow}>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
}

export default Cart;