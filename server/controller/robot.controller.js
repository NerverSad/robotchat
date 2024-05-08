const robotService = require('../service/robot.service')

class RobotController {
    async sendMessage(ctx, next) {
        const message = ctx.request.body.message
        ctx.body = await robotService.sendMessage(message)
    }
}
module.exports = new RobotController()