/**
Check if a directory is empty.

@param path - The path to the directory to check.
@returns A promise that resolves to true if the directory is empty, false otherwise.
@throws If the path is not a directory or does not exist.

@example
```
import {isDirectoryEmpty} from 'is-directory-empty';

console.log(await isDirectoryEmpty('./some-directory'));
//=> true
```
*/
export function isDirectoryEmpty(path: string): Promise<boolean>;

/**
Synchronously check if a directory is empty.

@param path - The path to the directory to check.
@returns True if the directory is empty, false otherwise.
@throws If the path is not a directory or does not exist.

@example
```
import {isDirectoryEmptySync} from 'is-directory-empty';

console.log(isDirectoryEmptySync('./some-directory'));
//=> true
```
*/
export function isDirectoryEmptySync(path: string): boolean;
