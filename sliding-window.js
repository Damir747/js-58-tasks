const str1 = 'abcbada';
const str2 = 'axbxcxd';
const str3 = 'aaaaaaa';
const str4 = 'abcdefg';
const findLongestString = (str) => {
	let result = '';
	let left = 0;
	let right = left;
	const mySet = new Set();

	while (right < str.length) {
		while (right < str.length && !mySet.has(str[right])) {
			mySet.add(str[right]);
			right++;
		}
		if (result.length < right - left) {
			result = str.slice(left, right);
		}

		while (mySet.has(str[right])) {
			mySet.delete(str[left]);
			left++;
		}
	}
	console.log(str, 'Ответ:', result.length, result);
	return result.length;
}
findLongestString(str1);
findLongestString(str2);
findLongestString(str3);
findLongestString(str4);