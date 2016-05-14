'use strict';

var prompt = require('prompt');
var fs = require('fs');

var configFileName = __dirname + '/../config.json';

var config = fs.readFileSync(configFileName, 'utf-8');
config = JSON.parse(config);

var schema = {
	properties: {
		'username': {
			required: true
		},
		'repositoryName': {
			required: true,
		}
	}
};

module.exports = function(cb) {

	prompt.start();

	prompt.get(schema, function(err, result) {
		if (err) {
			return cb(err);
		}
		config.ACCOUNT_NAME = result.username;
		config.REPO_SLUG = result.repositoryName;
		console.log(JSON.stringify(config, null, 4));
		fs.writeFile(configFileName, JSON.stringify(config, null, 4), function(err) {
			if (err) {
				return cb(err);
			} else {
				cb(null, err);
			}
		});
	});
};