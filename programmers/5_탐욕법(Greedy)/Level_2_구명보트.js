function solution(people, limit) {
  people.sort((a, b) => a - b);

  let [min, max] = [0, people.length - 1];
  let answer = 0;

  while (min < max) {
    if (people[min] + people[max] <= limit) {
      min++;
      max--;
    } else {
      max--;
    }
    answer++;
  }

  if (min === max) answer++;
  return answer;
}
