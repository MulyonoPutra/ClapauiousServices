const asyncHandler = require('express-async-handler');
const axios = require('axios');

require('dotenv').config();

exports.findAllMovies = asyncHandler(async (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY_MOVIE_DB}&language=en-US&page=1`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

exports.findMovieDetails = asyncHandler(async (req, res) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY_MOVIE_DB}&language=en-US`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});
