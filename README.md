# Redux Project Practice

`Redux`를 이용해서 기본적인 프로젝트 구현

## Table of Contents

- [Redux?](#redux?)
  - [Action](#action)
  - [Reducer](#reducer)
- [Redux Component Description](#redux-component-description)
  - [Smart Component](#smart-component)
  - [Dumb Component](#dumb-component)
- [ETC](#etc)
  - [Spread Operator](#spread-operator)
  - [React Snippets](#react-snippets)

## Redux?

### Action

**작업에 대한 정보**를 지니고 있는 객체

### Reducer

**변화를 일으키는 함수** + 순수함수
* `(previousState, action) => newState`, 이전 상태와 액션을 받아서 다음 상태를 반환한다.
* `순수함수` = **비동기작업X, 인수변경X, 동일한 인수 = 동일한 결과**

## Redux Component Description

### Smart Component

* `Redux`와 직접 소통하는 Component. DOM을 직접 다루지 않고 Dumb Component에게 위임한다.
  *Control

### Dumb Component

* `Redux`와 직접 소통하지 않고 props를 이용해서 DOM을 다루는 Component
  *Counter, Value

## ETC

### Spread Operator

```diff
    const state = {
+   number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
+       u: 1,
        m: 2,
        b: 3
    }
};
```

**state**객체를 쉽게 변화하는 방법(ES6) : `Spread`연산자 이용

```js
...state,
        number: state.number + 1,
        dumbObject: {...state.dumbObject, u: 0}
```

## React Snippets

VSCODE (Visual Studio Code) Snippets
* `prop-types` : [reference](https://www.npmjs.com/package/prop-types)

```sh
npm install --save prop-types
```

```json
"React Component": {
	"prefix": "rc",
	"body": [
		"import React, { Component } from 'react';",
		"import PropTypes from 'prop-types';\n\n",
		"const propTypes = {\n\n};\n",
		"const defaultProps = {\n\n};\n",
		"class ${1:MyComponent} extends Component {\n",
			"\tconstructor(props) {",
				"\t\tsuper(props);",
			"\t}\n",
			"\trender() {",
			"\t\treturn(",
			"\t\t\t<div>${1:MyComponent}</div>",
			"\t\t);",
			"\t}",
		"}\n\n",
		"${1:MyComponent}.propTypes = propTypes;",
		"${1:MyComponent}.defaultProps = defaultProps;\n\n",
		"export default ${1:MyComponent};"
	],
		"description": "React Component Snippets"
}
```