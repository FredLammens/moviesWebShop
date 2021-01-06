import axios from 'axios';
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import { useFormik } from 'formik';

const BasketForm = () => {

    const inventoryState = useSelector(state => state.inventory);
    let total = inventoryState.reduce((accumulator, currentval) => accumulator + currentval.price,0);

    const addInventory = (ordersId) => {
        inventoryState.forEach(product => {
            axios.post("http://localhost:3000/order/movie",{orderId: ordersId, movieId: product.id, qty: 1, price: product.price })
                 .then(
                     error => {console.log(error)}
                 )
        });
        alert("order added to database"); 
    };

    const formik = useFormik({
        initialValues: {
          firstname: '',
          lastname: '',
          street: '',
          number: 0,
          postalCode: 0,
          city: '',
          telephone: '',
          email: '',
          totalPrice: total.toFixed(2)
        },
        onSubmit: values => {
          let id = axios.post("http://localhost:3000/order",values)
                        .then(
                            response =>{addInventory(response.data)},
                            error => console.log(error)
                            );
          console.log(id);
        },
      });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
                <Row>
                    <Col>
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                        id="firstname"
                        name="firstname"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        required 
                        placeholder="John" />
                    </Col>
                    <Col>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control 
                        id="lastname"
                        name="lastname"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        required
                        placeholder="Doe" />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group >
                <Row>
                    <Col>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                         id="street"
                         name="street"
                         type="text"
                         onChange={formik.handleChange}
                         value={formik.values.street} 
                         required
                         placeholder="1234 Main St" />
                    </Col>
                    <Col>
                        <Form.Label>Nr.</Form.Label>
                        <Form.Control
                         id="number"
                         name="number"
                         type="number"
                         min="1"
                         onChange={formik.handleChange}
                         value={formik.values.number} 
                         required />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group >
                <Row>
                    <Col>
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                         id="city"
                         name="city"
                         type="text"
                         onChange={formik.handleChange}
                         value={formik.values.city}
                         required 
                         placeholder="Gent" />
                    </Col>
                    <Col>
                        <Form.Label>PostalCode</Form.Label>
                        <Form.Control
                        id="postalCode"
                        name="postalCode"
                        type="number" 
                        min="1"
                        onChange={formik.handleChange}
                        value={formik.values.postalCode}
                        required
                        />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                required
                placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Tel.</Form.Label>
                <Form.Control
                id="telephone"
                name="telephone"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.telephone}
                required
                placeholder="+32455623582" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
                </Button>
        </Form>
    );
}

export default BasketForm;