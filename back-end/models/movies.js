const db = require('../config/db');
const Movies = {
    fetchAllMovies: () => {
        return new Promise((resolve, reject) => {
                db.query('SELECT * FROM movies', (err, movies, fields) => {
                    if (err) reject(err);
                    resolve(movies);
                })
            });
    },
}

module.exports = Movies;