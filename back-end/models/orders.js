const db = require('../config/db');

const Orders = {
    getOrder: (orderId) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM movieorder RIGHT JOIN orders ON movieorder.orderId = orders.id WHERE id = ?', [orderId], (err, movies, fields) => {
                if (err) reject(err);
                resolve(movies);
            })
        })
    },
    postOrder: (order) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO orders SET ?', [order], (err, order, fields) => {
                if (err) reject(err);
                resolve(order);
            })
        })
    },
    addMovieToOrder: (movieorder) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO movieorder SET ?', [movieorder], (err, movieorder, fields) => {
                if (err) reject(err);
                resolve(movieorder);
            })
        })
    }
}

module.exports = Orders;