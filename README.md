# OpenAPI Editor

[![Build Status](https://travis-ci.org/tylerlong/OpenAPI-Editor.svg?branch=master)](https://travis-ci.org/tylerlong/OpenAPI-Editor)
[![Coverage Status](https://coveralls.io/repos/github/tylerlong/OpenAPI-Editor/badge.svg?branch=master)](https://coveralls.io/github/tylerlong/OpenAPI-Editor?branch=master)

A desktop editor for OpenAPI 3.0 documents.

This is the [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification/blob/v3.0.1/versions/3.0.1.md) referenced.


## Setup

```
yarn install
```


## Development

```
yarn dev
open http://localhost:8080
```


## Test

```
yarn test
```


## Build

```
yarn build
```

## Distribution

```
yarn release && rm -rf dist && GH_TOKEN=github-token ./publish.sh
```

Go to GitHub and release it.


## todo list

- Get a new icon
- Write tests
- Setup Travis and coveralls
