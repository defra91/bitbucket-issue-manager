'use strict';

var expect = require('chai').expect;
var bitbucketIssueManager = require('../../bitbucket-issue-manager');

describe('bitbucket-issue-manager - Create operations', function() {

	describe('createIssueFromPrompt', function() {

		var issue;

		beforeEach(function(done) {

			bitbucketIssueManager.createIssueFromPrompt().then(function(_issue) {
				issue = _issue;
				done();
			}).catch(function(err) {
				done(err);
			});
		});

		it('Should create correctly the issue', function() {
			expect(issue).to.not.be.undefined;
			console.log(JSON.stringify(issue, null, 4));
		});

	});

});