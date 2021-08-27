const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    sescret: proocess.env.JWT_SECRET,
    userProperty: 'payload'
});

const authController = require('../controllers/authentication');
const tripsContoller = require('../controllers/trips');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsContoller.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode),
    put(auth, tripsController.tripsUpdateTrip);
    
module.exports = router;