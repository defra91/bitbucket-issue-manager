'use strict';

var expect = require('chai').expect;

var bitbucketIssueManager = require('../../bitbucket-issue-manager');

describe('bitbucket-issue-manager - retrieve issues', function() {

	describe('retrieveAll', function() {

		var response;

		beforeEach(function(done) {
			bitbucketIssueManager.retrieveAll(function(err, _response) {
				if (err) {
					done(err);
				} else {
					response = _response;
					done();
				}
			});
		});

		it('Should return all the issues related to the repository in the configuration file', function() {
			console.log(response);
		});

	});

});