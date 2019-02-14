
# react-basic-error-boundary
[![package version](https://img.shields.io/npm/v/react-basic-error-boundary.svg?style=flat-square)](https://npmjs.org/package/react-basic-error-boundary)
[![package downloads](https://img.shields.io/npm/dm/react-basic-error-boundary.svg?style=flat-square)](https://npmjs.org/package/react-basic-error-boundary)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-basic-error-boundary.svg?style=flat-square)](https://npmjs.org/package/react-basic-error-boundary)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/react-basic-error-boundary.svg)](https://greenkeeper.io/)

> Basic error boundary component. Based on the [React documentation](https://reactjs.org/docs/error-boundaries.html).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install react-basic-error-boundary
$ # OR
$ yarn add react-basic-error-boundary
```

## Usage

```js
import React, {Component} from 'react'
import BasicErrorBoundary from 'react-basic-error-boundary'


class App extends Component () {
	render() {
		return <BasicErrorBoundary
			fallback={() => <NoMatch/>}
			onError={(error) => console.error(error)}
			>
		<h1>Hi</h1>
		</BasicErrorBoundary>
	}
}

export default App
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT © [tiaanduplessis](https://github.com/tiaanduplessis)
