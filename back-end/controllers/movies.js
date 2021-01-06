const Movies = require('../models/movies');

exports.getAllMovies = (req, res) => {
    Movies.fetchAllMovies()
        .then(movies => res.json(movies))
        .catch(err => res.send(err))
}