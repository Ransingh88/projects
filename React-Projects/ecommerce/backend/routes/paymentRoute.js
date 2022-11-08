const express = require('express')
const router = express.Router()
const { isAuthenticatedUser } = require('../middleware/auth')
const {processPayment, sendStripeApiKey} = require('../controllers/paymentController')


router.route('/process/payment').post(isAuthenticatedUser,processPayment)
router.route('/stripeApiKey').get(isAuthenticatedUser,sendStripeApiKey)


module.exports = router