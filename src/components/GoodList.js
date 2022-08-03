import React from 'react';
import GoodItem from './GoodItem'
 
function GoodList(props) {
    const {goods = [], cartBasket} = props;

    if(!goods.length){
        return <h3>Nothing here</h3>;
    }
    return (
        <div className="goods">
           {goods.map((item) => (
             <GoodItem key={item.id} {...item} cartBasket = {cartBasket}/>
           ))} 
        </div>
    );
}

export default GoodList;