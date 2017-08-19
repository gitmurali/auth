const authentication = require('./controllers/authentication');

module.exports = function(app) {
	app.post('/signup', authentication.signup);
}
