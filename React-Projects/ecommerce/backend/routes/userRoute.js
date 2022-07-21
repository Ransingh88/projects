const express = require('express')
const router = express.Router()
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, updatePassword, updateProfile, getUserDetails, getAllUsers, getSingleUserDetails, updateUserProfile, deleteUser } = require('../controllers/userController')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/logout").get(logoutUser)
router.route("/me").get(isAuthenticatedUser, getUserDetails)
router.route("/me/update").put(isAuthenticatedUser, updateProfile)
router.route("/password/update").put(isAuthenticatedUser,updatePassword)
router.route("/admin/users").get(isAuthenticatedUser,authorizedRoles("admin"),getAllUsers)
router.route("/admin/user/:id").get(isAuthenticatedUser,authorizedRoles("admin"),getSingleUserDetails)
router.route("/admin/user/:id").put(isAuthenticatedUser,authorizedRoles("admin"),updateUserProfile)
router.route("/admin/user/:id").delete(isAuthenticatedUser,authorizedRoles("admin"),deleteUser)


module.exports = router