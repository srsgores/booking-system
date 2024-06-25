export default function deepMerge(target, source) {
	const isObject = obj => obj && typeof obj === "object" && !Array.isArray(obj);

	if (!isObject(target) || !isObject(source)) {
		return source;
	}

	Object.keys(source).forEach(key => {
		if (isObject(source[key])) {
			if (!target[key] || !isObject(target[key])) {
				target[key] = {};
			}
			target[key] = deepMerge(target[key], source[key]);
		} else {
			target[key] = source[key];
		}
	});

	return target;
}
