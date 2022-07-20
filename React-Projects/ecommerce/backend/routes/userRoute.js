const express = require('express')
const router = express.Router()
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDeatils, updatePassword, updateProfile } = require('../controllers/userController')
const { isAuthenticatedUser } = require('../middleware/auth')

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/logout").get(logoutUser)
router.route("/me").get(isAuthenticatedUser, getUserDeatils)
router.route("/me/update").put(isAuthenticatedUser, updateProfile)
router.route("/password/update").put(isAuthenticatedUser,updatePassword)


module.exports = router