'use strict';

var expect = require('chai').expect;

var bitbucketIssueManager = require('../../bitbucket-issue-manager');
var retrieveCtrl = require('../../lib/retrieve-ctrl.js');

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

	describe('getComponents', function() {

		var components;

		beforeEach(function(done) {

			retrieveCtrl.getComponents(function(err, _components) {
				if (err) {
					done(err);
				} else {
					components = _components;
					done();
				}
			});
		});

		it('Should return the correctly components defined on the issue tracker', function() {
			expect(components).to.not.be.undefined;
			console.log('components', JSON.stringify(components, null, 4));
		});
	});

	describe('getMilestones', function() {
		var milestones;

		beforeEach(function(done) {
			retrieveCtrl.getMilestones(function(err, _milestones) {
				if (err) {
					done(err);
				} else {
					milestones = _milestones;
					done();
				}
			});
		});

		it('Should return all the milestones defined for the issue tracker', function() {
			expect(milestones).to.not.be.undefined;
			console.log('milestones', JSON.stringify(milestones, null, 4));
		});
	});	

	describe('getVersions', function() {
		var versions;

		beforeEach(function(done) {
			retrieveCtrl.getVersions(function(err, _versions) {
				if (err) {
					done(err);
				} else {
					versions = _versions;
					done();
				}
			});
		});

		it('Shoud return all the versions defined for the issue tracker', function() {
			expect(versions).to.not.be.undefined;
			console.log('versions', JSON.stringify(versions, null, 4));
		});
	});
});