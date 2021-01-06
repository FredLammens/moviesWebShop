import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addToInventory} from '../../store/Inventory/slice';

const Test = (props) => {
    //hook om dispatch van store te kunnen gebruiken
    const dispatch = useDispatch();
    const {id,name,description,price} = props;
    return (
            <Card bg = 'secondary' text='white' key={id}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price} €</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button onClick={() => dispatch(addToInventory(props))} variant="success">Add</Button>
                </Card.Body>
            </Card>
    );
}

export default Test;