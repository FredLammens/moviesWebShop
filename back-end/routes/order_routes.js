const express = require('express');
const orderRouter = express.Router();
const OrderController = require('../controllers/orders');
const {
    check,
    validationErrors
} = require('express-validator');

/* GET movies */
orderRouter.get('/order/:id([0-9]{1})', OrderController.getOrder);
/* POST order and return id*/
orderRouter.post('/order',[
    check('email').isEmail().normalizeEmail(),
    check('firstname').trim(),
    check('lastname').trim(),
    check('street'),
    check('number').isInt(),
    check('telephone').isMobilePhone(),
],OrderController.postOrder);
/* Adds movie to order */
orderRouter.post('/order/movie',[
    check('qty').isInt({min: 1}),
    check('price').isFloat()
],OrderController.addMovieToOrder);
module.exports = orderRouter;