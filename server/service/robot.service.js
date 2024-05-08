const messageCom = require('../common/message.json')

class RobotService {
    async sendMessage(message) {
        let defaultMessage = messageCom[message] ? messageCom[message] : "超出我的范畴"
        await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟1秒的思考时间
        return `你好，我收到了你的消息"${defaultMessage}"，正在思考中...`;
    }
}

module.exports = new RobotService()