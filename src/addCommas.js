function addCommas (number) {
	let number_str = number.toString();

	let result = '';
	let count = 0;

	for (let i = number_str.length - 1; i >= 0; i--) {
		if (count === 3) {
			result += ',';
			count = 0;
		}

		result += number_str[i];
		count += 1;
	}

	result = result.split('').reverse().join('');

	return result;
}

module.exports = addCommas;
