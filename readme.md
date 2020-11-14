# Node Windows Process ID

This is a Node library for getting process ID by its name on Windows.

## Installation

`git submodule add https://github.com/tomashubelbauer/node-win-pid`

## Usage

```js
import pid from './node-win-pid/index.js';

const id = await pid('notepad.exe');
```

## Development

Run tests using `npm test`.
