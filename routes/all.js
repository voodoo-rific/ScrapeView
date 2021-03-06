//import into mega router
var mongoose 	= require('mongoose');
var router 	=   require('express').Router();

var config = {
	router: 	router,
	Tweet: 		mongoose.model('Tweet'),
	Place: 		mongoose.model('Place'),
	Trends:     mongoose.model('Trends'),
	RedditPosts: mongoose.model('RedditPosts')
};

require('./index.js')(config);
require('./tweets.js')(config);
require('./places.js')(config);
require('./trends.js')(config);
require('./redditPosts.js')(config);

module.exports = router;