const arr = new Array(30_000_000).fill(1);
const k = 5;

const subArraySum = (arr) => {
	console.time('subArraySum');
	const obj = {};
	obj[0] = 1;
	let result = 0;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (obj.hasOwnProperty(sum - k)) {
			result += obj[sum - k];
		}
		if (!obj.hasOwnProperty(sum)) {
			obj[sum] = 0;
		}
		obj[sum]++;
	}
	console.timeEnd('subArraySum');
	return result;
}
console.log(subArraySum(arr));
