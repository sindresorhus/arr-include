export default function arrayInclude(array, inclusions) {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got \`${typeof array}\``);
	}

	return array.filter(item => inclusions.includes(item));
}
