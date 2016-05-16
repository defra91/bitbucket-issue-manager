# Bitbucket issue manager

[![NPM](https://nodei.co/npm/bitbucket-issue-manager.png)](https://npmjs.org/package/bitbucket-issue-manager)

A simple command tool to perform common operations in a bitbucker issue tracker like visualization, creation, update and delete of issues.

- [Installation](#installation)
- [Documentation](#documentation)
	-- [Get issues](#get-issues)
		--- [Get all issues](#get-all-issues)
		--- [Get an issue by id](#get-an-issue-by-id)
	-- [Create a new issue](#create-a-new-issue)
- [Goal and philosophy](#goal-and-philosophy)
- [Upcoming featueres](#upcoming-features)
- [License](#license)

## Installation

```
$ [sudo] npm install -g bitbucket-issue-manager
```

```
$ [sudo] bitbucket-issue-manager setup
```

<img style="margin-bottom:25px" align="left" alt="module setup" src="/docs/assets/setup.png" title="Setup"/>

## Documentation

### Get issues

#### Get all issues

```
$ bitbucket-issue-manager list
```

<img style="margin-bottom:25px" align="left" alt="List issues" src="/docs/assets/list.png" title="List all issues"/>

#### Get an issue by id

```
$ bitbucker-issue-manager get [id]
```

<img style="margin-bottom:25px" align="left" alt="Get issue by id" src="/docs/assets/get.png" title="Get an issue by id"/>

### Create a new issue

```
$ bitbucket-issue-manager create
```

It will start a prompt which will allow you to configure the fields of the new issue.

<img style="margin-bottom:25px" align="left" alt="Create an issue" src="/docs/assets/create.png" title="Create a new issue"/>

## Goal and philosophy

I've always found very useful the issue tracking system that hosting services like **github** or **bitbucket** provide to manage your projects. Furthermore I've worked on several projects that used to make an intensive use of features in order to track bugs, enhancements, suggestions or any other question related to source code. 

In some cases I've also worked on projects that used the issue tracker as a project management tool and I found myself very confortable.

However I noticed that managing issues required me to costantly switch between my working space and a browser, causing distractions and waste of time. I really wanted to manage issues from command line, which would save me a lot of time and keep me away from distractions.

## Upcoming features

- Get the list of issues by status
- Get the list of issues by assignee
- Get all the comments related to an existing issue
- Comment an existing issue
- Update an existing issue
- Close an existing issue
- Assign an existing issue
- Change issue status

## License

bitbucket-issue-manager is under MIT license.