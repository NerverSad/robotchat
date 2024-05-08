const router = require('koa-router')()
router.prefix('/robots')

const { sendMessage } = require('../controller/robot.controller')

router.post('/sendMessage', sendMessage)

module.exports = router
