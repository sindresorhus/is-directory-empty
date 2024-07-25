# is-directory-empty

> Check if a directory is empty

It uses the fastest way to check.

## Install

```sh
npm install is-directory-empty
```

## Usage

```js
import {isDirectoryEmpty} from 'is-directory-empty';

console.log(await isDirectoryEmpty('./some-directory'));
//=> true
```

## API

### `isDirectoryEmpty(path: string): Promise<boolean>`
### `isDirectoryEmptySync(path: string): boolean`

Returns a boolean indicating whether the directory at the given path is empty.

Throws if the path is not a directory or does not exist.
