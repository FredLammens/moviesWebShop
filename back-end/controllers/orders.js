const Orders = require('../models/orders');

exports.getOrder = (req, res) => { //werkt
    const orderId = req.params.id;
    Orders.getOrder(orderId)
        .then(orders => res.json(orders))
        .catch(err => res.send(err))
}
exports.postOrder = (req, res) => {//werkt
    let order = req.body;
    order = {...order, created : new Date() };
    Orders.postOrder(order)
        .then(order =>res.status(200).send(order.insertId.toString()))
        .catch(err => res.send(err))
}
exports.addMovieToOrder = (req, res) => {
    let movieOrder = req.body;
    Orders.addMovieToOrder(movieOrder)
        .then(movieorder => res.json(movieorder))
        .catch(err => res.send(err))
}