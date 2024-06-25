export default function deepMerge(target, original) {
	const isObject = obj => obj && typeof obj === "object";
	if (!isObject(target) || !isObject(original)) {
		return original;
	}
	Object.keys({...target, ...original}).forEach(key => {
		if (isObject(original[key]) && target[key]) {
			target[key] = deepMerge(target[key], original[key]);
		} else {
			target[key] = original[key];
		}
	});
	return target;
}
