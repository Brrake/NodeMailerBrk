const bodyParser = require('body-parser')
module.exports = function (app) {
    const jsonParser = bodyParser.json()
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(jsonParser)
}