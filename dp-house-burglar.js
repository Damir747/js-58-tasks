const houses = [4, 11, 10, 1, 2, 8, 5];
const foo = (houses) => {
	if (houses.length === 0) {
		return 0;
	}
	if (houses.length === 1) {
		return houses[0];
	}
	const dp = new Array(houses.length);
	dp[0] = houses[0];
	dp[1] = Math.max(houses[0], houses[1]);
	for (let i = 2; i < houses.length; i++) {
		dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
	}
	return dp[dp.length - 1];
};

console.log(foo(houses));