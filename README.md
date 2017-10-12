# Redux Project Practice

`Redux`를 이용해서 기본적인 프로젝트 구현

## Table of Contents

- [Redux?](#redux?)
  - [Action](#action)
  - [Reducer](#reducer)
	- [Store](#store)
- [React-Redux](#react-redux)
- [Redux Component Description](#redux-component-description)
  - [Smart Component](#smart-component)
  - [Dumb Component](#dumb-component)
- [ETC](#etc)
  - [Spread Operator](#spread-operator)
  - [React Snippets](#react-snippets)

## Redux?

Redux는 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너

### Action

`작업에 대한 정보`를 지니고 있는 객체

### Reducer

`변화를 일으키는 함수` + **순수함수**
* `(previousState, action) => newState`, 이전 상태와 액션을 받아서 다음 상태를 반환한다.
* `순수함수` = **비동기작업X, 인수변경X, 동일한 인수 = 동일한 결과**

### Store

어플리케이션의 `현재 상태`를 가지고 있음

* 주요 함수들
	* `dispatch(action)` : Action을 Reducer에게 보낸다
	* `getState()` : 현재 상태를 반환한다
	* `subscribe(listener)` : 상태가 바뀔 때마다 실행할 함수 등록

## React-Redux

**The View Layer Binding Tool** : React 컴포넌트에서 Redux를 사용할 때 복잡한 작업을 다해준다

* `Provider` : 해당 Component에서 Redux를 사용하도록 제공하는 Component

```js
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
```

* `connect([...options])`
	* Component를 Redux에 연결하는 함수를 반환한다. `ex) connect()(Counter)`
  * store에 연결 된 `새로운` Counter 컴포넌트 클래스가 반환된다
  * connect()의 매개변수를 주지않는다면 `this.props.store`로 접근 가능

* 매개변수들(옵션)
 	* `mapStateToProps()` : Redux State에 있는것을 이 컴포넌트의 Props로 매핑해준다.

 	* `mapDispatchToProps()` : Dispatch해주는 함수를 Props로 매핑해준다.

## Redux Component Description

### Smart Component

* `Redux`와 직접 소통하는 Component. DOM을 직접 다루지 않고 Dumb Component에게 위임한다.
	* Control

### Dumb Component

* `Redux`와 직접 소통하지 않고 props를 이용해서 DOM을 다루는 Component
	* Counter, Value

## ETC

### Spread Operator
`state` 객체를 쉽게 변화하는 방법(ES6) : `Spread` 연산자 이용

```diff
const state = {
+   	number: 0,
    	dummy: 'dumbdumb',
    	dumbObject: {
      		d: 0,
+     		u: 1,
      		m: 2,
      		b: 3
    	}
};
```

`state` 객체의 number와 `dumbObject` 객체의 u를 바꾸는 코드

```js
...state,
        number: state.number + 1,
        dumbObject: {...state.dumbObject, u: 0}
```

## React Snippets

VSCODE (Visual Studio Code) Snippets
* `prop-types` : [Reference](https://www.npmjs.com/package/prop-types)

```sh
npm install --save prop-types
```

파일 > 기본 설정 > 사용자 코드 조각 > javascript(babel)에 추가한다.

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