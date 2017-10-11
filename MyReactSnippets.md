## React Snippets

VSCODE (Visual Studio Code) Snippets
**prop-types** : [here] (https://www.npmjs.com/package/prop-types)

```
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