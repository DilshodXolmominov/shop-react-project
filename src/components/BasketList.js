import React from 'react';
import BasketItem from './BasketItem';

function BasketList(props) {
    const {order, decrementQuantity, incrementQuantity} = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    },0)
    return (
        <div className='bkl'>
        <ul className='collection basket-list'>
            <li className='collection-item active basket-title'>
                Basket
                <i className='material-icons basket-close' onClick={props.handlebasketShow}>close</i>
            </li>
            {order.length ? order.map(item => {
               return(
                <BasketItem 
                key={item.id} 
                {...item}
                removeFromBasket={props.removeFromBasket}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}/> 
               )
            }):<li className='collection-item'>Basket is empty</li>}
            <li className='collection-item active basket-title'>Total Price: {totalPrice}$</li>
        </ul>
        </div>
    );
}

export default BasketList;