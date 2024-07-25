import fs from 'node:fs';
import fsPromises from 'node:fs/promises';

export async function isDirectoryEmpty(path) {
	const directoryHandle = await fsPromises.opendir(path);

	const {done} = await directoryHandle[Symbol.asyncIterator]().next();

	if (!done) {
		await directoryHandle.close();
	}

	return done;
}

export function isDirectoryEmptySync(path) {
	const directoryHandle = fs.opendirSync(path);

	try {
		return directoryHandle.readSync() === null;
	} finally {
		directoryHandle.closeSync();
	}
}
