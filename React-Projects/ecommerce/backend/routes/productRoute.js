const express = require('express')
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')

const router = express.Router()

router.route('/products').get(getAllProducts)
router.route('/products/new').post(isAuthenticatedUser,authorizedRoles("admin"),createProduct)
router.route('/products/:id').put(isAuthenticatedUser,authorizedRoles("admin"),updateProduct)
router.route('/products/:id').delete(isAuthenticatedUser,authorizedRoles("admin"),deleteProduct)
router.route('/products/:id').get(getProductDetails)

module.exports = router