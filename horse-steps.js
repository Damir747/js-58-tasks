const fieldSize = 9_000;
const calcHorseSteps = (x, y, xEnd, yEnd) => {
	const horseSteps = [
		[-2, -1], [-1, -2], [-2, 1], [-1, 2], [1, -2], [2, -1], [1, 2], [2, 1]
	];

	const cutQuarter = (item, step) => {
		const xItem = item % fieldSize;
		const yItem = Math.floor(item / fieldSize);
		if (Math.abs(xItem - xEnd) < 5 || Math.abs(yItem - yEnd) < 5) {
			return true;
		}
		if (xEnd >= xItem && yEnd >= yItem && (step === 6 || step === 7)) {
			return true;
		}
		if (xEnd >= xItem && yEnd < yItem && (step === 4 || step === 5)) {
			return true;
		}
		if (xEnd < xItem && yEnd >= yItem && (step === 2 || step === 3)) {
			return true;
		}
		if (xEnd < xItem && yEnd < yItem && (step === 0 || step === 1)) {
			return true;
		}
		return false;
	}

	const end = yEnd * fieldSize + xEnd;
	const visited = new Set();
	let level = 0;
	let prevSet = new Set();
	prevSet.add(y * fieldSize + x);
	while (prevSet.size) {
		let nextSet = new Set();
		for (const item of prevSet) {
			if (item === end) {
				console.log(level);
				return level;
			}
			visited.add(item);
			for (let i = 0; i < horseSteps.length; i++) {
				if (cutQuarter(item, i)) {
					const xItem = item % fieldSize + horseSteps[i][0];
					const yItem = Math.floor(item / fieldSize) + horseSteps[i][1];
					const nextItem = yItem * fieldSize + xItem;
					if (xItem >= 0 && xItem < fieldSize && yItem >= 0 && yItem < fieldSize
						&& !visited.has(nextItem) && !nextSet.has(nextItem)) {
						nextSet.add(nextItem);
					}
				}
			}
		}
		prevSet = nextSet;
		level++;
	}

	console.log(-1);
	return -1;
};

calcHorseSteps(0, 0, fieldSize - 1, fieldSize - 1);

