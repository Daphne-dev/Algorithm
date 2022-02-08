function solution(n) {
  let answer = '';

  while (n) {
    let [quotient, remainder] = divmod(n, 3);
    answer = '412'[remainder] + answer;

    if (!remainder) {
      quotient--;
    }
    n = quotient;
  }
  return answer;
}

function divmod(num, targetNum) {
  return [parseInt(num / targetNum), num % targetNum];
}
