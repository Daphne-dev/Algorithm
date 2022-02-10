function solution(v) {
	const MAX_ROW = v.length; //X
	const MAX_COL = v[0].length; // Y
	// let AREA_COUNTER = 0; // 영역의 크기
	let area = []; // 영역의 크기를 저장하는 배열
	let answer = []; // 정답을 저장하는 배열

	for (let yIndex = 0; yIndex < MAX_COL; yIndex++) {
		for (let xIndex = 0; xIndex < MAX_ROW; xIndex++) {
			const count = dfs(v, xIndex, yIndex, MAX_ROW, MAX_COL, 0);
			if (count !== 0) {
				area.push(count);
			}
		}
	}
	console.log('area', area);
	answer.push(area.length); // 영역이 몇개 있는지 구한다
	area.sort((a, b) => b - a); // 최대 영역의 갯수를 구하기 위해서 정렬한다
	answer.push(!area[0] ? 0 : area[0]); // 영역의 최대 갯수를 구한다
	// 배열의 길이와, 최대 너비를 리턴한다
	return answer;
}

// DFS 재귀함수
function dfs(array, nowX, nowY, MAX_ROW, MAX_COL) {
	// 재귀 종료 조건
	if (nowX <= -1 || nowX >= MAX_ROW || nowY <= -1 || nowY >= MAX_COL) {
		return 0;
	}

	// 방문가능한 노드다
	if (array[nowX][nowY] === 1) {
		array[nowX][nowY] = 0; // 방문노드 표시

		console.log(nowX, nowY);
		// 동 서 남 북
		return (
			dfs(array, nowX - 1, nowY, MAX_ROW, MAX_COL) +
			dfs(array, nowX + 1, nowY, MAX_ROW, MAX_COL) +
			dfs(array, nowX, nowY - 1, MAX_ROW, MAX_COL) +
			dfs(array, nowX, nowY + 1, MAX_ROW, MAX_COL) +
			1
		);
	}
	return 0;
}

let answer = [
	[1, 1, 0, 1, 1],
	[0, 1, 1, 0, 0],
	[0, 0, 0, 0, 0],
	[1, 1, 0, 1, 1],
	[1, 0, 1, 1, 1],
	[1, 0, 1, 1, 1],
];
// let answer = [
// 	[1, 1, 0],
// 	[0, 0, 0],
// 	[1, 1, 1],
// ];
console.log(solution(answer));
