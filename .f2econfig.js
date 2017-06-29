const request = require('request')
module.exports = {
    app: 'static',
    onRoute (pathname, req, resp) {
        req.pipe(request('http://news.cn')).pipe(resp)
        return false
    }
}
