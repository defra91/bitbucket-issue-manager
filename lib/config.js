'use strict';

module.exports = {
	SCHEMA: process.env.SCHEMA || 'https',
	HOST: 'api.bitbucket.org/1.0/repositories',
	ACCOUNT_NAME: process.env.ACCOUNT_NAME,
	REPO_SLUG: process.env.REPO_SLUG
};
