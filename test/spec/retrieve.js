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
			expect(response).to.not.be.undefined;
			expect(response.issues).to.not.be.undefined;
			expect(response.issues.length).to.be.above(1);
		});

	});

	describe('getOneById', function() {

		var response;

		beforeEach(function(done) {
			bitbucketIssueManager.getOneById({
				id: 1
			}, function(err, _response) {
				if (err) {
					return done(err);
				}
				response = _response;
				return done();
			});
		});

		it('Should return the selected issue', function() {
			expect(response).to.not.be.undefined;
			console.log(JSON.stringify(response, null, 4));
		});

	});

});