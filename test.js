import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import test from 'ava';
import {temporaryDirectory} from 'tempy';
import {isDirectoryEmpty, isDirectoryEmptySync} from './index.js';

test.beforeEach(t => {
	t.context.temporaryDirectory = temporaryDirectory();
});

test.afterEach.always(async t => {
	await fsPromises.rm(t.context.temporaryDirectory, {recursive: true});
});

test('isDirectoryEmpty - returns true for empty directory', async t => {
	const result = await isDirectoryEmpty(t.context.temporaryDirectory);
	t.true(result);
});

test('isDirectoryEmpty - returns false for non-empty directory', async t => {
	await fsPromises.writeFile(path.join(t.context.temporaryDirectory, 'test.txt'), 'test');
	const result = await isDirectoryEmpty(t.context.temporaryDirectory);
	t.false(result);
});

test('isDirectoryEmpty - throws error for non-existent directory', async t => {
	const nonExistentDirectory = temporaryDirectory();
	await fsPromises.rm(nonExistentDirectory, {recursive: true, force: true});
	await t.throwsAsync(isDirectoryEmpty(nonExistentDirectory), {code: 'ENOENT'});
});

test('isDirectoryEmptySync - returns true for empty directory', t => {
	const result = isDirectoryEmptySync(t.context.temporaryDirectory);
	t.true(result);
});

test('isDirectoryEmptySync - returns false for non-empty directory', t => {
	fs.writeFileSync(path.join(t.context.temporaryDirectory, 'test.txt'), 'test');
	const result = isDirectoryEmptySync(t.context.temporaryDirectory);
	t.false(result);
});

test('isDirectoryEmptySync - throws error for non-existent directory', t => {
	const nonExistentDirectory = temporaryDirectory();
	fs.rmSync(nonExistentDirectory, {recursive: true});
	t.throws(() => {
		isDirectoryEmptySync(nonExistentDirectory);
	}, {code: 'ENOENT'});
});
