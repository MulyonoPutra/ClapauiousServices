const express = require('express');

const router = express.Router();

const movieController = require('../controllers/MovieController');
const { isAuth } = require('../utils/Authentication');

router.get('/popular', movieController.findAllMovies);
router.get('/details/:id', movieController.findMovieDetails)


module.exports = router;