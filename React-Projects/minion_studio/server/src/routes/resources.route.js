const express = require('express')
const router = express.Router()
const resourceController = require('../controller/resources.controller')

router.get('/',resourceController.getResources)
router.post('/',resourceController.postResources)

module.exports = router