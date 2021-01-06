import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromInventory} from '../../store/Inventory/slice';
import { Button } from 'react-bootstrap';
const Inventory = () => {
    const inventoryState = useSelector(state => state.inventory);
    const dispatch = useDispatch();
    let totalPrice = inventoryState.reduce((accumulator, currentval) => accumulator + currentval.price,0);
    return (
        <div className="inventoryList">
            <ul>
                {inventoryState.map((item, index) => <li key={index}>{item.name} price: {item.price} €</li>)}
            </ul>
            <Button onClick={() => dispatch(removeFromInventory())} variant="danger">Remove Last</Button>
            <h1>Total Price: {totalPrice.toFixed(2)} €</h1>
        </div>
    );
}

export default Inventory;