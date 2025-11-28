// TODO 1: 숫자 배열을 받아서 평균을 구하는 함수 만들기
// 예: average([1, 2, 3]) -> 2

// 숫자 배열의 평균을 계산합니다 냥
function average(nums) {
	if (!Array.isArray(nums)) throw new TypeError('average expects an array');
	if (nums.length === 0) return NaN;
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		const v = nums[i];
		if (typeof v !== 'number' || Number.isNaN(v)) throw new TypeError('Array must contain only numbers');
		sum += v;
	}
	return sum / nums.length;
}

// TODO 2: 문자열 배열을 받아서 길이가 3 이상인 문자열만 남기는 함수 만들기
// 예: filterLong(["a", "abcd", "hi"]) -> ["abcd"]

// 문자열 길이가 3 이상인 항목만 필터합니다 냥
function filterLong(arr) {
	if (!Array.isArray(arr)) throw new TypeError('filterLong expects an array');
	return arr.filter(item => typeof item === 'string' && item.length >= 3);
}

console.log('Experiment start');

module.exports = { average, filterLong };