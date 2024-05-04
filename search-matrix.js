const arr = [
	[1, 4, 7, 11, 15, 16],
	[2, 5, 8, 12, 19, 22],
	[3, 6, 9, 16, 22, 24],
	[10, 13, 14, 17, 24, 27],
	[18, 21, 23, 26, 30, 36]
];
const k = 14;

const searchMatrix = (arr, k) => {
	if (!arr.length) {
		return 0;
	}
	let i = 0;
	let j = arr[i].length - 1;
	while (i < arr.length && j >= 0) {
		if (arr[i][j] === k) {
			return true;
		}
		if (arr[i][j] > k) {
			j--;
		} else {
			i++;
		}
	}

	return false;
};

console.log(searchMatrix(arr, k));