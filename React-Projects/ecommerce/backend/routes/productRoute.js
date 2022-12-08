const express = require('express')
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getAllReviews, deleteReview, getProductList } = require('../controllers/productController')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')

const router = express.Router()

router.route('/products').get(getAllProducts)
router.route('/admin/products').get(isAuthenticatedUser,authorizedRoles("admin"),getProductList)
router.route('/admin/products/new').post(isAuthenticatedUser,authorizedRoles("admin"),createProduct)
router.route('/admin/products/:id').put(isAuthenticatedUser,authorizedRoles("admin"),updateProduct)
router.route('/admin/products/:id').delete(isAuthenticatedUser,authorizedRoles("admin"),deleteProduct)
router.route('/products/:id').get(getProductDetails)
router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/review').get(getAllReviews)
router.route('/review').delete(isAuthenticatedUser,deleteReview)

module.exports = router