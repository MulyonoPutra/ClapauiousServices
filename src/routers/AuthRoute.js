const express = require('express');

const router = express.Router();

const authController = require('../controllers/AuthController');
const { isAuth } = require('../utils/Authentication');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/:id', authController.findById);
router.put('/update/:userId', isAuth, authController.updated);

module.exports = router;
