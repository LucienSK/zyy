'use strict'

class IndexController {
	* index (request, response) {
		// const user = request.param('user')
		const user = '显示首页信息'
		yield response.sendView('index',  { user })
	}
}

module.exports = IndexController
