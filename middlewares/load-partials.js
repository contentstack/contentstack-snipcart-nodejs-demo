var async = require('async');

module.exports = function (req, res, next) {

	async.parallel([
		function (callback) {
			// Get Header data
			var Query = Stack.ContentType('header').Query()
				.toJSON()
				.only(["title", "navigation", "site_logo"])
				.includeReference("navigation.category")
				.find()
				.spread(function success(result) {
					if (result.length !== 0) {
						callback(null, result[0]);
					} else {
						throw new Error("Failed to load site navigation");
					}
				}, function error(error) {
					callback(error);
				})
		},
		function (callback) {
			// Get Footer data
			var Query = Stack.ContentType('footer').Query()
				.toJSON()
				.only(["footer_message", "developer_link"])
				.find()
				.spread(function success(result) {
					if (result.length !== 0) {
						callback(null, result[0]);
					} else {
						throw new Error("Failed to load site navigation");
					}
				}, function error(error) {
					callback(error);
				})
		}], function (error, success) {
			if (error) return next(error);
			res.locals.header = success[0];
			res.locals.footer = success[1];
			res.locals.snipcart_key = config.snipcart_key;
			next();
		})
};