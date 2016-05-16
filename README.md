# Bitbucket issue manager

A simple command tool to perform common operations in a bitbucker issue tracker like visualization, creation, update and delete of issues.

## Installation

```
$ [sudo] npm install -g bitbucket-issue-manager
```

```
$ [sudo] bitbucket-issue-manager setup
```

## Documentation

### Get issues

#### Get all issues

```
$ bitbucket-issue-manager list
```
#### Get an issue by id

### Create a new issue

```
$ bitbucket-issue-manager create
```

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