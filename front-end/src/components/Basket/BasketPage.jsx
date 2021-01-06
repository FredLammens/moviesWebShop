import React from 'react';
import BasketForm from './Form';
import Inventory from './Inventory';
const BasketPage = () => {
    return (
        <div  className="BasketPage">
            <h1>Inventory</h1>
            <Inventory/>
            <hr/>
            <BasketForm/>
        </div>
    );
}
export default BasketPage;