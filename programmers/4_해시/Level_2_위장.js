function solution(clothes) {
  let answer = 1;
  const clothesKinds = {};

  clothes.forEach(([_, kinds]) => {
    if (kinds in clothesKinds) {
      clothesKinds[kinds]++;
    } else {
      clothesKinds[kinds] = 1;
    }
  });

  for (const kinds in clothesKinds) {
    answer *= clothesKinds[kinds] + 1;
  }
  return answer - 1;
}

/**
 * 테스트 코드 실행
 */
console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
);
