function solution(priorities, location) {
  let answer = 0;
  let highestPriority = Math.max(...priorities);

  while (true) {
    let value = priorities.shift();

    if (highestPriority === value) {
      answer++;

      if (location === 0) {
        break;
      } else {
        location--;
        highestPriority = Math.max(...priorities);
      }
    } else {
      priorities.push(value);

      if (location === 0) {
        location = priorities.length - 1;
      } else {
        location--;
      }
    }
  }
  return answer;
}
