/* eslint-disable */
export function promisifyRequests<A1, A2, T>(
	f: (arg1: A1, arg2: A2, cb: (err: any, res: T) => void) => void,
	thisContext?: any,
): (arg1: A1, arg2: A2) => Promise<T>;

export function promisifyRequests(f: any, thisContext?: any) {
	return function () {
		// eslint-disable-next-line prefer-rest-params
		const args = Array.prototype.slice.call(arguments);
		return new Promise((resolve, reject) => {
			args.push((err: any, result: any) => (err !== null ? reject(err) : resolve(result)));
			f.apply(thisContext, args);
		});
	};
}
