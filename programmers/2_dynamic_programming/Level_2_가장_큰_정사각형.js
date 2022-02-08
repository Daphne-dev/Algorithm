/**
 * board에서 자신의 위치의 왼쪽, 왼쪽 상단, 위쪽의 숫자를 비교하여
 * 해당 위치에서 만들 수 있는 가장 큰 정사각형의 크기를 메모이제이션하는 방법으로 해결
 */
function solution(board) {
	let answer = 0;
	const row = board.length;
	const col = board[0].length;

	if (row < 2 || col < 2) return 1;

	for (let i = 1; i < row; i++) {
		for (let j = 1; j < col; j++) {
			if (board[i][j] !== 0) {
				let min = Math.min(
					board[i][j - 1],
					board[i - 1][j - 1],
					board[i - 1][j]
				);
				board[i][j] = min + 1;
			}
			if (answer < board[i][j]) answer = board[i][j];
		}
	}

	return answer * answer;
}
