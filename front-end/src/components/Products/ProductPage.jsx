import React from 'react';
import Product from './Product';
import { CardColumns } from 'react-bootstrap';
const ProductPage = (props) => {
    const { movies } = props;
    return (
        <div className="ProductPage">
            <h1>ProductPage</h1>
            <CardColumns>
            {movies.map(Product)}
            </CardColumns>
        </div>
    );
}

export default ProductPage;