function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      // 방문하지 않은 노드일 경우 bfs로 탐색
      bfs(computers, visited, i, n);

      // 네트워크 개수를 +1 증가
      answer++;
    }
  }
  return answer;
}

function bfs(computers, visited, i, n) {
  const queue = [i]; // 시작 노드를 queue에 저장

  while (!!queue.length) {
    const node = queue.shift();
    visited[node] = true; // 현재 노드를 방문 처리

    for (let j = 0; j < n; j++) {
      if (visited[j] === false && computers[node][j] === 1) {
        // 방문하지 않은 노드이면서 연결되어 있을 경우 해당 노드를 queue에 저장
        queue.push(j);
      }
    }
  }
}
