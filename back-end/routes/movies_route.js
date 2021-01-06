const express = require('express');
const movieRouter = express.Router();
const MovieController = require('../controllers/movies');

/* GET movies */
movieRouter.get('/movies', MovieController.getAllMovies);

module.exports = movieRouter;