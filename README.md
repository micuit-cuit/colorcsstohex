# `colorcsstohex` 
`colorcsstohex` is a JavaScript library that provides functions for converting colors between different formats.

## Installation
colorcsstohex can be installed via [npm](https://www.npmjs.com/package/colorcsstohex):
```sh
npm i colorcsstohex
```
## Usage
### `convertColor(color)`
Converts a color from one format to another. The color parameter can be in any of the following formats:

 - Hexadecimal string (e.g. `"#ff0000"`)
 - RGB string (e.g. `"rgb(255, 0, 0)"`)
 - HSL string (e.g. `"hsl(0, 100%, 50%)"`)
 - Named color string (e.g. `"red"`)
 - The function returns a hexadecimal string representing the converted color.

Example:

```javascript
const { convertColor } = require('colorcsstohex');

const hexColor = convertColor('rgb(255, 0, 0)'); // returns "#ff0000"
```
### `isValidHex(hex)`
Checks if a string is a valid hexadecimal color code. Returns `true` if the input is valid, `false` otherwise.

Example:

```javascript
const { isValidHex } = require('colorcsstohex');

const isValid = isValidHex('#ff0000'); // returns true
```
### `namedToHex(name)`
Converts a named color to its corresponding hexadecimal code. Returns a hexadecimal string.

Example:

```javascript
const { namedToHex } = require('colorcsstohex');

const hexColor = namedToHex('red'); // returns "#ff0000"
```